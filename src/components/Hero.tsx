"use client";
import React from "react";

import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pt-32 md:pt-40 px-5 pb-10"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-3xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-3xl mx-auto">
          {t("heading")}
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">
          {t("subheading")}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <AppStoreButton dark />
          <PlayStoreButton dark />
        </div>
      </div>
    </section>
  );
};

export default Hero;
