const sgMail = require("@sendgrid/mail");
const { getStore } = require("@netlify/blobs");

exports.handler = async function (event, context) {
  const store = getStore("site-visits");
  const now = Date.now();
  const lastVisitTime = await store.get("lastVisitTime");
  const rateLimit = 600000; // 10 minutes in milliseconds

  if (lastVisitTime && now - lastVisitTime < rateLimit) {
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
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
