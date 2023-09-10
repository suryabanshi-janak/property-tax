interface LandRate {
  type: string;
  katha_rate: number;
  dhur_rate: number;
}

export const LAND_RATE: LandRate[] = [
  { type: 'लोकमार्ग सडक मोहडा', katha_rate: 1800000, dhur_rate: 90000 },
  { type: 'लोकमार्ग दायाँबायाँ ३00मी.', katha_rate: 1200000, dhur_rate: 60000 },
  { type: 'भित्री पक्की', katha_rate: 420000, dhur_rate: 21000 },
  { type: 'भित्री कच्ची', katha_rate: 300000, dhur_rate: 15000 },
  { type: 'खेती योग्य', katha_rate: 90000, dhur_rate: 4500 },
  { type: 'केउली खेती योग्य', katha_rate: 45000, dhur_rate: 2250 },
  { type: 'केउली भित्री कच्ची सडक', katha_rate: 100000, dhur_rate: 5000 },
  {
    type: 'केउली भित्री पक्की सडक मोहडा',
    katha_rate: 150000,
    dhur_rate: 7500,
  },
  { type: 'केउली मूल सडक मोहडा', katha_rate: 250000, dhur_rate: 12500 },
];
