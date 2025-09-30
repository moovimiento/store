import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `¿Es seguro comprar en ${siteDetails.siteName}?`,
    answer:
      "Absolutamente. Al hacer clic en 'Comprar' serás dirigido a mas.moovimiento.com donde podrás armar tus propios mixs personalizados y pagar de manera segura a través de la API de Mercado Pago, garantizando transacciones protegidas.",
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
    answer: `¡Por supuesto! Cada cápsula viene con 20% de cada fruto seco, pero puedes personalizarlo. Al hacer clic en "Comprar" serás dirigido a una web donde podrás armar tus propios mixs personalizados. Si tienes alergias o preferencias, puedes ajustar la composición fácilmente. Por ejemplo, 0% de almendras y 40% de nueces.`,
  },
];
