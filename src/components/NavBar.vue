<template>
  <header class="navbar">
    <router-link to="/" exact-active-class="active-link">Inici</router-link>
    <router-link to="/api" exact-active-class="active-link">API</router-link>
    <router-link to="/crud" exact-active-class="active-link">CRUD</router-link>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px 24px;
  background-color: #1e2a38;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  margin-bottom: 40px;
}

a {
  color: #cfd8dc;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

a:hover {
  color: #42b983;
}

.active-link {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>
