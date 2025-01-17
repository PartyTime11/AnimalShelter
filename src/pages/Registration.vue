<script setup>
import Header from '../components/Header.vue'
import Registr_form from '../components/Registr_form.vue'
</script>

<template>
  <Header />
  <Suspense>
    <!-- для компонентов, которые шлют запрос на сервер -->
    <Registr_form />
    <template #fallback>
      <div class="loading" style="text-align: center">загрузка...</div>
    </template>
  </Suspense>
</template>

<style></style>
