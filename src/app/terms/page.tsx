import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

const TermsPage: React.FC = () => {
  return (
    <Container>
      <Section
        id="terms"
        title="Terms and Conditions"
        description="Please read these terms and conditions carefully before using our service."
      >
        <div className="prose max-w-none">
          <h3>1. Introduction</h3>
          <p>
            Welcome to our application. By accessing or using our application,
            you agree to be bound by these Terms and Conditions and our Privacy
            Policy.
          </p>

          <h3>2. Definitions</h3>
          <p>
            &ldquo;Service&rdquo; refers to the application.
            <br />
            &ldquo;You&rdquo; refers to the individual accessing or using the
            Service, or the company, or other legal entity on behalf of which
            such individual is accessing or using the Service.
          </p>

          <h3>3. Usage Terms</h3>
          <p>
            You agree not to misuse our Service or help anyone else do so. For
            example, you must not attempt to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Probe, scan, or test the vulnerability of any system or network
            </li>
            <li>
              Breach or otherwise circumvent any security or authentication
              measures
            </li>
            <li>Access, tamper with, or use non-public areas of the Service</li>
            <li>Interfere with or disrupt any user, host, or network</li>
          </ul>

          <h3>4. Intellectual Property</h3>
          <p>
            Our Service and its original content, features, and functionality
            are and will remain the exclusive property of our company and its
            licensors.
          </p>

          <h3>5. Termination</h3>
          <p>
            We may terminate or suspend your access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>

          <h3>6. Limitation of Liability</h3>
          <p>
            In no event shall we be liable for any indirect, incidental,
            special, consequential or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other
            intangible losses.
          </p>

          <h3>7. Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time.
          </p>

          <h3>8. Contact Us</h3>
          <p>If you have any questions about these Terms, please contact us.</p>
        </div>
      </Section>
    </Container>
  );
};

export default TermsPage;
