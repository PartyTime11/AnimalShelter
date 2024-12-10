<script setup>
import Button_1 from './Button_1.vue';

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
        <div class="rectangle12">
          <p class="second-text my-text text-size6 text-center">
            Кошка
          </p>
        </div>
        <div class="rectangle12">
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
        <div class="rectangle13" style="display: flex; justify-content: center; align-items: center;">
          <img
            src="/Size.png"
            alt="Size"
            style="width: 16px; height: 14px;"
          >
        </div>
        <div class="rectangle13" style="display: flex; justify-content: center; align-items: center;">
          <img
            src="/Size.png"
            alt="Size"
            style="width: 23px; height: 20px;"
          >
        </div>
        <div class="rectangle13" style="display: flex; justify-content: center; align-items: center;">
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
        <div class="rectangle14">
          <p class="second-text my-text text-size6 text-center">
            Спокойный
          </p>
        </div>
        <div class="rectangle14">
          <p class="second-text my-text text-size6 text-center">
            Активный
          </p>
        </div>
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Возраст</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px;">
        <div class="rectangle15" style="display: flex; justify-content: center; align-items: center; margin-left: 2px">
          <p class="second-text text-size6" style="color: white">0</p>
        </div>
        <div class="rectangle15" style="display: flex; justify-content: center; align-items: center; margin-right: 2px;">
          <p class="second-text text-size6" style="color: white">16</p>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 10px; justify-content: center; align-items: center">
        <div class="circle1" />
        <div class="horizontal-line" />
        <div class="circle1" />
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Пол питомца</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
        <div class="rectangle12">
          <p class="second-text my-text text-size6 text-center">
            Девочка
          </p>
        </div>
        <div class="rectangle12">
          <p class="second-text my-text text-size6 text-center">
            Мальчик
          </p>
        </div>
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Тип шерсти</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px">
        <div class="rectangle12">
          <p class="second-text my-text text-size6 text-center">
            Короткая
          </p>
        </div>
        <div class="rectangle12">
          <p class="second-text my-text text-size6 text-center">
            Длинная
          </p>
        </div>
      </div>
      <p class="first-text my-text text-size2 text-left" style="margin-top: 15px">Окрас</p>
      <div style="display: flex; justify-content: space-between; margin-top: 10px;">
        <div class="circle2" style="background-color: white;" />
        <div class="circle2" style="background-color: rgb(217, 217, 217);" />
        <div class="circle2" style="background-color: rgb(121, 72, 15);" />
        <div class="circle2" style="background-color: rgb(255, 173, 14);" />
        <div class="circle2" style="background-color: rgb(243, 212, 100);" />
        <div class="circle2" style="background-color: black;" />
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

