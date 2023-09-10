import { FormData } from '@/components/LandForm';
import { SQ_FEET_TO_DHUR_CONVERSION_RATE } from '@/constants';
import { HOUSE_RATE, LAND_RATE, PROPERTY_TAX_RANGE } from '@/data';
import { calculateTotalDhur } from './utils';

interface LandTaxData {
  length: number;
  breadth: number;
  story: number;
  type: string;
  ratePerDhur: number;
}

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
  const areaWithoutStory = length * breadth;
  const areaWithStory = areaWithoutStory * story;

  const houseRate = HOUSE_RATE.find((house) => house.type === type)
    ?.rate as number;
  const houseValuation = areaWithStory * houseRate;

  const occupiedLandInDhur =
    (areaWithoutStory / SQ_FEET_TO_DHUR_CONVERSION_RATE) * 2;
  const fixedOccupiedLandInDhur = occupiedLandInDhur.toFixed(2);

  const occupiedLandValuation = +fixedOccupiedLandInDhur * ratePerDhur;

  const totalValuation = occupiedLandValuation + houseValuation;

  const taxableAmount = totalValuation * 0.8; // 80%

  const taxAmount = findTaxAmount(taxableAmount);

  return { houseTaxAmout: taxAmount, occupiedLand: +fixedOccupiedLandInDhur };
};

export const calculateHouseTax = () => {};

export const calculateTotalTax = (data: FormData) => {
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

  let totalEmptyLand = totalDhur;
  let houseTax = 0;
  if (!isLandEmpy) {
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
  const fixedLandTaxAmount = +landTaxAmount.toFixed(2);

  return {
    houseTax,
    landTax: fixedLandTaxAmount,
  };
};
