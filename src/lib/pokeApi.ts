const baseUrl = "https://pokeapi.co/api/v2"

export async function getPokemon(name: string) {
  const response = await fetch(`${baseUrl}/pokemon/${name}`);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return response.json();
}


export async function getPokemonList({ limit = 10, offset = 0 }) {
  const response = await fetch(`${baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
