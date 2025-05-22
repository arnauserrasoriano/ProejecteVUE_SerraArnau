<template>
  <section class="landing">
    <img
        src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80"
        alt="Imatge decorativa"
        class="landing-image"
    />
    <h1>Benvingut al projecte VUE d'Arnau Serra</h1>
    <p>Esta es la landing page que presenta el meu projecte.</p>
  </section>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
.landing {
  max-width: 700px;
  margin: 80px auto;
  padding: 20px 30px;
  background: #f9faff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(66, 185, 131, 0.15);
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

.landing-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  margin-bottom: 24px;
}

.landing h1 {
  font-size: 2.8rem;
  margin-bottom: 16px;
  font-weight: 700;
  color: #42b983;
}

.landing p {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #34495e;
}
@media (max-width: 400px) {
  .footer {
    font-size: 0.8rem;
    padding: 8px 0;
  }
}

</style>
