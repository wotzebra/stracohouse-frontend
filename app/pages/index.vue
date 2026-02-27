<script setup lang="ts">
useHead({
  title: 'Straco House - Coming Soon',
})
</script>

<template>
  <main class="page">
    <!-- Architectural Sketch -->
    <div class="sketch-container fade-in">
      <img
        src="/assets/house-sketch.png"
        alt="Straco House"
        class="sketch"
      />
    </div>

    <!-- Text Content -->
    <div class="content">
      <p class="coming-soon fade-in-delay-1">
        coming soon
      </p>

      <h1 class="title fade-in-delay-1">
        straco house
      </h1>

      <p class="date fade-in-delay-2">
        October 2026
      </p>
    </div>

    <!-- Footer Logo -->
    <div class="logo-bottom fade-in-delay-2">
      <img
        src="/assets/straco-logo.png"
        alt="Straco"
        class="logo"
      />
    </div>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background-color: #000000;
}

.logo {
  width: 80px;
  height: auto;
}

.sketch-container {
  margin-bottom: 50px;
}

.sketch {
  max-width: 450px;
  width: 100%;
  height: auto;
}

.content {
  text-align: center;
  margin-bottom: 50px;
}

.coming-soon {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 4px;
  color: #888888;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.title {
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 6px;
  color: #ffffff;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.date {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 2px;
  color: #666666;
}

.logo-bottom {
  margin-top: 10px;
}

/* Responsive */
@media (max-width: 600px) {
  .sketch {
    max-width: 280px;
  }

  .title {
    font-size: 14px;
    letter-spacing: 4px;
  }

  .logo {
    width: 60px;
  }
}
</style>
