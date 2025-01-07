<script setup>
import Button_1 from './Button_1.vue';
</script>

<template>
  <div class="color2 footer" style="margin-top: 70px;">
    <div class="container">
      <p class="second-text text-size2 text-set" style="color: white; margin-top: 50px">
        Благотворительный проект волонтёров<br />
        приюта для животных «Девятая жизнь»
      </p>
      <div class="second-text text-set" style="font-size: 16px; margin-left: auto;">
        <p style="color: white; margin-top: 50px">О ПРИЮТЕ</p>
        <p class="text-line-height3" style="color: white; margin-top: 20px">
          <router-link to="/lk">
            ЛК<br>
          </router-link>

          <router-link to="/useful_articles">
          Полезные статьи<br>
        </router-link>

          <router-link to="/catalogue">
          Каталог животных<br>
        </router-link>

          <router-link to="/contacts">
          Контакты<br>
          </router-link>

          <router-link to="/about_us">
          О нас<br>
        </router-link>

          <router-link to="/help">
          Как помочь
        </router-link>
        </p>
      </div>
    </div>
    <div style="margin-top: 50px; display: flex; justify-content: center">
      <div class="rectangle9" style="display: flex; align-items: center">
        <img
          src="/Loupe.png"
          alt="Loupe"
          style="width: 21px; height: 24px; object-fit: cover;"
        />
        <p style="margin-left: 20px">
          <input 
            type="text" 
            placeholder="Введите ваш запрос" 
            class="name-input2"
          />
        </p>
      </div>
      <div class="text-size2">
        <Button_1
          size="tiny"
          color="color-light"
          text_color="text-color-green"
          hover="dark"
          >
          Искать
        </Button_1>
      </div>
    </div>
    <div>
      <img src="/Line.png" alt="Line" style="width: auto; margin-top: 20px" />
    </div>
    <div>
      <p
        class="second-text text-size2"
        style="color: white; margin-top: 30px; padding-bottom: 30px"
      >
        2020 — 2024 Девятая жизнь
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: auto;
}
.footer {
  margin: 0px -121px 0;
  padding: 0px 141px;
}
.rectangle9 {
  border-radius: 50px;
  padding: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 375px;
  height: 61px;
  background-color: rgb(255, 255, 255);
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  cursor: pointer;
}
.name-input2 {
  margin-top: 5px;
  width: 100%;
  font-size: 20px; 
}

.name-input2:focus {
  border-color: white;
  outline: none;
}
@media screen and (max-width: 1294px) {
  .footer {
    margin: 0px -41px 0px;
    padding: 0px 61px;
  }
}
</style>
