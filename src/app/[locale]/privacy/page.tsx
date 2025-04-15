import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";

const PrivacyPage: React.FC = () => {
  const t = useTranslations("privacy");

  // Section content with direct text fallbacks
  const section1Items = [
    "Informações Pessoais: Como seu nome e endereço de e-mail quando você se registra para uma conta.",
    "Dados de Uso: Informações sobre como você usa nosso aplicativo, incluindo coleções acessadas e vídeos assistidos.",
    "Informações do Dispositivo: Informações sobre o dispositivo que você usa para acessar nosso aplicativo, incluindo modelo de hardware e sistema operacional.",
  ];

  const section2Items = [
    "Fornecer, manter e melhorar nossos serviços",
    "Personalizar sua experiência de aprendizado",
    "Enviar notificações relacionadas ao aplicativo",
    "Analisar tendências de uso para aprimorar o conteúdo",
    "Garantir o funcionamento adequado do Firebase",
  ];

  const section3Items = [
    "Com Seu Consentimento: Compartilharemos suas informações pessoais com terceiros quando tivermos seu consentimento para fazê-lo.",
    "Por Motivos Legais: Compartilharemos informações pessoais se acreditarmos de boa-fé que é necessário para cumprir leis, regulamentos ou solicitações governamentais.",
    "Com Provedores de Serviços: Podemos compartilhar suas informações com o Firebase, que armazena dados para fornecer o serviço.",
  ];

  return (
    <Container>
      <Section
        id="privacy"
        title={t("title") || "Política de Privacidade"}
        description={
          t("description") ||
          "Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos suas informações pessoais."
        }
      >
        <div className="prose max-w-none">
          <h3>{t("section1.title") || "1. Informações que Coletamos"}</h3>
          <p>
            {t("section1.intro") ||
              "Podemos coletar os seguintes tipos de informações:"}
          </p>
          <ul className="list-disc ml-6 mb-4">
            {[1, 2, 3].map((item) => (
              <li
                key={item}
                dangerouslySetInnerHTML={{
                  __html:
                    t(`section1.items.${item}`) || section1Items[item - 1],
                }}
              />
            ))}
          </ul>

          <h3>{t("section2.title") || "2. Como Usamos Suas Informações"}</h3>
          <p>
            {t("section2.intro") || "Usamos as informações que coletamos para:"}
          </p>
          <ul className="list-disc ml-6 mb-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <li key={item}>
                {t(`section2.items.${item}`) || section2Items[item - 1]}
              </li>
            ))}
          </ul>

          <h3>
            {t("section3.title") ||
              "3. Compartilhamento e Divulgação de Informações"}
          </h3>
          <p>
            {t("section3.intro") ||
              "Não compartilhamos suas informações pessoais, exceto nas seguintes circunstâncias limitadas:"}
          </p>
          <ul className="list-disc ml-6 mb-4">
            {[1, 2, 3].map((item) => (
              <li
                key={item}
                dangerouslySetInnerHTML={{
                  __html:
                    t(`section3.items.${item}`) || section3Items[item - 1],
                }}
              />
            ))}
          </ul>

          <h3>{t("section4.title") || "4. Segurança de Dados"}</h3>
          <p>
            {t("section4.content") ||
              "Implementamos medidas técnicas e organizacionais apropriadas para proteger as informações pessoais que coletamos e processamos sobre você."}
          </p>

          <h3>{t("section5.title") || "5. Seus Direitos"}</h3>
          <p>
            {t("section5.content") ||
              "Você tem o direito de acessar, corrigir ou excluir suas informações pessoais, bem como restringir o processamento de seus dados, sujeito às leis aplicáveis."}
          </p>

          <h3>{t("section6.title") || "6. Privacidade das Crianças"}</h3>
          <p>
            {t("section6.content") ||
              "Nosso Serviço não é direcionado a crianças menores de 13 anos, e não coletamos conscientemente informações pessoais de crianças menores de 13 anos."}
          </p>

          <h3>
            {t("section7.title") ||
              "7. Alterações a Esta Política de Privacidade"}
          </h3>
          <p>
            {t("section7.content") ||
              "Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade no aplicativo."}
          </p>

          <h3>{t("section8.title") || "8. Contate-nos"}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html:
                t("section8.content") ||
                "Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em [inserir e-mail de contato].",
            }}
          ></p>
        </div>
      </Section>
    </Container>
  );
};

export default PrivacyPage;
