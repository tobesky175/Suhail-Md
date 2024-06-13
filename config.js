const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349022474792";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_15_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MixcbiAgICAgICAgODUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODMsXG4gICAgICAgIDM5LFxuICAgICAgICA3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndPN2FoRXQzNWJqUk9FZkVseXE3NDdPb0ljY01BcmpjN1pQajJWdXpOeTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyMjQ3NDc5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREQzQjJFMTVFNzYzRUY0NkJGQjI0QjZGMkYxQkU5QkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MjU5MzI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyMjQ3NDc5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTY0ODQ5NjkxOEZGNkQyMUNGMkFGRkFBMUZCODY4QjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MjU5MzI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRHZGY3cGZTVHF1S3VOeXJDSmdXa1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjE5NmZhYzgtYjA5OS00ZmZmLTllYzYtYTkxMTk3N2NhNGI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDIwLFxuICAgICAgNjAsXG4gICAgICAyNTIsXG4gICAgICA3NixcbiAgICAgIDE3MixcbiAgICAgIDE1NixcbiAgICAgIDEwNCxcbiAgICAgIDExOCxcbiAgICAgIDM5LFxuICAgICAgMzEsXG4gICAgICAyMzksXG4gICAgICAyMzEsXG4gICAgICAzNixcbiAgICAgIDIxMSxcbiAgICAgIDQyLFxuICAgICAgMTk4LFxuICAgICAgMTcwLFxuICAgICAgMTE4LFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDM4LFxuICAgICAgNTMsXG4gICAgICAyMjAsXG4gICAgICAxNTUsXG4gICAgICAxMjEsXG4gICAgICA2MixcbiAgICAgIDE3MyxcbiAgICAgIDE3MCxcbiAgICAgIDI0MCxcbiAgICAgIDIyNyxcbiAgICAgIDE4MCxcbiAgICAgIDIzNSxcbiAgICAgIDQxLFxuICAgICAgMjM0LFxuICAgICAgNjgsXG4gICAgICAyOCxcbiAgICAgIDkzLFxuICAgICAgNTYsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCVkVFODdZNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMjQ3NDc5MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW15IERlbG9yZXNcIixcbiAgICBcImxpZFwiOiBcIjIwNjE4NTI3OTUwMjY6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYnNwdWNHRVBhY3FyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIll6OUtsTStWdmdZWnJWU2xPQzBKR3pwTm1qdmIvTUxQWWlzWjJkczZOenc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYkFRdzU4TlRObGEzUTVoZDU4MGM5UVNndnk3WVJ1ekh0NC9adU1oQzd0RExITEhOTThNQi8ybXdLL2RVZjA4QSt5VUh6Yzk1NU1WbnlmTkhMdm5TQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSFR3U2syeEZNMVpvNHpadVFRTi90M1FGSFp5V2Jlb1BvZW0wM2NzdldDcW9YdHlxK3RZMXNQUFFUcm5kNGNWazlXQTNDRW5iU2p1UkRTYjBjWm1Zamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMjQ3NDc5MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjU5MzIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFo3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMWjcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPMUgrWkRBRGFOYml2ZnkxNklMZDBWQ25jREJ5U0xCc2xhcGJ3QjRpRG0wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MjcyNTU5MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODI1OTMyNjE1OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
