<script setup>
import Profile_Left from './Profile_Left.vue';
import Scroll_like from './Scroll_like.vue';
import Scroll_view from './Scroll_view.vue';
</script>

<template>
  <div style="display: flex; gap: 30px; margin-top: 50px;">
    <Profile_Left />
    <div style="display: flex; flex-direction: column;">
      <p class="first-text my-text text-size5" style="text-align: center; margin-bottom: 20px;">Понравившиеся животные</p>
      <Scroll_like />
      <p class="first-text my-text text-size5" style="text-align: center; margin-top: 30px; margin-bottom: 20px">Недавно просмотренные</p>
      <Scroll_view />
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
