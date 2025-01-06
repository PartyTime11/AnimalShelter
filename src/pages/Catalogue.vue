<script setup>
import Header from '../components/Header.vue';
import Catalog from '../components/Catalog.vue';
import Inform from '../components/Inform.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Header />
  <Suspense> <!-- для компонентов, которые шлют запрос на сервер -->
    <Catalog />
    <template #fallback>
      <div class="loading" style="text-align: center">
        загрузка...
      </div>
    </template>
  </Suspense>
  <Inform />
  <Footer />
</template>

<style scoped>

</style>