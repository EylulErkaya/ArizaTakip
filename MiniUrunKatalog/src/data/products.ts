
export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Kablosuz Fare',
    price: 450,
    category: 'Aksesuar',
    stock: 8,
    description: 'Bluetooth bağlantılı ergonomik kablosuz fare.',
  },
  {
    id: 'p2',
    name: 'Mekanik Klavye',
    price: 1800,
    category: 'Aksesuar',
    stock: 0,
    description: 'Hassas mekanik tuşlara sahip dayanıklı klavye.',
  },
  {
    id: 'p3',
    name: 'Oyuncu Kulaklığı',
    price: 1250,
    category: 'Ses',
    stock: 12,
    description: 'Yüksek ses kalitesi ve dahili mikrofon sunan kulaklık.',
  },
  {
    id: 'p4',
    name: 'Web Kamerası',
    price: 950,
    category: 'Görüntü',
    stock: 5,
    description: 'Online toplantılar için Full HD web kamerası.',
  },
  {
    id: 'p5',
    name: 'USB-C Hub',
    price: 700,
    category: 'Bağlantı',
    stock: 0,
    description: 'Birden fazla bağlantı noktası sunan kompakt adaptör.',
  },
];
