import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";

const TermsPage: React.FC = () => {
  const t = useTranslations("terms");

  return (
    <Container>
      <Section id="terms" title={t("title")} description={t("description")}>
        <div className="prose max-w-none">
          <h3>{t("section1.title")}</h3>
          <p>{t("section1.content")}</p>
          <h3>{t("section2.title")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("section2.content") }} />
          <h3>{t("section3.title")}</h3>
          <p>{t("section3.intro")}</p>
          <ul className="list-disc ml-6 mb-4">
            {[1, 2, 3, 4].map((item) => (
              <li key={item}>{t(`section3.items.${item}`)}</li>
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

export default TermsPage;
