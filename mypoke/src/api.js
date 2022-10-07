/* export const api = {
    characters: async () => {
      const response = await fetch('/api/characters.json')
      return await response.json()
    },
  
    comics: async (characterId) => {
      const response = await fetch(`/api/comics-${characterId}.json`)
      return await response.json()
    },
  
    allComics: async () => {
      const response = await fetch('/api/comics.json')
      return await response.json()
    }
  } */
  
  export const api = {
    allPokemons: async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      console.log(await response.json());
      return await response.json();
      
    },
  
    pokemon: async (pokeName) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
      
      console.log(await response.json());
      return await response.json();
    },
  
    
  }