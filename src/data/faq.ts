import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `¿Es seguro comprar en ${siteDetails.siteName}?`,
    answer:
      "Absolutamente. Realizamos tus pedidos de frutos secos de manera segura a través de WhatsApp, y el pago se efectúa a través de Mercado Pago, garantizando transacciones protegidas.",
  },
  {
    question: `¿Puedo disfrutar de los frutos secos de ${siteDetails.siteName} en cualquier momento?`,
    answer:
      "¡Absolutamente! Nuestros frutos secos siempre llegan frescos y listos para disfrutar. Gracias a nuestro proceso de selección y entrega rápida en Ciudad Universitaria, garantizamos que siempre recibas productos frescos y de la mejor calidad.",
  },
  {
    question: "¿Por qué elegir frutos secos como snack?",
    answer: `Porque son prácticos, saludables y naturales. Los frutos secos te aportan energía, proteínas y grasas buenas que te ayudan a rendir mejor en el estudio, el trabajo o el entrenamiento.`,
  },
  {
    question: "¿Puedo personalizar la composición de mis cápsulas de frutos secos?",
    answer: `¡Por supuesto! Cada cápsula viene con 20% de cada fruto seco, pero puedes personalizarlo. Si tienes alergias o preferencias, podemos ajustar la composición. Por ejemplo, 0% de almendras y 40% de nueces. ¡Solo avísanos al hacer tu pedido!`,
  },
];
