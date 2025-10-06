import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "1 Cápsula (220g)",
    price: 4000,
    duration: "Energía para toda la semana",
    features: [
      "Pasas de uva",
      "Almendras",
      "Nueces",
      "Peras deshidratadas",
      "Banana chips",
    ],
  },
  {
    name: "5 Cápsulas (1100g)",
    price: 18000,
    duration: "Energía para todo el mes",
    features: [
      "Pasas de uva",
      "Almendras",
      "Nueces",
      "Peras deshidratadas",
      "Banana chips",
    ],
  },
  {
    name: "15 Cápsulas (3300g)",
    price: 53000,
    duration: "Energía para eventos especiales",
    features: [
      "Pasas de uva",
      "Almendras",
      "Nueces",
      "Peras deshidratadas",
      "Banana chips",
    ],
  },
];
