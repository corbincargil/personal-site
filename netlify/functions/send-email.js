require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const { getStore } = require("@netlify/blobs");

exports.handler = async function (event, context) {
  let store;
  if (process.env.NETLIFY) {
    // Running on Netlify
    store = getStore("site-visits");
  } else {
    // Running locally
    store = getStore({
      name: "site-visits",
      siteID: process.env.SITE_ID,
      token: process.env.NETLIFY_AUTH_TOKEN,
    });
  }

  const now = Date.now();
  const lastVisitTime = await store.get("lastVisitTime");
  const rateLimit = 60000; // 1 minutes in milliseconds

  if (lastVisitTime && now - lastVisitTime < rateLimit) {
    console.log("Rate limit exceeded, no email sent");
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email skipped due to rate limiting" }),
    };
  }

  await store.set("lastVisitTime", now);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const userData = JSON.parse(event.body);

  const msg = {
    to: process.env.EMAIL_USER,
    from: process.env.EMAIL_USER,
    subject: "New Site Visit",
    text: `Someone visited your site!
            User Agent: ${userData.userAgent}
            Language: ${userData.language}
            Screen Size: ${userData.screenSize}
            Time Zone: ${userData.timeZone}
            Referrer: ${userData.referrer}`,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Failed to send email", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
