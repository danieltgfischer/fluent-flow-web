import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

const PrivacyPage: React.FC = () => {
  return (
    <Container>
      <Section
        id="privacy"
        title="Privacy Policy"
        description="This Privacy Policy describes how we collect, use, and share your personal information."
      >
        <div className="prose max-w-none">
          <h3>1. Information We Collect</h3>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Personal Information:</strong> Such as your name, email
              address, phone number, and other contact details when you register
              for an account or contact us.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              application, including access times, pages viewed, and the routes
              by which you access our application.
            </li>
            <li>
              <strong>Device Information:</strong> Information about the device
              you use to access our application, including hardware model,
              operating system, and browser type.
            </li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Respond to comments, questions, and requests</li>
            <li>
              Send you technical notices, updates, security alerts, and support
              messages
            </li>
            <li>Understand and analyze the usage trends of our users</li>
          </ul>

          <h3>3. Information Sharing and Disclosure</h3>
          <p>
            We do not share your personal information except in the following
            limited circumstances:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>With Your Consent:</strong> We will share your personal
              information with companies, organizations, or individuals outside
              of our company when we have your consent to do so.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We will share personal
              information if we have a good-faith belief that access, use,
              preservation, or disclosure of the information is reasonably
              necessary to comply with any applicable law, regulation, legal
              process, or enforceable governmental request.
            </li>
            <li>
              <strong>With Service Providers:</strong> We may share your
              information with third-party vendors, consultants, and other
              service providers who are working on our behalf.
            </li>
          </ul>

          <h3>4. Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to
            protect the personal information that we collect and process about
            you. The measures we take are designed to provide a level of
            security appropriate to the risk of processing your personal
            information.
          </p>

          <h3>5. Your Rights</h3>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, such as the right to access, correct,
            delete, or restrict processing of your personal information.
          </p>

          <h3>6. Children&apos;s Privacy</h3>
          <p>
            Our Service is not directed to children under the age of 13, and we
            do not knowingly collect personal information from children under
            13.
          </p>

          <h3>7. Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h3>8. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default PrivacyPage;
