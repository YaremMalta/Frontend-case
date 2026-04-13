export interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;

  rating?: {
    rate: number;
    count?: number;
  };
};
  
 
