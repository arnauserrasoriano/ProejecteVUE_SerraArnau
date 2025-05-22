<template>
  <section class="api-section">
    <h2>Dades de l'API</h2>
    <p class="subtitle">Llistat de peticions POST d'una API pública d'exemple (JSONPlaceholder)</p>

    <ul v-if="posts.length" class="api-list">
      <li v-for="post in posts" :key="post.id" class="api-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <p v-else class="loading">Carregant dades de JSONPlaceholder...</p>
  </section>

  <section class="api-section">
    <h2>Personatges de Rick and Morty API</h2>
    <p class="subtitle">Personatges populars de la sèrie de TV Rick and Morty</p>

    <ul v-if="characters.length" class="api-list">
      <li v-for="char in characters" :key="char.id" class="api-item">
        <h3>{{ char.name }}</h3>
        <img :src="char.image" :alt="char.name" width="100" />
        <p>Espècie: {{ char.species }}</p>
        <p>Estat: {{ char.status }}</p>
      </li>
    </ul>
    <p v-else class="loading">Carregant dades de Rick and Morty...</p>
  </section>

  <section class="api-section">
    <h2>Pokémons de PokeAPI</h2>
    <p class="subtitle">Una llista curta de Pokémon</p>

    <ul v-if="pokemons.length" class="api-list">
      <li v-for="pokemon in pokemons" :key="pokemon.name" class="api-item">
        <h3>{{ pokemon.name }}</h3>
        <p>URL: <a :href="pokemon.url" target="_blank" rel="noopener">{{ pokemon.url }}</a></p>
      </li>
    </ul>
    <p v-else class="loading">Carregant dades de Pokémons...</p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const characters = ref([])
const pokemons = ref([])

onMounted(async () => {
  try {
    // JSONPlaceholder posts
    const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    if (!resPosts.ok) throw new Error("Error al carregar l'API JSONPlaceholder")
    posts.value = await resPosts.json()

    // Rick and Morty characters (primer 10)
    const resChars = await fetch('https://rickandmortyapi.com/api/character/?page=1')
    if (!resChars.ok) throw new Error("Error al carregar l'API Rick and Morty")
    const dataChars = await resChars.json()
    characters.value = dataChars.results.slice(0, 10)

    // PokeAPI (primer 10 pokemons)
    const resPoke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    if (!resPoke.ok) throw new Error("Error al carregar l'API PokeAPI")
    const dataPoke = await resPoke.json()
    pokemons.value = dataPoke.results
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.api-section {
  max-width: 700px;
  margin: 60px auto;
  padding: 24px 30px;
  background: #f0f4f8;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(66, 185, 131, 0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

.api-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #42b983;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 24px;
  color: #555e6f;
}

.api-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.api-item {
  background: white;
  padding: 18px 20px;
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(66, 185, 131, 0.1);
  transition: transform 0.2s ease;
  width: calc(50% - 16px);
  box-sizing: border-box;
}

.api-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(66, 185, 131, 0.2);
}

.api-item h3 {
  margin: 0 0 8px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2a6f3a;
  text-transform: capitalize;
}

.api-item p {
  margin: 0;
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.4;
}

.api-item img {
  display: block;
  margin: 8px 0;
  border-radius: 8px;
}

.loading {
  font-style: italic;
  color: #888d94;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 16px;
}

@media (max-width: 600px) {
  .api-item {
    width: 100%;
  }
}
</style>
