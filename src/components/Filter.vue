<script setup>
import Button_1 from './Button_1.vue';

const props = defineProps(['animals_json']);
const emit = defineEmits(['filter']);

let animals_filter_url = 'http://127.0.0.1:8000/api/animals/filter/';
let kind_of_animal = ref('');
let size = ref('');
let temper = ref('');
let age_range = ref('');
let gender = ref('');
let type_of_fur = ref('');
let colour = ref('');

let random = ref('');

import { ref, useTemplateRef } from 'vue';
const catFilterInput = useTemplateRef('cat-filter');
const dogFilterInput = useTemplateRef('dog-filter');
const catDog = [catFilterInput, dogFilterInput];

const smallFilterInput = useTemplateRef('small-filter');
const middleFilterInput = useTemplateRef('middle-filter');
const bigFilterInput = useTemplateRef('big-filter');
const sizes = [smallFilterInput, middleFilterInput, bigFilterInput];

const calmFilterInput = useTemplateRef('calm-filter');
const activeFilterInput = useTemplateRef('active-filter');
const characters = [calmFilterInput, activeFilterInput];

const youngFilterInput = useTemplateRef('young-filter');
const middle_ageFilterInput = useTemplateRef('middle_age-filter');
const oldFilterInput = useTemplateRef('old-filter');
const ages = [youngFilterInput, middle_ageFilterInput, oldFilterInput];

const femaleFilterInput = useTemplateRef('female-filter');
const maleFilterInput = useTemplateRef('male-filter');
const genders = [femaleFilterInput, maleFilterInput];

const shortFilterInput = useTemplateRef('short-filter');
const longFilterInput = useTemplateRef('long-filter');
const wools = [shortFilterInput, longFilterInput];

const whiteFilterInput = useTemplateRef('white-filter');
const grayFilterInput = useTemplateRef('gray-filter');
const brownFilterInput = useTemplateRef('brown-filter');
const redFilterInput = useTemplateRef('red-filter');
const blondFilterInput = useTemplateRef('blond-filter');
const blackFilterInput = useTemplateRef('black-filter');
const colours = [
  whiteFilterInput,
  grayFilterInput,
  brownFilterInput,
  redFilterInput,
  blondFilterInput,
  blackFilterInput
];

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

const resetFilters = () => {
  const allFilters = [catDog, sizes, characters, ages, genders, wools, colours];

  for (let i = 0; i < allFilters.length; i++) {
    const filterGroup = allFilters[i];

    for (let j = 0; j < filterGroup.length; j++) {
      const filter = filterGroup[j];
      filter.value.classList.remove('clicked');
    }
  }
  kind_of_animal.value = '';
  size.value = '';
  temper.value = '';
  age_range.value = '';
  gender.value = '';
  type_of_fur.value = '';
  colour.value = '';
};

const applyFilter = async () => {
  const url_kind_of_animal = kind_of_animal.value && `kind_of_animal=${kind_of_animal.value}`;
  const url_gender = gender.value && `gender=${gender.value}`;
  const url_age_range = age_range.value && `age_range=${age_range.value}`;
  const url_type_of_fur = type_of_fur.value && `type_of_fur=${type_of_fur.value}`;
  const url_colour = colour.value && `colour=${colour.value}`;
  const url_size = size.value && `size=${size.value}`;
  const url_temper = temper.value && `temper=${temper.value}`;

  const query = `${animals_filter_url}?${url_kind_of_animal}&${url_gender}&${url_age_range}&${url_type_of_fur}&${url_colour}&${url_size}&${url_temper}`;

  let response = '';
  if (localStorage.getItem('token')) {
    const params = new URLSearchParams({
      user_token: localStorage.getItem('token')
    });
    response = await fetch(`${animals_filter_url}?${url_kind_of_animal}&${url_gender}&${url_age_range}&${url_type_of_fur}&${url_colour}&${url_size}&${url_temper}&${params.toString()}`);
  } else {
    response = await fetch(query);
  }
  const animals_json = await response.json();

  if ( Array.isArray(animals_json) && animals_json.length == 0) {
    emit('filter', []);
  } else {
    emit('filter', animals_json);
  }
};

const randomFilter = async () => {
  random = ref('true');
  const query = animals_filter_url + '?random=' + random.value;
  let response = await fetch(query);
  const animals_json = await response.json();
  emit('filter', [animals_json]);
};
</script>

<template>
  <div style="display: flex; flex-direction: column; margin-top: 60px; margin-left: 0px; float: right;">
    <div class="container12" style="display: flex; flex-direction: column">
      <p class="first-text my-text text-size2 text-left">Кого вы ищете?</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
        <div
          ref="cat-filter"
          class="button rectangle12"
          @click="
            () => {
              toggleColor(catDog, [1, 0])
              kind_of_animal = 'cat'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">Кошка</p>
        </div>
        <div
          ref="dog-filter"
          class="button rectangle12"
          @click="
            () => {
              toggleColor(catDog, [0, 1])
              kind_of_animal = 'dog'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">Собака</p>
        </div>
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Размер</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
        <div
          ref="small-filter"
          class="rectangle13"
          style="display: flex; justify-content: center; align-items: center"
          @click="
            () => {
              toggleColor(sizes, [1, 0, 0])
              size = 'small'
            }
          "
          >
          <img src="/Size.png" alt="Size" style="width: 16px; height: 14px" />
        </div>
        <div
          ref="middle-filter"
          class="rectangle13"
          style="display: flex; justify-content: center; align-items: center"
          @click="
            () => {
              toggleColor(sizes, [0, 1, 0])
              size = 'middle'
            }
          "
          >
          <img src="/Size.png" alt="Size" style="width: 23px; height: 20px" />
        </div>
        <div
          ref="big-filter"
          class="rectangle13"
          style="display: flex; justify-content: center; align-items: center"
          @click="
            () => {
              toggleColor(sizes, [0, 0, 1])
              size = 'big'
            }
          "
          >
          <img src="/Size.png" alt="Size" style="width: 31px; height: 26px" />
        </div>
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Характер</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
        <div
          ref="calm-filter"
          class="rectangle14"
          @click="
            () => {
              toggleColor(characters, [1, 0])
              temper = 'calm'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">Спокойный</p>
        </div>
        <div
          ref="active-filter"
          class="rectangle14"
          @click="
            () => {
              toggleColor(characters, [0, 1])
              temper = 'active'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">Активный</p>
        </div>
      </div>

      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Возраст</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
        <div
          ref="young-filter"
          class="rectangle16"
          style="display: flex; justify-content: center; align-items: center"
          @click="
            () => {
              toggleColor(ages, [1, 0, 0])
              age_range = '0-5'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">0-5</p>
        </div>
        <div
          ref="middle_age-filter"
          class="rectangle16"
          style="display: flex; justify-content: center; align-items: center"
          @click="
            () => {
              toggleColor(ages, [0, 1, 0])
              age_range = '5-10'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">5-10</p>
        </div>
        <div
          ref="old-filter"
          class="rectangle16"
          style="display: flex; justify-content: center; align-items: center"
          @click="
            () => {
              toggleColor(ages, [0, 0, 1])
              age_range = '10-15'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">10-15</p>
        </div>
      </div>

      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Пол питомца</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
        <div
          ref="female-filter"
          class="rectangle12"
          @click="
            () => {
              toggleColor(genders, [1, 0])
              gender = 'девочка'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">Девочка</p>
        </div>
        <div
          ref="male-filter"
          class="rectangle12"
          @click="
            () => {
              toggleColor(genders, [0, 1])
              gender = 'мальчик'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">Мальчик</p>
        </div>
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Тип шерсти</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
        <div
          ref="short-filter"
          class="rectangle12"
          @click="
            () => {
              toggleColor(wools, [1, 0])
              type_of_fur = 'short'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">Короткая</p>
        </div>
        <div
          ref="long-filter"
          class="rectangle12"
          @click="
            () => {
              toggleColor(wools, [0, 1])
              type_of_fur = 'long'
            }
          "
        >
          <p class="second-text my-text text-size6 text-center">Длинная</p>
        </div>
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Окрас</p>
      <div style="display: flex; justify-content: space-between; margin-top: 10px">
        <div
          ref="white-filter"
          class="circle2"
          style="background-color: white"
          @click="
            () => {
              toggleColor(colours, [1, 0, 0, 0, 0, 0])
              colour = 'white'
            }
          "
        />
        <div
          ref="gray-filter"
          class="circle2"
          style="background-color: rgb(217, 217, 217)"
          @click="
            () => {
              toggleColor(colours, [0, 1, 0, 0, 0, 0])
              colour = 'grey'
            }
          "
        />
        <div
          ref="brown-filter"
          class="circle2"
          style="background-color: rgb(121, 72, 15)"
          @click="
            () => {
              toggleColor(colours, [0, 0, 1, 0, 0, 0])
              colour = 'brown'
            }
          "
        />
        <div
          ref="red-filter"
          class="circle2"
          style="background-color: rgb(255, 173, 14)"
          @click="
            () => {
              toggleColor(colours, [0, 0, 0, 1, 0, 0])
              colour = 'ginger'
            }
          "
        />
        <div
          ref="blond-filter"
          class="circle2"
          style="background-color: rgb(243, 212, 100)"
          @click="
            () => {
              toggleColor(colours, [0, 0, 0, 0, 1, 0])
              colour = 'beige'
            }
          "
        />
        <div
          ref="black-filter"
          class="circle2"
          style="background-color: black"
          @click="
            () => {
              toggleColor(colours, [0, 0, 0, 0, 0, 1])
              colour = 'black'
            }
          "
        />
      </div>
      <div class="text-size6" style="display: flex; justify-content: center; margin-top: 30px">
        <Button_1
          size="tiny2"
          color="color-dark"
          text_color="text-color-white"
          hover="dark-green"
          @click="applyFilter"
          >
          Найти по фильтрам 
        </Button_1>
    </div>
      <div class="text-size6" style="display: flex; justify-content: center; margin-top: 15px">
        <Button_1
          size="tiny2"
          color="color-beige"
          text_color="text-color-green"
          hover="dark-green"
          @click="randomFilter"
          >
          Довериться судьбе
        </Button_1>
    </div>
      <div style="display: flex; justify-content: center; margin-top: 20px">
        <button style="color: rgb(153, 153, 152)" @click="resetFilters">Сбросить фильтры</button>
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
  cursor: pointer;
  user-select: none;
}

.rectangle13.clicked {
  background-color: #ffb240;
}
.rectangle16.clicked {
  background-color: #ffb240;
}
.rectangle12.clicked {
  background-color: #ffb240;
}
.rectangle14.clicked {
  background-color: #ffb240;
}
.circle2.clicked::after {
  content: '✓';
  color: green;
  font-size: 24px;
  font-weight: bold;
}

.rectangle13 {
  width: 56px;
  height: 35px;
  background-color: white;
  border-radius: 25px;
  cursor: pointer;
  user-select: none;
}
.rectangle16 {
  width: 70px;
  height: 40px;
  background-color: white;
  border-radius: 25px;
  cursor: pointer;
  user-select: none;
}
.rectangle14 {
  width: 112px;
  height: 25px;
  background-color: white;
  border-radius: 25px;
  cursor: pointer;
  user-select: none;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
