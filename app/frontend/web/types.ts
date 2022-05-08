export interface getTransactions {
  id: string;
  nature: {
    code: string;
  };
  createdOn: string;
  amount: number;
  asset: string;
  user: {
    id: string;
  };
}
[];
