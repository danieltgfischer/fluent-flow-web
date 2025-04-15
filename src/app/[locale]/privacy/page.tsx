import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";

const PrivacyPage: React.FC = () => {
  const t = useTranslations("privacy");

  return (
    <Container>
      <Section id="privacy" title={t("title")} description={t("description")}>
        <div className="prose max-w-none">
          <h3>{t("section1.title")}</h3>
          <p>{t("section1.intro")}</p>
          <ul className="list-disc ml-6 mb-4">
            {[1, 2, 3].map((item) => (
              <li
                key={item}
                dangerouslySetInnerHTML={{
                  __html: t(`section1.items.${item}`),
                }}
              />
            ))}
          </ul>

          <h3>{t("section2.title")}</h3>
          <p>{t("section2.intro")}</p>
          <ul className="list-disc ml-6 mb-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <li key={item}>{t(`section2.items.${item}`)}</li>
            ))}
          </ul>

          <h3>{t("section3.title")}</h3>
          <p>{t("section3.intro")}</p>
          <ul className="list-disc ml-6 mb-4">
            {[1, 2, 3].map((item) => (
              <li
                key={item}
                dangerouslySetInnerHTML={{
                  __html: t(`section3.items.${item}`),
                }}
              />
            ))}
          </ul>

          <h3>{t("section4.title")}</h3>
          <p>{t("section4.content")}</p>

          <h3>{t("section5.title")}</h3>
          <p>{t("section5.content")}</p>

          <h3>{t("section6.title")}</h3>
          <p>{t("section6.content")}</p>

          <h3>{t("section7.title")}</h3>
          <p>{t("section7.content")}</p>

          <h3>{t("section8.title")}</h3>
          <p>{t("section8.content")}</p>
        </div>
      </Section>
    </Container>
  );
};

export default PrivacyPage;
