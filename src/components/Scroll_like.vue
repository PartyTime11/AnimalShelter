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
          v-for="animal of animals_json.filter(animal => animal.liked)"
          :key="animal.id"
          class="rectangle90"
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
        @click="right_click2"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
let animals_url = "http://127.0.0.1:8000/api/animals/";
let animals_images_url = "http://127.0.0.1:8000/animal_previews/";
let animals_favorite = 'http://127.0.0.1:8000/api/favorite/';

const right_click2 = (event) => {
  document.querySelector('.scroll-container2').scrollLeft += 310;
};
const left_click2 = (event) => {
  document.querySelector('.scroll-container2').scrollLeft -= 310;
};

const animals_json = ref([]);
const fetchAnimals = async () => {
  let response = '';
  if (localStorage.getItem('token')) {
    const params = new URLSearchParams({
      user_token: localStorage.getItem('token')
    });
    response = await fetch(`${animals_url}?${params.toString()}`);
  }
  const data = await response.json();
  console.log(data);
  animals_json.value = data.map((animal) => ({
    ...animal
  }));
};

onMounted(() => {
  fetchAnimals();
});
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
