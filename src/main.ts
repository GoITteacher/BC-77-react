// interface User {
//   username: string;
//   greet: (message: string) => void;
// }

// const jacob: User = {
//   username: "Jacob",
//   greet: (message) => {
//     console.log(message);
//   },
// };

// jacob.greet("qweqweq");

interface Players {
  username: string;
  isOnline: boolean;
}

const allPlayers: Players[] = [
  { username: "poly", isOnline: false },
  { username: "jacob", isOnline: true },
  { username: "adrian", isOnline: false },
];

interface Platform {
  getOnlinePlayers: (players: Players[]) => Players[];
  getPlayerNames: (players: Players[]) => string[];
}

const gamingPlatform: Platform = {
  getOnlinePlayers: (players) => {
    return players.filter((player) => player.isOnline);
  },
  getPlayerNames: (players) => {
    return players.map((player) => player.username);
  },
};

gamingPlatform.getOnlinePlayers(allPlayers);
gamingPlatform.getPlayerNames(allPlayers);
