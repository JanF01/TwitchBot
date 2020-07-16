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
    username: "SumaParafialna",
    password: "oauth:vn4ytsl0o90g2mbzfah614jp1tk30q",
  },
  channels: ["yingushi"],
};

const client = new tmi.client(options);

client.connect();

client.on("connected", (address, port) => {
  //   client.action(
  //     "n0thingMatters",
  //     "Hello MentallyChallengedBot is now connected"
  //   );
  //   client.action(
  //     "ludwig",
  //     "PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp"
});

client.on("chat", (channel, user, message, self) => {
  if (
    message.includes("What are you studying?") ||
    message.includes("What are you studing?")
  ) {
    client.action(
      "yingushi",
      "Currently working on Axiomatic set Theory and Real Analysis!"
    );
  }

  if (message.includes("!quote")) {
    client.action("yingushi", "'Do or do not. There is no try.'");
  }
  //   if (message === "!pogchamp") {
  //     client.action(
  //       "n0thingMatters",
  //       "PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp"
  //     );
  //   }
});
