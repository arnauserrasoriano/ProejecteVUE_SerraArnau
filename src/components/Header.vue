<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link" exact>Inici</router-link>
    <router-link to="/api" class="nav-link">API</router-link>
    <router-link to="/crud" class="nav-link">CRUD</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.navbar {
  display: flex;
  gap: 24px;
  padding: 14px 28px;
  background-color: #1e2a38;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

.nav-link {
  color: #cfd8dc;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.15rem;
  position: relative;
  padding: 6px 8px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #42b983;
}

.router-link-exact-active {
  color: #42b983;
  font-weight: 700;
  border-bottom: 2px solid #42b983;
}

@media (max-width: 400px) {
  .navbar {
    flex-direction: column;
    gap: 12px;
    padding: 10px;
  }

  .nav-link {
    font-size: 1rem;
    text-align: center;
  }
}
</style>
