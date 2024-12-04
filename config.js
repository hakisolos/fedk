//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lQbk9talM4MFhTQnE0NEJ1c25LZ2tJcmdpNEpsUU5jMTR0Y2dSa1VGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWVNSDdqLzJVcXB6c0xIU2NFcmJJNTRqNXVZODVpK3JBaXZYT3RpSTVpMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R2w0ZzVYUGdhdlZnY2VLTEJXQWtvVHdNbHdFSFUwWWlrS01UWDJoWkU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRUtjQ1hhNUg2cEowMDllOVF5VEJ3Q2czbVJRM2xua3N2R3VjRE05eldBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMVjZzRjhrbmhWOTg1VVdqMTUvUnlLN24rcnA2ZUd1QUo5T1pkUTZubVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI1aVYyQ2d3SUpyeW5HbzVndTMvSXhFcmtva0V4WitIb1BIYUFMNmxVbTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU45N1U0TmxyTk5lbkpvbUFGVzdBelpGbFhaUE5tdUdnTU1SUmxPRXpsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1FqWkkzbkdsSVBKNjg1eUIxbjhuVEkwb1owZVd2cDFkcHJocTN1WkFYYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpHMlZscU13eG8vT2RzNVNLdXpHcnNPdEtlUGtKem14b1BvTFRnVG4zKzE0anNrMlJMbmY1OHB5SFBDdXMrNWZqQ0RDbm9rOGU5cG9manpDUnl1aWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJEYjhOK2VENmh0WFQ2RUFJL1JRL0kwOFZsYjVXb2U4bXlHemkwWE93bnY4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIMFdIZExEVVN0aWpBV2QtQ3RRUi1nIiwicGhvbmVJZCI6IjIyMzUxNjZhLTcwZTktNGI0MC1hYjExLTk1MzJiMWViMmExNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSEF6ZjNCS2VHSWdqcW5jWFozM0pYTUVOVE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTdTQ0Zrb0xhY25qdzFZdjJ1aHIrWFRuYVNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5DREJKTFZEIiwibWUiOnsiaWQiOiIyMzQ5MTEyMTcxMDc4OjczQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdnpbwnZ6T8J2emfCdnpgg8J2ZjvCdnqLwnZ6SIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPaUFub3NGRU9haHdib0dHQlFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVVGFtOXlpdFRKQ3F5bTJuOVNWM0FqZDN5aDVLaHEwbjJyUE15RVJNWFVZPSIsImFjY291bnRTaWduYXR1cmUiOiJvMVI2Y2JBQ1JmZWgzd2ExV0ZjTHpqSW91d2VHQzJVMUxPbDl2bXg3WlIrUkNlNncrUkwxd2tZa3VFTFl6YnhzcUdpOFZiTmVWZlcwc01iKzYyNnZCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNGVlSzB4aGpWeWh6cWQzM211VUM1RndwS09XRlY3cWZGcVpaV2h4YTNxTCtha2VVc25STjd1N0dXRXp6d2ZiaHpKRElXUkNRd3RnYTYyREIvSndGaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTEyMTcxMDc4OjczQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZFMnB2Y29yVXlRcXNwdHAvVWxkd0kzZDhvZVNvYXRKOXF6ek1oRVRGMUcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMzMTY4NTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnpVIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
