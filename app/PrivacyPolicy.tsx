import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for the Ethiopian Currency Exchange Rates App"
        />
      </Head>
      <main className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Privacy Policy
        </h1>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Purpose</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          The purpose of this app is to provide Ethiopian users with the current
          exchange rates of various banks. This app delivers up-to-date currency
          exchange rates, helping users make informed financial decisions.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Data Collection and Use
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          This app does not collect or store any personal data from its users.
          All exchange rate data is obtained from public sources and presented
          as-is. The app does not require any permissions or personal
          information to function.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          User Rights
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Users have the right to access the latest exchange rates provided by
          the app at any time. However, users should be aware that exchange
          rates can fluctuate frequently, and the app developer is not
          responsible for any discrepancies or outdated information. It is
          advisable to confirm exchange rates with the respective banks before
          making financial decisions.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Disclaimer
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          While every effort is made to ensure the accuracy of the exchange
          rates provided by the app, the information is subject to change
          without notice. The app developer cannot be held liable for any
          financial losses or damages arising from the use of the app. Users are
          encouraged to verify exchange rates with their banks before proceeding
          with any transactions.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Security</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Since the app does not collect or process any personal data, there are
          no specific security measures related to user information. The app is
          designed to be as secure and privacy-friendly as possible.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Contact Information
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          If you have any questions, concerns, or suggestions regarding this
          privacy policy, please feel free to contact us at:
          <a
            href="mailto:estifb045@example.com"
            className="text-blue-600 hover:underline ml-1"
          >
            estifb045@gmail.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          We may update our privacy policy from time to time. Any changes will
          be posted on this page, and the date of the latest update will be
          indicated at the top of the policy. We encourage users to review this
          privacy policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Frequently Asked Questions (FAQ)
        </h2>
        <h3 className="text-lg font-medium text-blue-700 mb-2">
          Do I need to provide any personal information to use the app?
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          No, the app does not require any personal information from users. It
          is designed to be used without any data input.
        </p>

        <h3 className="text-lg font-medium text-blue-700 mb-2">
          How often are the exchange rates updated?
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Exchange rates are updated regularly based on the latest data
          available from public sources. However, there may be delays due to
          factors beyond our control, such as changes in the source websites or
          network issues.
        </p>

        <h3 className="text-lg font-medium text-blue-700 mb-2">
          What should I do if I notice an inconsistency in the exchange rates?
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          If you notice any inconsistencies, please contact us at
          <a
            href="mailto:estifb045@gmail.com"
            className="text-blue-600 hover:underline ml-1"
          >
            estifb045@gmail.com
          </a>
          . We will review and correct any discrepancies as soon as possible.
          However, users are advised to verify rates with the banks before
          making transactions.
        </p>

        <h3 className="text-lg font-medium text-blue-700 mb-2">
          Can I use this app for commercial purposes?
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          The app is intended for personal use only. If you wish to use the app
          for commercial purposes, please contact us for more information.
        </p>
      </main>
    </div>
  );
}
