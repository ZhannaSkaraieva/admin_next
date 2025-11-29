export interface ProductItem {
  id: number;
  name: string;
  vendorCode: string;
  reviews?: string;
  rating?: number;
  article: string;
  type: string;
  properties?: Record<string, number>;
  description?: string;
  price: number;
  enabled: boolean;
  image?: string;
  quantity: number;
  createAt: Date;
  updateAt: Date;
}

export const ProductsListItem: ProductItem[] = [
  {
    id: 1,
    name: "СURT Z30 Plus Acoustics",
    vendorCode: "SO757575",
    reviews: "",
    rating: 0,
    article: "SO754565",
    type: "Электрогитара",
    properties: {
      strings: 7,
    },
    description:
      "Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.",
    price: 12000,
    enabled: true,
    image: "/ElectroAcoustic.png",
    quantity: 10,
    createAt: new Date("2024-01-01T10:00:00Z"),
    updateAt: new Date("2024-01-10T12:00:00Z"),
  },
  {
    id: 2,
    name: "СURT Z30 Plus",
    vendorCode: "SO757576",
    reviews: "",
    rating: 0,
    article: "SO754566",
    type: "Электрогитара",
    properties: {
      strings: 6,
    },
    description:
      "Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.",
    price: 9700,
    enabled: true,
    image: "/Electro.png",
    quantity: 15,
    createAt: new Date("2024-02-01T10:00:00Z"),
    updateAt: new Date("2024-02-10T12:00:00Z"),
  },
  {
    id: 3,
    name: "Честер Bass",
    vendorCode: "SO757577",
    reviews: "",
    rating: 0,
    article: "SO754567",
    type: "Акустическая",
    properties: {
      strings: 7, // вот здесь количество струн, // можно добавить другие свойства
    },
    description:
      "Акустическая гитара с 7 струнами, Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.",
    price: 15000,
    enabled: true,
    image: "/ElectroBass.png",
    quantity: 5,
    createAt: new Date("2024-03-01T10:00:00Z"),
    updateAt: new Date("2024-03-10T12:00:00Z"),
  },
];
