/**


 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : 𝚂𝚁_𝙳𝙸𝙽𝚄_𝙼𝙳
 * @author : 𝚂𝚁_𝙳𝙸𝙽𝚄_𝙼𝙳 <https://github.com/dinujaya423>
 * @description : A Multi-functional whatsapp bot script.
 * @version 1.0.0
 **/

const {readEnv} = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "bot's commands",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭─「 ${config.BOT_NAME} 」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 3.0.0*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • ᎷᎪᎥИ*
*├ 2 • ᏕᏋᎪᏒᏕᎻ*
*├ 3 • ᎠОᏇИᏞОᎠ*
*├ 4 • ᎶᏒОᏌᏢ*
*├ 5 • ОᏇИᏋᏒ*
*├ 6 • ᎰᏌИ*
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 Reply with the Number you want to select*_

> *© 𝛲ᴏ᭙𝙴𝑅ᴇᴅ ʙ🅨︎ 𝑆𝑅_ 𝐷𝐼𝚴び*`;

        const vv = await conn.sendMessage(from, { image: { url: config.MENU_IMG}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                    reply(`
                    

╔════════════════════════╗  
║ 🔧 **𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 🔧 ║  
╚════════════════════════╝  

╭─━─〔 ⚡ **Commands** ⚡ 〕━━╮  
┃ ◈ **ᎪᏞᎥᏙᏋ**
┃ ◈ **ᎷᏋИᏌ**  
┃ ◈ **ᎷᏋИᏌ2**  
┃ ◈ **ᏕЎᏕᎢᏋᎷ**  
┃ ◈ **ᏢᎥИᎶ**  
┃ ◈ **ᏒᏌИᎢᎥᎷᏋ**
┃ ◈ **ᎫᎥᎠ**
╰─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in MAIN:** 7  
 
> 💡 **© 𝛲ᴏ᭙𝙴𝑅ᴇᴅ ʙ🅨︎ 𝑆𝑅_ 𝐷𝐼𝚴び*  

`);

                        break;
                    case '2':               
                        reply(`

╔════════════════════════╗  
║ 🔍 **𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 🔍 ║  
╚════════════════════════╝  

╭─━〔 ⚡ **Commands** ⚡ 〕━──━╮  
┃ ◈ **𝘆𝘁𝘀**  
┃ ◈ **𝗶𝗺𝗮𝗴𝗲** 
╰─━─━─━━─━─━─━─━─━─╯  

📊 **Total Commands in SEARCH:** 2

> 💡 **© 𝛲ᴏ᭙𝙴𝑅ᴇᴅ ʙ🅨︎ 𝑆𝑅_ 𝐷𝐼𝚴び**
`);
                        break;
                    case '3':               
                        reply(`
╔════════════════════════╗  
║ 📥 **𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 📥 ║  
╚════════════════════════╝  

╭─━━〔 ⚡ **Commands** ⚡ 〕━─━━╮  
┃ ◈ **𝗮𝗽𝗸**  
┃ ◈ **𝘁𝘄𝗶𝘁𝘁𝗲𝗿r**  
┃ ◈ **𝗴𝗱𝗿𝗶𝘃𝗲**  
┃ ◈ **𝗺𝗲𝗱𝗶𝗮𝗳𝗶𝗿𝗲**  
┃ ◈ **𝗳𝗯**  
┃ ◈ **𝗽𝗹𝗮𝘆**
┃ ◈ **𝗽𝗹𝗮𝘆2**  
┃ ◈ **𝘃𝗶𝗱𝗲𝗼**   
┃ ◈ **𝘃𝗶𝗱𝗲𝗼2**  
┃ ◈ **𝘆𝘁𝗮**  
┃ ◈ **𝘁𝗶𝗸𝘁𝗼𝗸**
┃ ◈ **𝘆𝘁𝗺𝗽3**
╰─━─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in DOWNLOAD:** 12
 
> 💡 **© 𝛲ᴏ᭙𝙴𝑅ᴇᴅ ʙ🅨︎ 𝑆𝑅_ 𝐷𝐼𝚴び**  

`);
                    
                        break;
                    case '4':               
                        reply(`
╔════════════════════════╗  
║ 👥 **𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 👥 ║  
╚════════════════════════╝  

╭─━──━〔 ⚡ **Commands** ⚡ 〕━─━╮  
┃ ◈ **𝗺𝘂𝘁𝗲**  
┃ ◈ **𝘂𝗻𝗺𝘂𝘁𝗲**  
┃ ◈ **𝗽𝗿𝗼𝗺𝗼𝘁𝗲**  
┃ ◈ **𝗱𝗲𝗺𝗼𝘁𝗲**  
┃ ◈ **𝗱𝗲𝗹**  
┃ ◈ **𝗮𝗱𝗱**  
┃ ◈ **𝗮𝗱𝗺𝗶𝗻𝘀**  
┃ ◈ **𝗴𝗿𝗼𝘂𝗽𝗱𝗲𝘀𝗰**  
┃ ◈ **𝗴𝗿𝗼𝘂𝗽𝗶𝗻𝗳𝗼**  
┃ ◈ **𝗴𝗻𝗮𝗺𝗲**  
┃ ◈ **𝘀𝗲𝘁𝘀𝘂𝗯𝗷𝗲𝗰𝘁**  
┃ ◈ **𝘁𝗮𝗴𝗮𝗹𝗹**  
┃ ◈ **𝗵𝗶𝗱𝗲𝘁𝗮𝗴**  
┃ ◈ **𝘂𝗻𝗹𝗼𝗰𝗸**  
┃ ◈ **𝗹𝗼𝗰𝗸**
┃ ◈ **𝗴𝗻𝗮𝗺𝗲**  
┃ ◈ **𝗷𝗼𝗶𝗻**  
┃ ◈ **𝗹𝗲𝗮𝘃𝗲**  
┃ ◈ **𝗶𝗻𝘃𝗶𝘁𝗲**  
┃ ◈ **𝘁𝗮𝗴𝗮𝗱𝗺𝗶𝗻**  
╰─━─━─━─━─━─━─━─━─━━─╯  

📊 **Total Commands in GROUP:** 20  


> 💡 **© 𝛲ᴏ᭙𝙴𝑅ᴇᴅ ʙ🅨︎ 𝑆𝑅_ 𝐷𝐼𝚴び**  
`);
                    break;
                    case '5':               
                        reply(`
╔════════════════════════╗  
║ 👨‍💻 **𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 👨‍💻 ║  
╚════════════════════════╝  

╭─━〔 🍿 **Commands** 🍿 〕━──━╮ 
┃ ◈ **𝘀𝗵𝘂𝘁𝗱𝗼𝘄𝗻**  
┃ ◈ **𝗹𝗶𝘃𝗲**  
┃ ◈ **𝗽𝗶𝗻𝗴**  
┃ ◈ **𝗰𝗹𝗲𝗮𝗿𝗰𝗵𝗮𝘁𝘀**  
┃ ◈ **𝗯𝗹𝗼𝗰𝗸**
┃ ◈ **𝘂𝗻𝗯𝗹𝗼𝗰𝗸**
┃ ◈ **𝗿𝗲𝗽𝗼**
┃ ◈ **𝗼𝘄𝗻𝗲𝗿**
┃ ◈ **𝗼𝘄𝗻𝗲𝗿2**
╰─━━─━─━──━─━─━━─━─╯  

📊 **Total Commands in Owner:** 9

 
> 💡 **© 𝛲ᴏ᭙𝙴𝑅ᴇᴅ ʙ🅨︎ 𝑆𝑅_ 𝐷𝐼𝚴び**  

`);
                    break;
                    case '6':               
                        reply(`
╔════════════════════════╗  
║ 👨‍💻 **𝐓𝐎𝐎𝐋𝐒 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 👨‍💻 ║  
╚════════════════════════╝  

╭─━〔 🍿 **Commands** 🍿 〕━──━╮ 
┃ ◈ **𝗷𝗼𝗸𝗲**  
┃ ◈ **𝗳𝗹𝗶𝗿𝘁**  
┃ ◈ **𝘁𝗿𝘂𝘁𝗵**  
┃ ◈ **𝗱𝗮𝗿𝗲**  
┃ ◈ **𝗳𝗮𝗰𝘁** 
┃ ◈ **𝗽𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲** 
┃ ◈ **𝗰𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿** 
┃ ◈ **𝗿𝗲𝗽𝗲𝗮𝘁** 
┃ ◈ **𝘀𝗽𝗮𝗺** 
┃ ◈ **𝗿𝗲𝗮𝗱𝗺𝗼𝗿𝗲** 
╰─━━─━─━──━─━─━━─━─╯  

📊 **Total Commands in Owner:** 10

 
> 💡 **© 𝛲ᴏ᭙𝙴𝑅ᴇᴅ ʙ🅨︎ 𝑆𝑅_ 𝐷𝐼𝚴び**  

`);
                       
                        
                    break;
                    default:
                    
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
