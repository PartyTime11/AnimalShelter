<script setup>
import Button_1 from './Button_1.vue';
import { ref } from 'vue';

let phone = ref('');
let password = ref('');

import { useRouter } from 'vue-router';
const router = useRouter();

const lk = async() => {
  let query = `http://127.0.0.1:8000/api/login?phone=${phone.value}&password=${password.value}`;
  let response = await fetch(query, { method: "POST" });
  const json = await response.json(); 
  if (typeof json['error'] == "undefined") {
    const token_id = json.access_token;
    localStorage.setItem("token", token_id);
    router.push('lk');
  }
};
</script>

<template>
  <div style="display: flex; justify-content: center;">
    <div class="container100" style="margin-top: 50px; margin-bottom: 50px">
      <div>
        <div style="display: flex; justify-content: space-evenly; color: gray">
          <router-link to="/registration">
            <h2 class="first-text text-size3">
            Регистрация
          </h2>
          </router-link>
          <h2 class="first-text my-text text-size3">
            Вход
          </h2>
        </div>
        <div class="" style="margin: 10px 30px; text-align: center">
          <p class="second-text my-text text-set3" style="font-size: 13px; margin: 0">
            Войдите в свой личный кабинет, чтобы Вам было проще выбирать питомца.
          </p>
        </div>
        <div style="margin-top: 20px">
          <p class="rectangle41 first-text my-text" style="font-size: 15px; margin-top: 20px">
            Номер телефона
            <input 
              type="text" 
              v-model="phone" 
              placeholder="89136725342" 
              class="name-input second-text"
            />
          </p>
          <p class="rectangle41 first-text my-text" style="font-size: 15px; margin-top: 20px">
            Пароль
            <input 
              type="text" 
              v-model="password" 
              placeholder="Введите пароль" 
              class="name-input second-text"
            />
          </p>
        </div>
        <div class="rectangle43" style="text-align: left; display: flex; align-items: center">
          <input type="checkbox">
          <div>
            <p
              class="first-text my-text"
              style="font-size: 15px; margin-left: 20px"
            >
              Я согласен(а) с обработкой персональных данных
            </p>
          </div>
        </div>
        <div class="text-size2" style="display: flex; justify-content: center; margin-top: 20px;">
          <Button_1
            size="small"
            color="color-dark"
            text_color="text-color-white"
            hover="light"
            @click="lk"
            >
            Войти
          </Button_1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container100 {
  flex-wrap: wrap;
  margin-left: 20px;
  display: flex;
  border-radius: 30px;
  padding: 30px;
  margin-bottom: 30px;
  width: 570px;
  height: 520px;
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
