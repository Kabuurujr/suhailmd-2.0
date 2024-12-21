const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_11_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODMsXG4gICAgICAgIDY4LFxuICAgICAgICA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUxLFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTE0LFxuICAgICAgICA0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkQ5TWxTeXpVQlFKV3c5VTZQOEdhM25OMXhoVDhIS3pUa1lVSHAvbWNFSUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk2MzI2MjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NUU5RDlCQjY1Mzg4QjJGQzAxNDRCNDQ4QzhDMjkxRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ3NDM0ODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWWRab3llblZSX0NBQXBjSG51VmVoQVwiLFxuICBcInBob25lSWRcIjogXCIwNjg2OTcyNi04OGFjLTRkMDctOWVmNS00YmM1ZWM1YWJjNjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMTMsXG4gICAgICAxOTIsXG4gICAgICAyMCxcbiAgICAgIDIyNCxcbiAgICAgIDg1LFxuICAgICAgNzYsXG4gICAgICAxNjQsXG4gICAgICAxNzgsXG4gICAgICAxMzQsXG4gICAgICAxMTIsXG4gICAgICAxODEsXG4gICAgICA5MyxcbiAgICAgIDE0OSxcbiAgICAgIDE5MSxcbiAgICAgIDE5LFxuICAgICAgNTMsXG4gICAgICAzLFxuICAgICAgMjIwLFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTI1LFxuICAgICAgMjIwLFxuICAgICAgMTA3LFxuICAgICAgMTAyLFxuICAgICAgMTc2LFxuICAgICAgMCxcbiAgICAgIDE3OCxcbiAgICAgIDQsXG4gICAgICAxMTEsXG4gICAgICAxMzEsXG4gICAgICAxNzgsXG4gICAgICAxOSxcbiAgICAgIDE4OSxcbiAgICAgIDE3NCxcbiAgICAgIDE2OCxcbiAgICAgIDEzMSxcbiAgICAgIDIwOCxcbiAgICAgIDI1MyxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCMlZUTEhNOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk2MzI2MjU0OjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTk3MjY1MDgzNTU3NzA6NzBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwia2FyYW5qYWFo8J+buPCfkqtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMlhoNDRHRUxPcm1Mc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdiS2dtNng2b2J3djhRdC9Zb3RycXMrR25rdjE3N2pobXdFQS9IZDlvbUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY0c0Rk8zckVET01XSFRydlRoeE9aRVc3OGJ5YkVxWkFiYTRTbEVOWFpnRlJnQVNEVWxUT01LSEVHekpYYmNaNEdsUFh0M2ZneFFrNkZiTGVjRDQ0Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNnJQQmFRa25FQ0MyR29nN1B6OUpOTkZDdVYxZEtTUENheFFKRjhoTW15eko4OTB2clR6a1BtK1MzU29NQk9aREx0ZkloeHhCNkw2dVdKVGY2U2xLQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk2MzI2MjU0OjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzQzNDgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHU5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEdTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXdkFXc3FHTytERmNaODVRUlhwdm5JM0FlSFZvVkovM3RBVHJ3N0I3WmM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDAwOTA1NTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDc0MzQ4NDMwMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
