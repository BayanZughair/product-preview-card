type Tproduct = {
  section: string;
  title: string;
  image: {
    src: string[];
    alt: string
  };
  description: string;
  price: {
    currentPrice: number;
    discount: number;
  }
  button: string
}

type TCard = {
  product: Tproduct[]
}
