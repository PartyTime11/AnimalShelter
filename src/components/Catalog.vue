<template>
  <div style="margin-top: 40px">
    <p class="first-text my-text left-text text-size3">Каталог собак и кошек из приюта</p>
    <p
      class="second-text my-text left-text text-size5"
      style="margin-top: 30px; margin-bottom: 30px"
    >
      Выберите себе питомца по фильтрам на странице или доверьтесь судьбе, а кураторы познакомят вас
      лично и помогут в период адаптации дома.
    </p>
    <p class="second-text my-text left-text text-size5">
      Все животные привиты, стерилизованы, чипированы и отдаются бесплатно в добрые руки
    </p>
  </div>
  <div style="display: flex; flex-direction: column">
    <div style="display: flex; justify-content: center; gap: 40px">
      <div class="container11" style="margin-top: 60px">
        <div v-for="animal of animals_json" :key="animal.id" class="rectangle21">
          <img :src="animals_images_url + animal.image" alt="Asya" class="img" />
          <div class="first-text my-text" style="font-size: 30px">
            <div style="display: flex; justify-content: center; margin-top: 10px">
              {{ animal.name }}
              <div style="margin-left: 5px" class="body">
                <div class="like-button" :class="{ hide6: showHearts }" @click="like(animal)">
                  <div class="heart-bg">
                    <div id="like" class="heart-icon" :class="{ liked: animal.liked }" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="second-text my-text text-size2">{{ animal.age }} лет, {{ animal.gender }}</p>
        </div>
      </div>
      <Filter @filter="(value) => (animals_json = value)" />
    </div>
  </div>
  <Help_2 />
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Filter from './Filter.vue';
import Help_2 from './Help_2.vue';
let animals_url = 'http://127.0.0.1:8000/api/animals/';
let animals_favorite = 'http://127.0.0.1:8000/api/favorite/';
let animals_images_url = 'http://127.0.0.1:8000/animal_previews/';

const animals_json = ref([]);
const fetchAnimals = async () => {
  let response = '';
  if (localStorage.getItem('token')) {
    const params = new URLSearchParams({
      user_token: localStorage.getItem('token')
    });
    response = await fetch(`${animals_url}?${params.toString()}`);
  } else {
    response = await fetch(animals_url);
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

const like = async(animal) => {
  animal.liked = !animal.liked;
  const query = animals_favorite + '?user_token=' + localStorage.getItem('token') + '&animal_id=' + animal.id;
  let response = await fetch(query, {
    method: 'POST'
  });
};

const showHearts = !localStorage.getItem('token');
</script>

<style scoped>
.catalog {
  margin: 50px -121px 0;
  padding: 45px 141px;
}
.container11 {
  max-width: 890px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
}
.container12 {
  max-width: 1200px;
  display: grid;
  gap: 40px;
  margin-top: 40px;
  grid-template-columns: repeat(4, 1fr);
}
.rectangle21 {
  border: 1px solid rgb(67, 85, 56);
  border-radius: 25px;
  margin-bottom: 0px;
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

.body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.like-button .heart-icon {
  height: 100px;
  width: 100px;
  background: url('heart2.png');
  background-position: left;
  cursor: pointer;
  position: absolute;
}

.like-button .heart-icon.liked {
  animation: like-anim 0.8s steps(28) forwards;
}

@keyframes like-anim {
  to {
    background-position: right;
  }
}

.like-button .heart-bg {
  background: rgba(255, 192, 200, 0);
  border-radius: 50%;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 70ms ease;
}

.like-button .heart-bg:hover {
  background: rgba(255, 192, 200, 0.7);
}

.like-button {
  display: flex;
  align-items: center;
}

.hide6 {
  display: none;
}

 /* @media (min-width: 1000px) and (max-width: 1400px) {
  .hide {
    display: none;
  }
  .container11 {
    grid-template-columns: repeat(2, 1fr);
  }
  .container12 {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 500px) and (max-width: 1000px) {
  .hide {
    display: none;
  }
  .hide2 {
    display: none;
  }
  .container11 {
    grid-template-columns: repeat(1, 1fr);
  }
  .container12 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 1294px) {
  .flex {
    margin: 30px -41px 0px;
    padding: 40px 61px;
    margin-top: -30px;
  }
  .text-size5 {
    font-size: 20px;
  }
} */
</style>
