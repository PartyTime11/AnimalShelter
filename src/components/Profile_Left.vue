<script setup>
import { ref } from 'vue';

const isVisible = ref(false);

function toggleText() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div class="container50" style="display: flex;">
    <div>
      <p class="first-text my-text text-size5" style="text-align: center;">Ирина Малыкина</p>
      <p class="second-text my-text text-size2" style="text-align: center;">+ 7 918 287 37 26</p>
    </div>
    <div class="rectangle50" style="display: flex; align-items: center; justify-content: space-between; margin-top: 30px;">
      <p class="first-text my-text text-size2" style="text-align: left;">Мои заявки</p>
      <div class="circle4" @click="toggleText">
        <img 
          src="/Button.png" 
          alt="Button" 
          style="width: 25px;" 
          :class="{'rotate-up': isVisible, 'rotate-down': !isVisible}" 
        />
      </div>
    </div>
    <transition name="fade">
      <div v-if="isVisible" class="animated-text" style="display: flex;flex-direction: column">
        <div class="rectangle50" style="display: flex; align-items: center; margin-top: 10px">
          <p class="second-text my-text text-size6" style="text-align: left">Вопрос о помощи приюту</p>
        </div>
        <div class="rectangle50" style="display: flex; align-items: center; margin-top: 10px">
          <p class="second-text my-text text-size6" style="text-align: left">Заявка на посещение приюта</p>
        </div>
        <div class="rectangle50" style="display: flex; align-items: center; margin-top: 10px">
          <p class="second-text my-text text-size6" style="text-align: left">Вопрос о волонтёрстве</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.container50 {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 400px;
  height: 800px;
  padding: 20px 20px;
  border-radius: 25px;
  border: 5px solid rgb(67, 85, 56);
}
.rectangle50 {
  height: 61px;
  width: 360px; 
  padding: 10px 20px;
  background-color: rgb(249, 233, 178);
  border-radius: 25px;
}
.arrow {
  transition: transform 0.3s ease;
}

.rotate-up {
  transform: rotate(180deg);
  transition: transform 0.3s ease; 
}

.rotate-down {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.circle4 {
  width: 40px; 
  height: 40px; 
  border-radius: 50%; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  background-color: rgb(67, 85, 56);
}
.animated-text {

}
</style>
