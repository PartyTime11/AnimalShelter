<script setup>
import Button_1 from './Button_1.vue';
import Filter from './Filter.vue';
import Help_2 from './Help_2.vue';
</script>

<template>
  <div style="margin-top: 40px">
    <p1 class="first-text my-text left-text text-size3" >Каталог собак и кошек из приюта</p1>
    <p class="second-text my-text left-text text-size5" style="margin-top: 30px; margin-bottom: 30px;">Выберите себе питомца по фильтрам на странице или доверьтесь судьбе, а кураторы познакомят вас лично и помогут в период адаптации дома.</p>
    <p class="second-text my-text left-text text-size5">Все животные привиты, стерилизованы, чипированы и отдаются бесплатно в добрые руки</p>
  </div>
  <div class="flex" style="display: flex; flex-direction: column;">
    <div class="center" style="display: flex; justify-content: center; gap: 40px">
      <div class="container11" style="margin-top: 60px">
        <div class="rectangle21">
          <img src="/Asya.jpg" alt="Asya" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Acя</h2>
          <p class="second-text my-text text-size2">4 месяца, девочка</p>
        </div>
        <div class="rectangle21">
          <img src="/Mikki.jpg" alt="Mikki" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Микки</h2>
          <p class="second-text my-text text-size2">3 года, мальчик</p>
        </div>
        <div class="rectangle21 hide">
          <img src="/Oskar.jpg" alt="Oskar" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Оскар</h2>
          <p class="second-text my-text text-size2">5 лет, мальчик</p>
        </div>
        <div class="rectangle21 hide2">
          <img src="/Yasha.jpeg" alt="Yasha" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Яша</h2>
          <p class="second-text my-text text-size2">6 лет, мальчик</p>
        </div>
        <div class="rectangle21 hide2">
          <img src="/Dim.jpg" alt="Dim" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Дим</h2>
          <p class="second-text my-text text-size2">8 лет, мальчик</p>
        </div>
        <div class="rectangle21 hide">
          <img src="/Dim.jpg" alt="Dim" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Дим</h2>
          <p class="second-text my-text text-size2">8 лет, мальчик</p>
        </div>
      </div>
      <Filter class="hide" />
    </div>
    <div class="center" style="display: flex; justify-content: center;">
      <div class="container12" style="margin-top: px">
        <div v-for="animal of result" class="rectangle21">
          <img :src="animal.image" alt="Asya" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">{{animal.name}}</h2>
          <p class="second-text my-text text-size2">4 месяца, девочка</p>
        </div>
        <div class="rectangle21">
          <img src="/Mikki.jpg" alt="Mikki" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Микки</h2>
          <p class="second-text my-text text-size2">3 года, мальчик</p>
        </div>
        <div class="rectangle21">
          <img src="/Oskar.jpg" alt="Oskar" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Оскар</h2>
          <p class="second-text my-text text-size2">5 лет, мальчик</p>
        </div>
        <div class="rectangle21">
          <img src="/Yasha.jpeg" alt="Yasha" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Яша</h2>
          <p class="second-text my-text text-size2">6 лет, мальчик</p>
        </div>
        <div class="rectangle21">
          <img src="/Dim.jpg" alt="Dim" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Дим</h2>
          <p class="second-text my-text text-size2">8 лет, мальчик</p>
        </div>
        <div class="rectangle21">
          <img src="/Dim.jpg" alt="Dim" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Дим</h2>
          <p class="second-text my-text text-size2">8 лет, мальчик</p>
        </div>
        <div class="rectangle21 hide">
          <img src="/Dim.jpg" alt="Dim" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Дим</h2>
          <p class="second-text my-text text-size2">8 лет, мальчик</p>
        </div>
        <div class="rectangle21 hide">
          <img src="/Dim.jpg" alt="Dim" class="img" />
          <h2 class="first-text my-text" style="font-size: 30px">Дим</h2>
          <p class="second-text my-text text-size2">8 лет, мальчик</p>
        </div>
      </div>
    </div>
    <div class="text-size2" style="display: flex; justify-content: center; margin-top: 40px">
        <Button_1
          size="medium"
          color="color-dark"
          text_color="text-color-white"
          hover="light-green"
          >
          Показать больше
        </Button_1>
    </div>
  </div>
  <Help_2 />
</template>

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

@media (min-width: 1000px) and (max-width: 1400px) {
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
}
</style>

