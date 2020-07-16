const tmi = require("tmi.js");

const options = {
  options: {
    debug: true,
  },
  connection: {
    clueter: "aws",
    reconnect: true,
  },
  identity: {
    username: "MentallyChallengedBot",
    password: "oauth:usfbuamdm6k1sp8mh1ae0181c0u8fj",
  },
  channels: ["n0thingMatters"],
};

const client = new tmi.client(options);

client.connect();

client.on("connected", (address, port) => {
  client.action(
    "n0thingMatters",
    "Hello MentallyChallengedBot is now connected"
  );
});

client.on("chat", (channel, user, message, self) => {
  if (message === "!chuj") {
    client.action("n0thingMatters", "Nieładnie tak mówić");
  }
  if (message === "!pogchamp") {
    client.action(
      "n0thingMatters",
      "https://www.youtube.com/watch?v=IDz0g6dZKAQ"
    );
  }
});
