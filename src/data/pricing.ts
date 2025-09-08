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
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=543513239624&text=Hola%21+Quiero+la+C%C3%A1psula+de+Frutos+Secos+de+%244000+⚡️&type=phone_number&app_absent=0",
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
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=543513239624&text=Hola%21+Quiero+la+promo+de+5+C%C3%A1psulas+de+Frutos+Secos+por+%2418000+⚡️&type=phone_number&app_absent=0",
  },
  {
    name: "15 Cápsulas (3300g)",
    price: 48000,
    duration: "Energía para eventos especiales",
    features: [
      "Pasas de uva",
      "Almendras",
      "Nueces",
      "Peras deshidratadas",
      "Banana chips",
    ],
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=543513239624&text=Hola%21Quiero+la+promo+de+15+C%C3%A1psulas+de+Frutos+Secos+por+%2448000📦✨&type=phone_number&app_absent=0",
  },
];
