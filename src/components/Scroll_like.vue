<script setup>
import Button_1 from './Button_1.vue'
</script>

<template>
  <div class="bar">
    <div class="button10" style="">
      <img
        id="left_button"
        src="/Left.png"
        alt="Left"
        class="cursor-pointer pozition-left"
        style="width: 69px; height: 89px"
        @click="left_click2"
      />
      <div class="scroll-container2">
        <div 
          v-for="animal of animals_json"
          :key="animal.id"
          class="rectangle90"
        >
        </div>
      </div>
      <img
        id="right_button"
        src="/Right.png"
        alt="Right"
        class="cursor-pointer pozition-right"
        style="width: 69px; height: 89px"
        @click="right_click2"
      />
    </div>
  </div>
</template>

<script setup>
document.addEventListener('DOMContentLoaded', () => {
  let scroll = document.querySelector('.scroll-container')
  let left = document.getElementById('left_button')
  let right = document.getElementById('right_button')

  right.addEventListener('click', () => {
const right_click2 = (event) => {
  document.querySelector('.scroll-container2').scrollLeft += 310;
};
const left_click2 = (event) => {
  document.querySelector('.scroll-container2').scrollLeft -= 310;
};
</script>

<style scoped>
.rectangle90 {
  border: 1px solid rgb(67, 85, 56);
  border-radius: 25px;
  margin-right: 40px;
  width: 200px;
  height: 280px;
  background-color: white;
  text-align: center;
  flex-shrink: 0;
}
.img {
  width: 200px;
  height: 180px;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
}
.bar .scroll-container2 {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.bar .button10 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.bar {
  margin: 0px -121px 0px;
  padding: 20px 141px;
}
@media screen and (max-width: 1294px) {
  .bar {
    margin: 0px -41px 0px;
    padding: 0px 61px;
  }
}
</style>
