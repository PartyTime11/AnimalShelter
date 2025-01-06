<template>
  <div class="bar">
    <div class="button10" style="">
      <img
        id="left_button"
        src="/Left.png"
        alt="Left"
        class="cursor-pointer pozition-left"
        style="width: 69px; height: 89px"
        @click="left_click"
      />
      <div class="scroll-container">
        <div 
          v-for="animal of animals_json"
          :key="animal.id"
          class="rectangle70"
        >
          <img :src="animals_images_url + animal.image" alt="Asya" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">{{ animal.name }}</h2>
          <p class="second-text my-text text-size2">{{ animal.age }} лет, {{ animal.gender }}</p>
        </div>
      </div>
      <img
        id="right_button"
        src="/Right.png"
        alt="Right"
        class="cursor-pointer pozition-right"
        style="width: 69px; height: 89px"
        @click="right_click"
      />
    </div>
    <div class="text-size2" style="display: flex; justify-content: center; margin-top: 50px;">
      <router-link to="/catalogue">
        <Button_1
            size="big"
            color="color-dark"
            text_color="text-color-white"
            hover="light"
            >
            Смотреть всех животных
        </Button_1>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import Button_1 from './Button_1.vue';

let animals_url = "http://127.0.0.1:8000/api/animals/";
let animals_images_url = "http://127.0.0.1:8000/animal_previews/";

let response = await fetch(animals_url);
let animals_json = await response.json();

const right_click = (event) => {
  document.querySelector('.scroll-container').scrollLeft += 310;
};
const left_click = (event) => {
  document.querySelector('.scroll-container').scrollLeft -= 310;
};
</script>

<style scoped>
.rectangle70 {
  border: 1px solid rgb(67, 85, 56);
  border-radius: 25px;
  margin-right: 40px;
  width: 270px;
  height: 388px;
  background-color: white;
  text-align: center;
  flex-shrink: 0;
}
.img {
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
}
.bar .scroll-container {
  display: flex;
  max-width: 1210px;
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
