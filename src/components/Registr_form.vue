<script setup>
import Button_1 from './Button_1.vue';
</script>

<template>
  <div style="display: flex; justify-content: center;">
    <div class="container40" style="margin-top: 50px; margin-bottom: 50px">
      <div>
        <div style="display: flex; justify-content: space-evenly;">
          <h2 class="first-text my-text text-size3">
            Регистрация
          </h2>
          <router-link to="/enter">
            <h2 class="first-text my-text text-size3" style="color: gray;">
              Вход
            </h2>
          </router-link>
        </div>
        <div class="" style="margin: 10px 30px; text-align: center">
          <p class="second-text my-text text-set3" style="font-size: 13px; margin: 0">
            Создайте свой личный кабинет, чтобы Вам было проще выбирать питомца.
          </p>
        </div>
        <div style="margin-top: 20px">
          <p class="rectangle41 first-text my-text" style="font-size: 15px;">Ваше имя</p>
          <p class="rectangle41 first-text my-text" style="font-size: 15px; margin-top: 20px">
            Телефон
          </p>
        </div>
        <div class="rectangle43" style="margin-top: 30px">
          <div style="cursor: pointer">
            <p class="round" />
          </div>
          <div style="text-align: left">
            <p
              class="first-text my-text"
              style="font-size: 15px; margin-left: 20px; margin-top: -19px"
            >
              Я согласен(а) с обработкой персональных данных
            </p>
          </div>
        </div>
        <router-link to="/enter">
          <div class="text-size2" style="display: flex; justify-content: center">
            <Button_1
              size="medium"
              color="color-dark"
              text_color="text-color-white"
              hover="light"
              >
              Создать аккаунт
            </Button_1>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container40 {
  flex-wrap: wrap;
  margin-left: 20px;
  display: flex;
  border-radius: 30px;
  padding: 30px;
  margin-bottom: 30px;
  width: 570px;
  height: 540px;
  background-color: white;
  text-align: center;
  border: 5px solid rgb(67, 85, 56);
  padding-top: 7px;
}
.rectangle41 {
  border-radius: 35px;
  padding: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 449px;
  height: 67px;
  background-color: white;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  border: 1px solid rgb(217, 217, 217);
  cursor: pointer;
  margin: 0 auto;
}
.rectangle42 {
  border-radius: 20px;
  padding: 10px;
  margin-right: 30px;
  margin-top: 30px;
  width: 449px;
  height: 95px;
  background-color: white;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  border: 1px solid rgb(217, 217, 217);
  cursor: pointer;
  margin: 0 auto;
}
.rectangle43 {
  border-radius: 35px;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 449px;
  height: 67px;
  background-color: white;
  text-align: right;
  padding-top: 7px;
  margin: 0 auto;
}
</style>
