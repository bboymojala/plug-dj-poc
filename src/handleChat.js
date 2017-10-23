const handleChat = (bot) => (data) => {
  console.log(`Received message: ${data.message}`);

  const responses = {
    ['couch']: () => bot.sendChat('Got cheetos?'),
    ['couch guy ?']: () => bot.sendChat('gaaa!!, gank, bonus, Imma get more, dont worry bout that'),
  };

  const response = responses[data.message];
  if (response) { response(); }
}

module.exports = handleChat;
