//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "263710386658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUczaGdkWTJRYWZxYVhrNlZGazVaWlU2U0F6a3Z0V0ZPNGZ5azk1eUszbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWVxeUZWL1hZNlFlNlNoWU5jeVo2dHRsSGRYM0wzVGFNcmpEbE5kVSttYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q05iNUdYR1Avc0d3RGZobVVmclNnSm1kUzlhZUZzaTNMcHZXcFZHSlZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaVjNXYlpmWmIzeDdtelg5ejJCRlg4T1F2cnRaYWpONnNYaEFkOHFxSlE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKU0poSURBdExOL1hkWUNEbWUyalFKb1RzOGhlOVp2VWlQL0NvMTQ3VUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii84RkJZYjNTREcvM05XMWVzckxHN3BJV2VoNUdYVlo5ZTU1SU95Qlp4RlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhOdmJ0bEVIc0xNYjlsa2dTV2FOTm54Skk5MjF6T3hSU01jbUNQeUNtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXViTUVybzNWb2Z3MTFsdjUxcys3VER1ZDFxS2Y4b0U0M2h6bW1lN3ptWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpZRElWWm9ob1NYSzhTTTdRK0J6TWNwNnY4eXNKRXZwWE1kSis3ZHJSZU1URGZsaExUaXc0L044ZWMvT01STktSRnFSOVRseVIvTDViUU05YXYvQWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJJV21sUFNkOUxlL2Rmc2I2VlB3ck1GOVBxNWE0b0sycng2Sk5yUVdCUFY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMDM4NjY1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QjUzQTlENzg5MzZBMTI5QUVCQzQ3OTNGMDM5RDFFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMDc3ODI5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTAzODY2NThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjZEREZDNzkzODREMzQxQjJCOUNFNEZFMjg2QkEyNjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTA3NzgyOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieFJPOU05bFBTUldCTWRqZ3ZkUGdwUSIsInBob25lSWQiOiJjYThmNTQ1MC0zZjljLTQyNTctODVmOC1hNGRiMWMwNmE4ZDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWdaZ3VLa3VrY3o2SDJtWFY2RmVSck40S09rPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJNYlF6WFBqU1hXb3dhTG9wSkx6Q2xvbjdiZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1RkxUUzVSRSIsIm1lIjp7ImlkIjoiMjYzNzEwMzg2NjU4OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidGFrdSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEhSak1JRkVMU2cxclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTndsYjFUcG9RZEpiV0RGSFZLcEo0VHg0QVk5KzJTMzlTLytUa0NmVmdYMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMXZadXM2VVozTGJnaDVrMlIwWXBwREpZNVRKNWxxV3Jqb2NRM0R5ckkxYnpnekVWV3k5WW0wL3VxK1FjSVQ0d1NnUk1TUC9hODlLUkNZNGFJUkVqQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImVYYkQxUkxGRjJINnNUNndES0FSdUZPWWF5bHBBblpsYTlESW1TUDBKc3MxNVZsejN6ZXVxd1pYU3BxbGNDK3AyMUdudHYwRXFjMkpUMnVKeWhiSmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzEwMzg2NjU4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGNKVzlVNmFFSFNXMWd4UjFTcVNlRThlQUdQZnRrdC9Vdi9rNUFuMVlGOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTA3NzgyNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPZkEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
