import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Cápsula de 150g",
    price: 2500,
    features: ["Pasas de uva", "Almendras", "Nueces", "Peras deshidratadas"],
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=543513239624&text=Hola%21+Quiero+una+C%C3%A1psula+de+150g+por+%242500+%F0%9F%A5%9C%EF%B8%8F%E2%9A%A1%EF%B8%8F%F0%9F%8C%B1&type=phone_number&app_absent=0",
  },
  {
    name: "Pack de 5 Cápsulas (750g)",
    price: 10000,
    features: ["Pasas de uva", "Almendras", "Nueces", "Peras deshidratadas"],
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=543513239624&text=Hola%21+Quiero+el+Pack+de+5+C%C3%A1psulas+por+%2410000+%F0%9F%92%BC%F0%9F%94%A5%F0%9F%A5%AD&type=phone_number&app_absent=0",
  },
  {
    name: "Pack de +15 Cápsulas",
    price: "Personalizado",
    features: [
      "Pasas de uva",
      "Almendras",
      "Nueces",
      "Peras deshidratadas",
      "+ Frutos secos a elección",
    ],
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=543513239624&text=Hola%21+Estoy+interesado%2Fa+en+el+Pack+de+%2B15+C%C3%A1psulas+y+quisiera+consultar+el+precio+%F0%9F%93%A6%EF%B8%8F%E2%9C%A8%F0%9F%8D%87&type=phone_number&app_absent=0",
  },
];
