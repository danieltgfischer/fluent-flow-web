import {
  FiBookOpen,
  FiCheckCircle,
  FiTarget,
  FiThumbsUp,
  FiTrendingUp,
  FiUserCheck,
  FiYoutube,
} from "react-icons/fi";
import { useLocale } from "next-intl";
import { IBenefit } from "@/types";

// Custom React Hook for getting image path based on locale
export function useImagePath(imageNumber: string): string {
  // This hook uses the next-intl context
  const locale = useLocale();

  // Use locale if it's pt or es, otherwise default to en
  const localeForImage = locale === "pt" || locale === "es" ? locale : "en";

  return `/images/mockup/${localeForImage}/${imageNumber}.png`;
}

export const benefits: IBenefit[] = [
  {
    title: "benefits.section1.title",
    description: "benefits.section1.description",
    bullets: [
      {
        title: "benefits.section1.bullets.bullet1.title",
        description: "benefits.section1.bullets.bullet1.description",
        icon: <FiBookOpen size={26} />,
      },
      {
        title: "benefits.section1.bullets.bullet2.title",
        description: "benefits.section1.bullets.bullet2.description",
        icon: <FiCheckCircle size={26} />,
      },
      {
        title: "benefits.section1.bullets.bullet3.title",
        description: "benefits.section1.bullets.bullet3.description",
        icon: <FiUserCheck size={26} />,
      },
    ],
    imageSrc: 1,
  },
  {
    title: "benefits.section2.title",
    description: "benefits.section2.description",
    bullets: [
      {
        title: "benefits.section2.bullets.bullet1.title",
        description: "benefits.section2.bullets.bullet1.description",
        icon: <FiYoutube size={26} />,
      },
      {
        title: "benefits.section2.bullets.bullet2.title",
        description: "benefits.section2.bullets.bullet2.description",
        icon: <FiTarget size={26} />,
      },
    ],
    imageSrc: 2,
  },
  {
    title: "benefits.section3.title",
    description: "benefits.section3.description",
    bullets: [
      {
        title: "benefits.section3.bullets.bullet1.title",
        description: "benefits.section3.bullets.bullet1.description",
        icon: <FiThumbsUp size={26} />,
      },
      {
        title: "benefits.section3.bullets.bullet2.title",
        description: "benefits.section3.bullets.bullet2.description",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: 3,
  },
];
