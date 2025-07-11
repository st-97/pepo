// Game enums for consistent usage
export const GameEnum = Object.freeze({
  PLAYSTATION: {
    key: 'playstation',
    name: 'Playstation',
    route: '/games/playstation',
    image: new URL('../assets/images/games/playstation.svg', import.meta.url).href
  },
  FORTNITE: {
    key: 'fortnite',
    name: 'Fortnite',
    route: '/games/fortnite',
    image: new URL('../assets/images/games/fortnite.svg', import.meta.url).href
  },
  MINECRAFT: {
    key: 'minecraft',
    name: 'Minecraft',
    route: '/games/minecraft',
    image: new URL('../assets/images/games/minecraft.svg', import.meta.url).href
  },
  ROBLOX: {
    key: 'roblox',
    name: 'Roblox',
    route: '/games/roblox',
    image: new URL('../assets/images/games/robolox.svg', import.meta.url).href
  },
  AMONG_US: {
    key: 'amongus',
    name: 'Among Us',
    route: '/games/amongus',
    image: new URL('../assets/images/games/amongus.svg', import.meta.url).href
  },
  XBOX: {
    key: 'xbox',
    name: 'Xbox',
    route: '/games/xbox',
    image: new URL('../assets/images/games/xbox.svg', import.meta.url).href
  },
  MARIO: {
    key: 'mario',
    name: 'Mario',
    route: '/games/mario',
    image: new URL('../assets/images/games/mario.svg', import.meta.url).href
  },
  LEAGUES_LEGENDS: {
    key: 'leagueslegends',
    name: 'Leagues Legends',
    route: '/games/leagueslegends',
    image: new URL('../assets/images/games/leaguesLegends.svg', import.meta.url).href
  }
})
