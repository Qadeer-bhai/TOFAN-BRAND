const os = require("os");
const Config = require("../config");
let { fancytext, tiny, runtime, formatp } = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const astro_patch = require("../lib/plugins");

astro_patch.smd(
  {
    cmdname: "menu",
    desc: "TOFAN BRAND commands absolute dominance – kneel or perish.",
    react: "👑",
    type: "queen",
    filename: __filename,
  },
  async (message) => {
    try {
      const { commands } = require("../lib");

      // 🔥 RANDOM HEADERS
      const headers = [
        "╔═🔥 *TOFAN BRAND - CHAOS* 🔥═╗",
        "⫷⫸ 𝐐𝐮𝐞𝐞𝐧 𝐉𝐞𝐬𝐬𝐢𝐜𝐚’𝐬 𝐖𝐫𝐚𝐭𝐡 𝐁𝐞𝐠𝐢𝐧𝐬 ⫷⫸",
        "⚠️ *TREMBLE BEFORE THE QUEEN'S POWER* ⚠",
        "👑 *𝐂𝐇𝐀𝐎𝐒 𝐌𝐎𝐃𝐄 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃* 👑",
      ];

      // 🔥 RANDOM FOOTERS
      const footers = [
        "╚════════════════════════╝",
        "👑 *𝐎𝐍𝐋𝐘 𝐓𝐇𝐄 𝐖𝐎𝐑𝐓𝐇𝐘 𝐒𝐇𝐀𝐋𝐋 𝐒𝐔𝐑𝐕𝐈𝐕𝐄* ",
        "🔥 *TOFAN BRAND REIGNS SUPREME!* 🔥",
        "👑 *𝐂𝐇𝐀𝐎𝐒 𝐂𝐀𝐍'𝐓 𝐁𝐄 𝐂𝐎𝐍𝐓𝐀𝐈𝐍𝐄𝐃* ",
      ];

      // 🔥 RANDOM CATEGORY TITLES
      const categoriesTitle = [
        "🔥═══🔥 *ROYAL DECREE* 🔥═══🔥🔥═══🔥 *ROYAL DECREE* 🔥═══",
        "⚔️ *𝐓𝐇𝐄 𝐐𝐔𝐄𝐄𝐍'𝐒 𝐄𝐃𝐈𝐂𝐓𝐒* ⚔️",
        "💣 *𝐖𝐄𝐀𝐏𝐎𝐍𝐒 𝐎𝐅 𝐃𝐎𝐌𝐈𝐍𝐀𝐓𝐈𝐎𝐍* 💣",
        "🔱 *𝐀𝐁𝐒𝐎𝐋𝐔𝐓𝐄 𝐎𝐁𝐄𝐃𝐈𝐄𝐍𝐂𝐄* 🔱",
      ];

      // 🔥 RANDOM MENU INTRO TEXT
      const introTexts = [
        "🔥 *𝐓𝐎𝐅𝐀𝐍 𝐁𝐑𝐀𝐍𝐃'𝐒 𝐀𝐁𝐒𝐎𝐋𝐔𝐓𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒* 🔥",
        "👑 *𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐓𝐇𝐄 𝐐𝐔𝐄𝐄𝐍’𝐒 𝐖𝐑𝐀𝐓𝐇* 👑",
        "⚠️ *𝐃𝐀𝐑𝐄 𝐘𝐎𝐔 𝐅𝐀𝐂𝐄 𝐇𝐄𝐑 𝐏𝐎𝐖𝐄𝐑?* ⚠️",
        "💣 *𝐁𝐎𝐖 𝐎𝐑 𝐁𝐄 𝐃𝐄𝐒𝐓𝐑𝐎𝐘𝐄𝐃!* 💣",
      ];

      // 🔥 PICK RANDOM TEXTS
      const header = headers[Math.floor(Math.random() * headers.length)];
      const footer = footers[Math.floor(Math.random() * footers.length)];
      const categoryHeader = categoriesTitle[Math.floor(Math.random() * categoriesTitle.length)];
      const introText = introTexts[Math.floor(Math.random() * introTexts.length)];

      // 🔥 RANDOM SEPARATORS
      const separators = ["👑", "⚡", "💀", "🚀", "🔱"];
      const separator = separators[Math.floor(Math.random() * separators.length)];

      const categorizedCommands = {};
      commands.map((command) => {
        if (!categorizedCommands[command.category]) {
          categorizedCommands[command.category] = true;
        }
      });

      // 🔥 CREATE RANDOMIZED MENU
      const menuText = `
${header}
🤖 *𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:* ${Config.botname}  
👑 *𝐎𝐖𝐍𝐄𝐑:* ${Config.ownername}  
⏳ *𝐔𝐏𝐓𝐈𝐌𝐄:* ${runtime(process.uptime())}  
💾 *𝐑𝐀𝐌 𝐔𝐒𝐀𝐆𝐄:* ${formatp(os.totalmem() - os.freemem())}  
⚡ *𝐓𝐎𝐓𝐀𝐋 𝐂𝐀𝐓𝐄𝐆𝐎𝐑𝐈𝐄𝐒:* ${Object.keys(categorizedCommands).length}  
🚀 *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐓𝐎𝐅𝐀𝐍 𝐁𝐑𝐀𝐍𝐃*  
${footer}

${readmore}

${introText}  

${categoryHeader}  
${Object.keys(categorizedCommands).map((cat) => `${separator} ${fancytext(cat, 1)}`).join("\n")}

👑 *𝐓𝐎𝐅𝐀𝐍 𝐁𝐑𝐀𝐍𝐃 - 𝐀𝐁𝐒𝐎𝐋𝐔𝐓𝐄 𝐏𝐎𝐖𝐄𝐑* 👑`;

      const messageOptions = {
        caption: menuText,
        ephemeralExpiration: 3000,
      };
      return await message.sendUi(message.chat, messageOptions, message);
    } catch (error) {
      await message.error(error + "\nCommand: chaos", error);
    }
  },
);
