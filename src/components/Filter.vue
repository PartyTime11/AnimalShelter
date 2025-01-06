<script setup>
import Button_1 from './Button_1.vue';

let kind_of_animal = ref('');
let size = ref('');
let temper = ref('');
let age_range = ref('');
let gender = ref('');
let type_of_fur = ref('');
let colour = ref('');
const toggleColor = (elements, clickedIndex) => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (clickedIndex[i] == 1) {
      element.value.classList.add('clicked');
    } else {
      element.value.classList.remove('clicked');
    }
  }
};
</script>

<template>
  <div style="display: flex; flex-direction: column; margin-top: 60px; margin-left: 0px">
    <div
      class="container12"
      style="display: flex; flex-direction: column;"
    >
      <p class="first-text my-text text-size2 text-left">
        Кого вы ищете?
      </p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
          @click="
            () => {
              toggleColor(catDog, [1, 0])
              kind_of_animal = 'cat'
            }
          "
          <p class="second-text my-text text-size6 text-center">
            Кошка
          </p>
        </div>
          @click="
            () => {
              toggleColor(catDog, [0, 1])
              kind_of_animal = 'dog'
            }
          "
          <p class="second-text my-text text-size6 text-center">
            Собака
          </p>
        </div>
      </div>
      <p
        class="first-text my-text text-size2 text-left"
        style="margin-top: 15px"
      >
        Размер
      </p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
          @click="
            () => {
              toggleColor(sizes, [1, 0, 0])
              size = 'small'
            }
          "
          <img
            src="/Size.png"
            alt="Size"
            style="width: 16px; height: 14px;"
          >
        </div>
          @click="
            () => {
              toggleColor(sizes, [0, 1, 0])
              size = 'middle'
            }
          "
          <img
            src="/Size.png"
            alt="Size"
            style="width: 23px; height: 20px;"
          >
        </div>
          @click="
            () => {
              toggleColor(sizes, [0, 0, 1])
              size = 'big'
            }
          "
          <img
            src="/Size.png"
            alt="Size"
            style="width: 31px; height: 26px;"
          >
        </div>
      </div>
      <p class="first-text my-text text-size2 text-left"
      style="margin-top: 15px">Характер</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
          @click="
            () => {
              toggleColor(characters, [1, 0])
              temper = 'calm'
            }
          "
          <p class="second-text my-text text-size6 text-center">
            Спокойный
          </p>
        </div>
          @click="
            () => {
              toggleColor(characters, [0, 1])
              temper = 'active'
            }
          "
          <p class="second-text my-text text-size6 text-center">
            Активный
          </p>
        </div>
      </div>
          @click="
            () => {
              toggleColor(ages, [1, 0, 0])
              age_range = '0-5'
            }
          "
          @click="
            () => {
              toggleColor(ages, [0, 1, 0])
              age_range = '5-10'
            }
          "
        </div>
          @click="
            () => {
              toggleColor(ages, [0, 0, 1])
              age_range = '10-15'
            }
          "
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 10px; justify-content: center; align-items: center">
        <div class="circle1" />
        <div class="horizontal-line" />
        <div class="circle1" />
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Пол питомца</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
          @click="
            () => {
              toggleColor(genders, [1, 0])
              gender = 'девочка'
            }
          "
          <p class="second-text my-text text-size6 text-center">
            Девочка
          </p>
        </div>
          @click="
            () => {
              toggleColor(genders, [0, 1])
              gender = 'мальчик'
            }
          "
          <p class="second-text my-text text-size6 text-center">
            Мальчик
          </p>
        </div>
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Тип шерсти</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
          @click="
            () => {
              toggleColor(wools, [1, 0])
              type_of_fur = 'short'
            }
          "
          <p class="second-text my-text text-size6 text-center">
            Короткая
          </p>
        </div>
          @click="
            () => {
              toggleColor(wools, [0, 1])
              type_of_fur = 'long'
            }
          "
          <p class="second-text my-text text-size6 text-center">
            Длинная
          </p>
        </div>
      </div>
          @click="
            () => {
              toggleColor(colours, [1, 0, 0, 0, 0, 0])
              colour = 'white'
            }
          "
          @click="
            () => {
              toggleColor(colours, [0, 1, 0, 0, 0, 0])
              colour = 'grey'
            }
          "
          @click="
            () => {
              toggleColor(colours, [0, 0, 1, 0, 0, 0])
              colour = 'brown'
            }
          "
          @click="
            () => {
              toggleColor(colours, [0, 0, 0, 1, 0, 0])
              colour = 'ginger'
            }
          "
          @click="
            () => {
              toggleColor(colours, [0, 0, 0, 0, 1, 0])
              colour = 'beige'
            }
          "
          @click="
            () => {
              toggleColor(colours, [0, 0, 0, 0, 0, 1])
              colour = 'black'
            }
          "
      </div>
      <div class="text-size6" style="display: flex; justify-content: center; margin-top: 30px;">
        <Button_1
          size="tiny2"
          color="color-dark"
          text_color="text-color-white"
          hover="dark-green"
          >
          Найти по фильтрам 
        </Button_1>
    </div>
    <div class="text-size6" style="display: flex; justify-content: center; margin-top: 15px;">
        <Button_1
          size="tiny2"
          color="color-beige"
          text_color="text-color-green"
          hover="dark-green"
          >
          Довериться судьбе
        </Button_1>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 20px;">
      <button style="color: rgb(153, 153, 152);">Сбросить фильтры</button>
    </div>
    </div>
  </div>
</template>

<style scoped>
.container12 {
  padding: 20px 20px 10px;
  width: 270px;
  height: 820px;
  border-radius: 25px;
  background-color: rgb(249, 233, 178);
}
.rectangle12 {
  width: 100px;
  height: 25px;
  background-color: white;
  border-radius: 25px;
}
.rectangle13 {
  width: 56px;
  height: 35px;
  background-color: white;
  border-radius: 25px;
}
.rectangle14 {
  width: 112px;
  height: 25px;
  background-color: white;
  border-radius: 25px;
}
.circle1 {
  width: 16px;
  height: 16px; 
  background-color: rgb(67, 85, 56);
  border-radius: 50%;
}
.horizontal-line {
  width: 188px;
  height: 3px;
  background-color: rgb(67, 85, 56);
}
.rectangle15 {
  width: 21px;
  height: 25px;
  background-color: rgb(67, 85, 56);
  border-radius: 5px;
}
.circle2 {
  width: 26px;
  height: 26px; 
  border-radius: 50%;
}
</style>

