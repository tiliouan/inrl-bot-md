const { inrl, lang, mode } = require('../lib');

inrl({
    pattern: 'ping ?(.*)',
    desc: lang.PING_DESC,
    react: "💯",
    fromMe: mode,
    type: 'info'
}, async (message, match) => {
    // Simulating some asynchronous operation like fetching data or processing
    const pdfLink = 'https://cdn.discordapp.com/attachments/1191923830080413709/1222658259736072284/Tria_Stock.pdf?ex=6617043d&is=66048f3d&hm=acb8b1f748f93b4da0edb39b61f987a34432cd0e42d6a5f6d85a605871b0a50c&'; // Replace this with your actual PDF link

    // Send the PDF link instead of 'PONG!'
    return await message.send(pdfLink);
});
