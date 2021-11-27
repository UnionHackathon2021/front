export type reviewType = {
  id: number;
  content: string;
  positive: number;
  negative: number;
  neutral: number;
  sentiment: string;
};

export type reviewResponseType = {
  reviewList: Array<reviewType>;
  totalNegative: number;
  totalNeutral: number;
  totalPositive: number;
};
