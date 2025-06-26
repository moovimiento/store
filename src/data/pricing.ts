import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "1 Cápsula = 150g",
    price: 3000,
    features: ["Pasas de uva", "Almendras", "Nueces", "Peras deshidratadas"],
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=543513239624&text=Hola%21+Quiero+la+C%C3%A1psula+de+Frutos+Secos+de+%243000+%F0%9F%A5%9C%EF%B8%8F%E2%9A%A1%EF%B8%8F%F0%9F%8C%B1&type=phone_number&app_absent=0",
  },
  {
    name: "5 Cápsulas = 750g",
    price: 12500,
    features: ["Pasas de uva", "Almendras", "Nueces", "Peras deshidratadas"],
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=543513239624&text=Hola%21+Quiero+la+promo+de+5+C%C3%A1psulas+de+Frutos+Secos+por+%2412500+%F0%9F%A5%9C%EF%B8%8F%E2%9A%A1%EF%B8%8F%F0%9F%8C%B1&type=phone_number&app_absent=0",
  },
  {
    name: "Promo de +15 Cápsulas",
    price: "Personalizado",
    features: [
      "Pasas de uva",
      "Almendras",
      "Nueces",
      "Peras deshidratadas",
      "+ Frutos secos a elección",
    ],
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=543513239624&text=Hola%21+Estoy+interesado%2Fa+en+la+promo+de+%2B15+C%C3%A1psulas+%F0%9F%93%A6%EF%B8%8F%E2%9C%A8%F0%9F%8D%87+Quisiera+consultar+el+precio&type=phone_number&app_absent=0",
  },
];
