import dotenv from 'dotenv';

dotenv.config();
export default {
  PORT: process.env.PORT || 3080,
  secret: process.env.SECRET,
  databaseUrl: process.env.DATABASE_URL,
  debug: false,
  env: process.env.NODE_ENV || 'development',
  mailgunKey: process.env.MAILGUN_KEY,
  mailgunUrl: process.env.MAILGUN_URL,
  twilioConfig: {
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_PHONENUMBER: process.env.TWILIO_PHONENUMBER
  }
};
