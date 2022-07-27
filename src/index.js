require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TELEGRAM_API, {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Assalom-u Aleykum, ${msg.chat.username}`, {
    reply_markup: JSON.stringify({
      keyboard: [
        [
          {
            text: "About me 📝",
          },
          {
            text: "Portfolio 💻",
          },
        ],
        [
          {
            text: "Technologies 🤖",
          },
          {
            text: "Send a Request 🖋",
          },
        ],
      ],
      resize_keyboard: true,
    }),
  });
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text == "About me 📝") {
    bot.sendMessage(
      chatId,
      "Let me introduce myself. My name's Amirshoh and I was born in 2006. I am a student.  I am a prospective developer. My interest in programming started when I was 11 years old.First of all, I started learning IT from the internet and I decided to become a Full Stack Developer. After that, I started studying at Najot Ta'lim Academy and I was learning English along with programming. After 10 months, I completed the Web Programming course and I learned many technologies from there.",
      {
        reply_markup: JSON.stringify({
          keyboard: [
            [
              {
                text: "Previous ⬅",
              },
            ],
          ],
          resize_keyboard: true,
        }),
      }
    );
  }

  if (msg.text == "Portfolio 💻") {
    bot.sendMessage(chatId, "https://github.com/Ibragim0v", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Previous ⬅",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    });
  }

  if (msg.text == "Technologies 🤖") {
    bot.sendMessage(chatId, "Technologies", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Front End 🎡",
            },
            {
              text: "Back End 💣",
            },
          ],
          [
            {
              text: "Previous ⬅",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    });
  }

  if (msg.text == "Send a Request 🖋") {
    bot.sendMessage(chatId, "Send a Request", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Previous ⬅",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    });
  }
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text == "Front End 🎡") {
    bot.sendPhoto(chatId, process.env.FRONTEND, {
      caption: `
      <i>Front End Technologies</i> \n<strong>1.</strong><em>HTML</em> \n<strong>2.</strong><em>CSS</em> \n<strong>3.</strong><em>SCSS/SASS</em> \n<strong>4.</strong><em>Git</em> \n<strong>5.</strong><em>GitHub</em> \n<strong>6.</strong><em>Bootstrap</em> \n<strong>7.</strong><em>Javascript</em> \n<strong>8.</strong><em>React.JS</em> \n<strong>9.</strong><em>Material UI</em> \n<strong>10.</strong><em>Redux</em> \n`,
      parse_mode: "HTML",
    });
  }

  if (msg.text == "Back End 💣") {
    bot.sendPhoto(chatId, process.env.BACKEND, {
      caption: `
        <i>Back End Technologies</i> \n<strong>1.</strong><em>OOP</em> \n<strong>2.</strong><em>Node.JS</em> \n<strong>3.</strong><em>Express.JS</em> \n<strong>4.</strong><em>WebSocket</em> \n<strong>5.</strong><em>EJS</em> \n<strong>6.</strong><em>PostgeSQL</em> \n<strong>7.</strong><em>Typescript</em> \n<strong>8.</strong><em>Nest.JS</em> \n<strong>9.</strong><em>AWS</em> \n<strong>10.</strong><em>MongoDB</em> \n`,
      parse_mode: "HTML",
    });
  }

  if (msg.text == "Previous ⬅") {
    bot.sendMessage(chatId, "Previous", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "About me 📝",
            },
            {
              text: "Portfolio 💻",
            },
          ],
          [
            {
              text: "Technologies 🤖",
            },
            {
              text: "Send a Request 🖋",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    });
  }
});
