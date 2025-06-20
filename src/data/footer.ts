import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  // telephone: string;
  socials: ISocials;
} = {
  subheading: "Energía natural, concentrada en frutos secos.",
  quickLinks: [
    // {
    //   text: "Features",
    //   url: "#features",
    // },
    {
      text: "Precios",
      url: "#precios",
    },
    {
      text: "Testimonios",
      url: "#testimonios",
    },
  ],
  email: "goalritmo@gmail.com",
  // telephone: "+54 (351) 153239624",
  socials: {
    // twitter: "https://twitter.com/moovimiento",
    // youtube: 'https://youtube.com',
    instagram: "https://www.instagram.com/moovimiento",
  },
};
