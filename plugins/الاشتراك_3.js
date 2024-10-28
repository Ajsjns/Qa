import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });

    const Elsony = 'https://telegra.ph/file/32329ff221ac7bbb7ab7b.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'Elsony' },
                    body: {
                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━
> Zenon↳🐢↲𝐁𝐎𝐓
> 〔 الاشتراك الشهري┊ ˼‏ 🚀˹ ↶〕
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
            *زينو🐢ــن بــ🤖ــوت*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
╗───¤﹝السعر ↶ 💵﹞
> •┊˹👾˼┊- 3 ارقام وهمية
> •┊˹👾˼┊- روبل بوت ارقام
> •┊˹👾˼┊- 750 نقطة دعمكم
╝───────────────¤
╗───¤﹝المميزات ↶ 🚀﹞
> •┊˹👾˼┊- اشتراك سرفر عام
> •┊˹👾˼┊- شغال 7/24
> •┊˹👾˼┊- البوت تحت التطوير
╝───────────────¤
╗───¤﹝طرق الدفع ↶ 💰﹞
> •┊˹👾˼┊- Payeer
> •┊˹👾˼┊- VodafoneCash
╝───────────────¤
*ملحوظة : الاشتراك الشهري 3ارقام كل اسبوع 🚀*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
⌠Zenon↳🐢↲𝐁𝐎𝐓⌡
*⋅ ───━ •﹝👑﹞• ━─── ⋅*`,
                        subtitle: "Elsony"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: Elsony } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+967783179256","merchant_url":"https://api.whatsapp.com/send?phone=+967783179256"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"","merchant_url":""}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['شهري', 'ش3', 'اشتراك_شهري', 'شهريا'];

export default handler;
