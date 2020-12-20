import Telegram from 'telegram-bot-api';

const api = new Telegram({
    token: process.env.TELEGRAM_BOT_TOKEN,
});

export async function sendRequest(data) {
  const res = await api.sendMessage({
    chat_id: process.env.TELEGRAM_CHAT_ID,
    text: JSON.stringify(data),
  });

  console.log(res);
};
