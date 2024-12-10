<script setup>
import Header from '../components/Header.vue';
import Title from '../components/Title.vue';
import Flower from '../components/Flower.vue';
import Help from '../components/Help.vue';
import Scroll from '../components/Scroll.vue';
import News from '../components/News.vue';
import Articles from '../components/Articles.vue';
import Request from '../components/Request.vue';
import Inform from '../components/Inform.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Header />
  <Title />
  <Flower />
  <Suspense> <!-- для компонентов, которые шлют запрос на сервер -->
    <Scroll />

    <template #fallback>
      <div class="loading">
        загрузка...
      </div>
    </template>
  </Suspense>

  <Help />
  <News />
  <Articles />
  <Request />
  <Inform />
  <Footer />
</template>

<style>
</style>
