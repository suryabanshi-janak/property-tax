import { SQ_FEET_TO_DHUR_CONVERSION_RATE } from '@/constants';
import { HOUSE_RATE, LAND_RATE, PROPERTY_TAX_RANGE } from '@/data';
import { calculateTotalDhur } from './utils';
import { FormRequestData } from './validator/form';

interface LandTaxData {
  length: number;
  breadth: number;
  story: number;
  type: string;
  ratePerDhur: number;
}

const calculateHouseValuation = ({
  length,
  breadth,
  story,
  type,
}: {
  length: number;
  breadth: number;
  story: number;
  type: string;
}) => {
  const areaWithoutStory = length * breadth;
  const areaWithStory = areaWithoutStory * story;

  const houseRate = HOUSE_RATE.find((house) => house.type === type)
    ?.rate as number;
  const houseValuation = areaWithStory * houseRate;
  return { houseValuation, areaWithoutStory };
};

const findTaxAmount = (valuation: number) => {
  return PROPERTY_TAX_RANGE.find((range) => {
    return valuation >= range.min && valuation <= range.max;
  })?.rate as number;
};

export const calculateLandTax = ({
  length,
  breadth,
  story,
  type,
  ratePerDhur,
}: LandTaxData): {
  houseTaxAmout: number;
  occupiedLand: number;
} => {
  const { houseValuation, areaWithoutStory } = calculateHouseValuation({
    length,
    breadth,
    story,
    type,
  });

  const occupiedLandInDhur =
    (areaWithoutStory / SQ_FEET_TO_DHUR_CONVERSION_RATE) * 2;
  const fixedOccupiedLandInDhur = occupiedLandInDhur.toFixed(2);

  const occupiedLandValuation = +fixedOccupiedLandInDhur * ratePerDhur;

  const totalValuation = occupiedLandValuation + houseValuation;

  const taxableAmount = totalValuation * 0.8; // 80%

  const taxAmount = findTaxAmount(taxableAmount);

  return { houseTaxAmout: taxAmount, occupiedLand: +fixedOccupiedLandInDhur };
};

export const taxForTenDhurOrLess = (
  data: FormRequestData,
  landValuation: number
) => {
  const { houseValuation } = calculateHouseValuation({
    length: +data.houseLength!,
    breadth: +data.houseBreadth!,
    story: +data.houseStory!,
    type: data.houseType!,
  });

  const totalValuation = landValuation + houseValuation;
  const taxableAmount = totalValuation * 0.8; // 80%

  return findTaxAmount(taxableAmount);
};

export const calculateTotalTax = (data: FormRequestData) => {
  const {
    houseBreadth,
    houseLength,
    katha,
    bigha,
    dhur,
    houseStory,
    houseType,
    landType,
    isLandEmpy,
  } = data;

  const landRate = LAND_RATE.find((land) => land.type === landType)
    ?.rate as number;
  const ratePerDhur = landRate / 20;

  const totalDhur = calculateTotalDhur({
    bigha,
    katha,
    dhur,
  });

  let houseTax = 0,
    landTax = 0;

  let totalEmptyLand = totalDhur;
  if (totalDhur > 10) {
    if (!isLandEmpy && houseLength && houseBreadth) {
      const { houseTaxAmout, occupiedLand } = calculateLandTax({
        length: +houseLength!,
        breadth: +houseBreadth!,
        story: +houseStory!,
        type: houseType!,
        ratePerDhur: ratePerDhur,
      });
      totalEmptyLand = totalEmptyLand - occupiedLand;
      houseTax = houseTaxAmout;
    }

    const emptyLandValuation = totalEmptyLand * ratePerDhur;

    const landTaxAmount = emptyLandValuation * 0.0005; // 0.5%
    landTax = +landTaxAmount.toFixed(2);
  } else {
    if (isLandEmpy) {
      const emptyLandValuation = totalEmptyLand * ratePerDhur;
      const landTaxAmount = emptyLandValuation * 0.0005; // 0.5%
      landTax = +landTaxAmount.toFixed(2);
    } else {
      const landValuation = totalDhur * ratePerDhur;
      landTax = taxForTenDhurOrLess(data, landValuation);
    }
  }

  return { houseTax, landTax };
};
