const nodemailer = require("nodemailer");
const { getStore } = require("@netlify/functions");

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

  const userData = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Site Visit",
    text: `Someone visited your site!
            User Agent: ${userData.userAgent}
            Language: ${userData.language}
            Screen Size: ${userData.screenSize}
            Time Zone: ${userData.timeZone}
            Referrer: ${userData.referrer}`,
  };

  try {
    await transporter.sendMail(mailOptions);
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
