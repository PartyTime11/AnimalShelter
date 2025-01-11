<script setup>
import Button_1 from './Button_1.vue';
import Profile_Left from './Profile_Left.vue';
import Scroll_like from './Scroll_like.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let animals_exit = 'http://127.0.0.1:8000//api/login/';

const exit = () => {
  localStorage.removeItem('token');
  router.push('/');
};

</script>

<template>
  <div style="display: flex; align-items: center;gap: 30px; margin-top: 50px;">
    <Profile_Left />
    <div style="display: flex; flex-direction: column;">
      <img
          src="/Flower.png"
          alt="Flower"
          style="width: auto; height: auto;margin-bottom: 25px"
        />
      <p class="first-text my-text text-size5" style="text-align: center; margin-bottom: 20px;">Понравившиеся животные</p>
      <Suspense> <!-- для компонентов, которые шлют запрос на сервер -->
        <Scroll_like />
        <template #fallback>
          <div class="loading" style="text-align: center">
            загрузка...
          </div>
        </template>
      </Suspense>
      <img
          src="/Flower.png"
          alt="Flower"
          style="width: auto; height: auto; margin-top: 25px;"
        />
      <div class="center text-size2" style="margin-top: 50px; display: flex; justify-content: center;" @click="exit">
        <Button_1 size="small" color="color-dark" text_color="text-color-white" hover="light">
          Выход
        </Button_1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container60 {
  width: 600px;
  height: 500px;
  border: 1px solid black;
}
</style>
