// Load config
require('dotenv').config();

const PlugAPI = require('plugapi');
const handleChat = require('./src/handleChat');

const ROOM = 'vibe-vibrations';

const auth = {
  email: process.env.USERNAME,
  password: process.env.PASSWORD,
};

const bot = new PlugAPI(auth);

// Setup Event Listeners
bot.on(PlugAPI.events.CHAT, handleChat(bot));
bot.on(PlugAPI.events.ROOM_JOIN, (room) => console.log(`Joined ${room}`));

// Start it
console.log(`Connecting to: ${ROOM}`);
bot.connect(ROOM);
