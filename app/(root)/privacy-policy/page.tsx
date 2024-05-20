import Link from "next/link";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen mx-auto max-w-5xl space-y-4 flex-col bg-white dark:bg-gray-800 p-24 px-4 md:px-8 lg:px-24  w-full">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>

      <p>
        This privacy policy describes how your personal information is collected
        and used by the website. By using the website, you consent to the
        collection, storage, and use of your personal information as described
        in this policy.
      </p>
      <h2 className="text-2xl font-bold">Information Collection</h2>
      <p>
        We collect information from you when you register on our site, place an
        order, subscribe to our newsletter, respond to a survey, or fill out a
        form. When ordering or registering on our site, as appropriate, you may
        be asked to enter your name, email address, mailing address or phone
        number. You may, however, visit our site anonymously.
      </p>
      <p>
        We DO NOT collect any credit card information on this site. However, we
        use Paynow to process all our payments, and we do not receive any credit
        card information from you or Paynow.
      </p>

      <h2 className="text-2xl font-bold">Information Usage</h2>
      <p>We use the information we collect from you to:</p>
      <ul className="list-disc list-inside pl-4">
        <li>
          Verify your identity and authenticate you for using our Service.
        </li>
        <li>
          Fulfill and manage your orders, payments, and shipping information
        </li>
        <li>
          Communicate with you about our Service, such as sending you important
          updates or promotional offers (if you opt-in).
        </li>
        <li>Improve our Service and develop new features.</li>
      </ul>

      <h2 className="text-2xl font-bold">Sharing of Information</h2>
      <p>We will not share your information with any third parties except:</p>
      <ul className="list-disc list-inside pl-4">
        <li>
          Google: We share your information with Google as necessary to use
          Google OAuth for authentication purposes. Google&apos;s privacy
          practices are governed by their own{" "}
          <Link
            href="https://policies.google.com/privacy?hl=en-US."
            target="_blank"
            className="text-blue-500 active:text-yellow-800 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </li>
        <li>
          Service Providers: We may share your information with third-party
          service providers who help us operate and maintain our Service. These
          service providers are obligated to keep your information confidential
          and use it only for the purposes we have disclosed.
        </li>
      </ul>

      <h2 className="text-2xl font-bold">Your Choices</h2>
      <p>You have choices regarding your information:</p>
      <ul className="list-disc list-inside pl-4">
        <li>
          Reviewing and Updating Information: You can review and update your
          basic user information through your Google Account settings.
        </li>
        <li>
          Revoking Access: You can revoke our access to your Google Account
          information at any time by changing the permissions granted to our
          application through Google OAuth settings.
        </li>
      </ul>

      <h2 className="text-2xl font-bold">Security</h2>
      <p>
        We take reasonable steps to protect your information from unauthorized
        access, disclosure, alteration, or destruction. However, no internet
        transmission or electronic storage method is completely secure.
      </p>

      <h2 className="text-2xl font-bold">Children&apos;s Policy</h2>
      <p>
        Our Service is not directed to children under the age of 13. We do not
        knowingly collect personal information from children under 13. If you
        are a parent or guardian and you believe your child has provided us with
        personal information, please contact us.
      </p>

      <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li>
          Through our contact form:{" "}
          <Link
            href="/contact"
            className="text-blue-500 active:text-yellow-800 hover:underline"
          >
            Contact
          </Link>
        </li>
        <li>
          By phone:{" "}
          <Link
            href="tel:+263 77 608 9822"
            className="text-blue-500 active:text-yellow-800 hover:underline"
          >
            +263 77 608 9822
          </Link>
        </li>
      </ul>
    </main>
  );
}
