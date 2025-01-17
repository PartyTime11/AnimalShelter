<script setup>
import Header from '../components/Header.vue';
import Profile_Right from '../components/Profile_Right.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Header />
  <Suspense> <!-- для компонентов, которые шлют запрос на сервер -->
    <Profile_Right />
    <template #fallback>
      <div class="loading" style="text-align: center">
        загрузка...
      </div>
    </template>
  </Suspense>
  <Footer />
</template>

<style scoped>

</style>