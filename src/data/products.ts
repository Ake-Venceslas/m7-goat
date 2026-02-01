export interface Product {
  id: number;
  nameKey: string;
  descKey: string;
  salePrice: number;
  categoryKey: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: 1,
    nameKey: "prodCreme",
    descKey: "descCreme",
    salePrice: 6000,
    categoryKey: "catCremes",
    image: "/Creme.jpeg",
  },
  {
    id: 2,
    nameKey: "prodDermaroleur",
    descKey: "descDermaroleur",
    salePrice: 10000,
    categoryKey: "catAccessoires",
    image: "/dermaroleur.jpeg",
  },
  {
    id: 3,
    nameKey: "prodMiniElixir",
    descKey: "descElixir",
    salePrice: 5000,
    categoryKey: "catHuileSerums",
    image: "/elixir 5k.jpeg",
  },
  {
    id: 4,
    nameKey: "prodMaxiElixir",
    descKey: "descElixir",
    salePrice: 8000,
    categoryKey: "catHuileSerums",
    image: "/elixir 8k.jpeg",
  },
  {
    id: 5,
    nameKey: "prodElixirCreme",
    descKey: "descPack",
    salePrice: 11000,
    categoryKey: "catPacksKits",
    image: "/elixir et creme.jpeg",
  },
  {
    id: 6,
    nameKey: "prodElixirDermaroleur",
    descKey: "descElixirDermaroleur",
    salePrice: 15000,
    categoryKey: "catPacksKits",
    image: "/elixir et dermaroleur.jpeg",
  },
  {
    id: 7,
    nameKey: "prodElixirEpices",
    descKey: "descPack",
    salePrice: 8500,
    categoryKey: "catPacksKits",
    image: "/elixir et epices.jpeg",
  },
  {
    id: 8,
    nameKey: "prodElixirShampoing",
    descKey: "descPack",
    salePrice: 12000,
    categoryKey: "catPacksKits",
    image: "/elixir et shampoing.jpeg",
  },
  {
    id: 9,
    nameKey: "prodElixirSpray",
    descKey: "descPack",
    salePrice: 10000,
    categoryKey: "catPacksKits",
    image: "/elixir et spray.jpeg",
  },
  {
    id: 10,
    nameKey: "prodElixirSprayShampoing",
    descKey: "descGamme",
    salePrice: 17000,
    categoryKey: "catPacksKits",
    image: "/elixir, spray, shampoing.jpeg",
  },
  {
    id: 11,
    nameKey: "prodElixirSprayShampoingCreme",
    descKey: "descGamme",
    salePrice: 23000,
    categoryKey: "catPacksKits",
    image: "/elixir,spray,shampoing,creme.jpeg",
  },
  {
    id: 12,
    nameKey: "prodEpices",
    descKey: "descEpices",
    salePrice: 3500,
    categoryKey: "catSoinsNaturels",
    image: "/Epices.jpeg",
  },
  {
    id: 13,
    nameKey: "prodShampoing",
    descKey: "descShampoing",
    salePrice: 7000,
    categoryKey: "catShampoings",
    image: "/Shampoing.jpeg",
  },
  {
    id: 14,
    nameKey: "prodSpray",
    descKey: "descSpray",
    salePrice: 5000,
    categoryKey: "catSprays",
    image: "/spray.jpeg",
  },
  {
    id: 15,
    nameKey: "prodMiniGamme",
    descKey: "descGamme",
    salePrice: 35000,
    categoryKey: "catGammesCompletes",
    image: "/gamme complete 1.jpeg",
  },
  {
    id: 16,
    nameKey: "prodMaxiGamme",
    descKey: "descGamme",
    salePrice: 45000,
    categoryKey: "catGammesCompletes",
    image: "/gamme complete 2.jpeg",
  },
];

export const categoryKeys = [
  "all",
  "catHuileSerums",
  "catCremes",
  "catShampoings",
  "catSprays",
  "catSoinsNaturels",
  "catAccessoires",
  "catPacksKits",
  "catGammesCompletes",
];

// Popular search terms (keys for translation)
export const popularSearchKeys = [
  "prodCreme",
  "prodMiniElixir", 
  "prodShampoing",
];
