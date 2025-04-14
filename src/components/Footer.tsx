"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link as IntlLink } from "@/i18n/navigation";

import { siteDetails } from "@/data/siteDetails";

const Footer: React.FC = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-hero-background text-foreground py-2">
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          {t("copyright", {
            year: new Date().getFullYear(),
            siteName: siteDetails.siteName,
          })}
        </p>
        <div className="flex flex-row gap-4 w-full justify-center">
          <IntlLink href="/privacy-policy">{t("privacyPolicy")}</IntlLink>
          <IntlLink href="/terms-of-service">{t("termsOfService")}</IntlLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
