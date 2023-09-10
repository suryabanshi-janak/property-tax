interface RATE {
  type: string;
  rate: number;
}

interface PropertyTaxRange {
  id: number;
  min: number;
  max: number;
  rate: number;
}

export const LAND_RATE: RATE[] = [
  { type: 'लोकमार्ग सडक मोहडा', rate: 1800000 },
  { type: 'लोकमार्ग दायाँबायाँ ३00मी.', rate: 1200000 },
  { type: 'भित्री पक्की', rate: 420000 },
  { type: 'भित्री कच्ची', rate: 300000 },
  { type: 'खेती योग्य', rate: 90000 },
  { type: 'केउली खेती योग्य', rate: 45000 },
  { type: 'केउली भित्री कच्ची सडक', rate: 100000 },
  { type: 'केउली भित्री पक्की सडक मोहडा', rate: 150000 },
  { type: 'केउली मूल सडक मोहडा', rate: 250000 },
];

export const HOUSE_RATE: RATE[] = [
  { type: 'आर सि.सी. पक्की घर', rate: 1300 },
  { type: 'आर सि.सी. पिलर टिनको छाना', rate: 1000 },
  { type: 'पिलर नभएको पक्की ढलान', rate: 800 },
  { type: 'ब्लक सिमेन्ट टिनको छाना', rate: 600 },
  { type: 'व्यवसायीक ट्रस', rate: 600 },
  { type: 'काठको घरमा टायल टिनको छाना', rate: 300 },
  { type: 'टहरा / ट्रस', rate: 125 },
];

export const PROPERTY_TAX_RANGE: PropertyTaxRange[] = [
  { id: 1, min: 1, max: 100000, rate: 0 },
  { id: 2, min: 100001, max: 200000, rate: 75 },
  { id: 3, min: 200001, max: 400000, rate: 125 },
  { id: 4, min: 400001, max: 600000, rate: 175 },
  { id: 5, min: 600001, max: 800000, rate: 225 },
  { id: 6, min: 800001, max: 1000000, rate: 275 },
  { id: 7, min: 1000001, max: 1300000, rate: 370 },
  { id: 8, min: 1300001, max: 1600000, rate: 425 },
  { id: 9, min: 1600001, max: 1900000, rate: 500 },
  { id: 10, min: 1900000, max: 2200000, rate: 700 },
  { id: 11, min: 2200001, max: 2500000, rate: 1000 },
  { id: 12, min: 2500001, max: 2800000, rate: 1300 },
  { id: 13, min: 2800001, max: 3200000, rate: 1700 },
  { id: 14, min: 3200001, max: 3600000, rate: 2100 },
  { id: 15, min: 3600001, max: 4000000, rate: 2500 },
  { id: 16, min: 4000001, max: 4500000, rate: 3000 },
  { id: 17, min: 4500001, max: 5000000, rate: 3500 },
  { id: 18, min: 5000001, max: 6000000, rate: 4750 },
  // { id: 19, min: '', max: '', rate: '' },
  // { id: 20, min: '', max: '', rate: '' },
  // { id: 21, min: '', max: '', rate: '' },
  // { id: 22, min: '', max: '', rate: '' },
  // { id: 23, min: '', max: '', rate: '' },
  // { id: 24, min: '', max: '', rate: '' },
  // { id: 25, min: '', max: '', rate: '' },
  // { id: 26, min: '', max: '', rate: '' },
  // { id: 27, min: '', max: '', rate: '' },
  // { id: 28, min: '', max: '', rate: '' },
  // { id: 29, min: '', max: '', rate: '' },
  // { id: 30, min: '', max: '', rate: '' },
  // { id: 31, min: '', max: '', rate: '' },
  // { id: 32, min: '', max: '', rate: '' },
  // { id: 33, min: '', max: '', rate: '' },
  // { id: 34, min: '', max: '', rate: '' },
  // { id: 35, min: '', max: '', rate: '' },
];
