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
global.owner = process.env.OWNER_NUMBER || "263771356067";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0paWHEzeUNDRXhvV1dVRmdOYXhLKzM1Yk4yNHcyK1gwSnBjejFva0xtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM05ldnpuTnZ1OVV5b09BZDN4eTMzUHFaajBtbmxyYzk5WGpHTUhwdkxCQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTTd5c2RqVUhBM0NERGRqV0JReDZTT09jYXNYWW0rY2lUMkFqcXBJakdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxYUlRb0pnRVMvV2hxNkxHbjN0SkExTWlPQzJ4WDliS1dScUtzZnF2c2hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFU2pzako5Yy9jOTVZZ2docFlFenJuVlFnc2txQlBmTTR5d09UUDg3RUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9HbWUzMkpHM2t5dDRETTBiUE5HQjVTTUFBejNLSTVaTFd5RUtXbEVsQWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtkQzR2MldLdXVZeGQ3dGpUdHBuSHVBc1YzNjVsb0RTNTR4ZGxFeklIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekpLUnNMYkZaUS8xUkM5bTFablc5emsyWExUQyt2ckE5NUgvbHBPcE55Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQeDQyTHFiaXNhOVN0c2VZamgyYVJZQlA0UmdETk5tVWlkbE0rV1VScFlFODJzMDVCb3RNNWJCckk4Y2h4b1ZUcE1UdzR5Zzc5eFlxM2xBOTJGSENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJOQlhzYUEyaU1ZbjlGcHBVWmxqWWpscHdod1J1WlZoT0tLbnFOK2hlVTZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPZ3NhYllBQ1JPZVI5ci1lc1lVX3FnIiwicGhvbmVJZCI6ImM5ZmJlMjU1LTNiNTEtNGI1ZS05ZGMzLWQ0MzM4OWVkYzNkYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0ZXZBSnN0c0dGZnY1djRWQ1BpZTdNakxPTG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFA3T2V1cmFBUisyNCtuclVKU25NMHp1Z0lvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktNTjZWQjM4IiwibWUiOnsiaWQiOiIyNjM3NzEzNTYwNjc6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUYWt1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPS3ZtcEVDRUxteDFyUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3TElPTFdjbDgzc3BoS244UTNQdW14cW94Snp4UVE0VWFLUW1Db2x3ZW5zPSIsImFjY291bnRTaWduYXR1cmUiOiJKeEpBQXIybm0wU0xEUERwY2dMN200MUNUd0N4K3JZc0FiaDdmYmc1ZjFOcTVCWHgwckRmbVo3S2ZkQk13K1JGZnZxb29FMjZXYy84Z1pDTWZPSmNEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoic0NZaUgyNVZRSTVZR1pQS2ZmcUdma3liZjU3cWEzVW1TUld4ZnJGRVg5MVB2SDY1aU9WaWJHZi95OUhqTTZSdk9lNk5RdCtzZFBtZEYrVktqejdWQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3NzEzNTYwNjc6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjQ3lEaTFuSmZON0tZU3AvRU56N3BzYXFNU2M4VUVPRkdpa0pncUpjSHA3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMDgwMDA2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUEwSCJ9"
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
