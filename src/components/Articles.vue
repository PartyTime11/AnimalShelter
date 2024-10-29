<script setup>
import Button_1 from './Button_1.vue';
</script>

<template>
  <div class="article">
    <div class="top-section">
      <div class="text">
        <p class="first-text my-text text-size3">Полезные статьи</p>
      </div>
    </div>
    <div class="container3" style="margin-top: 50px; gap: 55px">
      <div class="rectangle3" style="display: flex">
        <img src="/Homeless.jpg" 
        alt="Homeless" class="img1" style="border-radius: 25px 0 0 25px" />
        <div style="text-align: center; margin-top: 10px; margin-left: 20px">
          <p class="second-text my-text text-set2 text-size2">
            Что делать, если вы нашли бездомное животное и хотите забрать его к себе?
          </p>
        </div>
      </div>
      <div class="rectangle3">
        <img
          src="/Milk_puppy.webp"
          alt="Milk_puppy"
          class="img1"
          style="border-radius: 25px 0 0 25px"
        />
        <div style="text-align: center; margin-top: 10px; margin-left: 20px">
          <p class="second-text my-text text-set2 text-size2">
            Как часто нужно кормить котят и щенков?
          </p>
        </div>
      </div>
      <div class="rectangle3">
        <img
          src="/White_puppy.jpg"
          alt="White_puppy"
          class="img1"
          style="border-radius: 25px 0 0 25px"
        />
        <div style="text-align: center; margin-top: 10px; margin-left: 20px">
          <p class="second-text my-text text-set2 text-size2">Что нужно купить для собаки?</p>
        </div>
      </div>
      <div class="rectangle3 div-to-hide">
        <img src="/Friend.jpg" alt="Friend" class="img1" style="border-radius: 25px 0 0 25px" />
        <div style="text-align: center; margin-top: 10px; margin-left: 20px">
          <p class="second-text my-text text-set2 text-size2">Правила передачи животных их приюта</p>
        </div>
      </div>
      <div class="rectangle3 div-to-hide">
        <img src="/Doctor.jpg" alt="Doctor" class="img1" style="border-radius: 25px 0 0 25px" />
        <div style="text-align: center; margin-top: 10px; margin-left: 20px">
          <p class="second-text my-text text-set2 text-size2">
            Какие прививки нужно делать собакам каждый год?
          </p>
        </div>
      </div>
      <div class="rectangle3 div-to-hide">
        <img src="/Hungry.jpg" alt="Hungry" class="img1" style="border-radius: 25px 0 0 25px" />
        <div style="text-align: center; margin-top: 10px; margin-left: 20px">
          <p class="second-text my-text text-set2 text-size2">
            Лучшие варианты корма для кошек и собак
          </p>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 50px;">
    <Button_1
      size="medium2"
      color="color-dark"
      text_color="text-color-white"
      hover="light"
      >
      Смотреть все статьи
    </Button_1>
  </div>
  </div>
</template>

<style>

.rectangle3 {
  border-radius: 25px;
  width: 520px;
  height: 247px;

  background-color: white;
  text-align: right;
  padding-right: 15px;
  cursor: pointer;
  border: 1px solid rgb(100, 147, 102);
  display: flex; 
  align-items: center
}
.div-to-hide {
  display: flex;
}
@media (max-width: 1377px) {
  .div-to-hide {
    display: none; 
  }
}
.article .container3 {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-set3 {
  margin-top: 5px;
  line-height: 1.2;
}
.img1 {
  width: 270px;
  height: 247px;
  object-fit: cover;
}

.article {
  margin: 0px -121px 0px;
  padding: 0px 141px;
}
.article .top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.article .text {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 1294px) {
  .article {
    margin: 0px -41px 0px;
    padding: 0px 61px;
  }
}
</style>
