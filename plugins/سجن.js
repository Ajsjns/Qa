const handler = async (m, {conn}) => {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  await conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/jail', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'error.png', '*كنت طيب والله 🐧💔؟*', m);
};
handler.help = ['gay'];
handler.tags = ['maker'];
handler.command = /^(اسجن)$/i;
export default handler;