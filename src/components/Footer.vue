<template>
  <footer class="footer">
    <p>Creat per Arnau Serra Soriano - 2025</p>
  </footer>

</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2c3e50; /* Azul oscuro elegante */
  color: #ecf0f1; /* Texto claro */
  text-align: center;
  padding: 12px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.9rem;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
  user-select: none;
  z-index: 1000;
}
@media (max-width: 400px) {
  .footer {
    font-size: 0.8rem;
    padding: 8px 0;
  }
}
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

body, footer, .navbar {
  font-family: 'Inter', sans-serif;
}

</style>

