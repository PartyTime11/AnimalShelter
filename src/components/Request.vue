<script setup>
import Button_1 from './Button_1.vue';
</script>

<template>
  <div class="color request" style="margin-top: 70px">
    <div class="top-section">
      <div class="text">
        <div class="first-text text-size3 my-text ord1" style="margin-top: 30px; max-width: 475px;">
          Большая благодарность всем, кто нам помогает!
        </div>
        <div class="ord2" style="width: 500px;">
          <img
            src="/Cat_heart.png"
            alt="Cat_heart"
            class="cat_heart"
          />
        </div>
        <div class="container5 ord3" style="margin-top: 50px; margin-bottom: 50px">
          <div>
            <h2 class="first-text my-text text-size3" style="text-align: center">
              Вы готовы нам помочь?
            </h2>
            <div class="" style="margin: 10px 30px; text-align: left">
              <p class="second-text my-text text-set3" style="font-size: 13px; margin: 0">
                Оставьте контактные данные и коротко напишите, чем нам поможете. Мы свяжемся с Вами,
                ответим на Ваши вопросы и расскажем.
              </p>
            </div>
            <div style="margin-top: 20px">
              <div class="rectangle5" style="font-size: 15px">
                <p class="first-text my-text">
                  Ваше имя
                </p>
                <input 
                  type="text" 
                  placeholder="Введите ваше имя" 
                  class="name-input"
                />
              </div>

              <div class="rectangle5" style="font-size: 15px; margin-top: 20px">
                <p class="first-text my-text">Телефон</p>
                <input 
                  type="text" 
                  placeholder="Введите ваш номер телефона" 
                  class="name-input"
                />
              </div>
              <div class="rectangle6" style="font-size: 15px; margin-top: 20px">
                <p class="first-text my-text">
                  Описание задачи
                </p>
                <input 
                  type="text" 
                  placeholder="Чем вы готовы нам помочь?" 
                  class="name-input"
                />
              </div>
            </div>
            <div class="rectangle7" style="margin-bottom: 10px; text-align: left; display: flex; align-items: center">
              <input type="checkbox">
              <div>
                <p
                  class="first-text my-text"
                  style="font-size: 15px; margin-left: 20px;"
                >
                  Я согласен(а) с обработкой персональных данных
                </p>
              </div>
            </div>
            <div class="text-size2" style="display: flex; justify-content: center">
              <Button_1
                size="small"
                color="color-dark"
                text_color="text-color-white"
                hover="light"
                >
                Помочь!
              </Button_1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cat_heart {
  width: 100%; 
  margin-top: 300px
}
.rectangle5 {
  border-radius: 35px;
  padding: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 449px;
  height: 75px;
  background-color: white;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  border: 1px solid rgb(217, 217, 217);
  cursor: pointer;
  margin: 0 auto;
}
.rectangle6 {
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
.rectangle7 {
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
.container5 {
  flex-wrap: wrap;
  float: right;
  margin-left: 20px;
  display: flex;
  border-radius: 30px;
  padding: 30px;
  margin-bottom: 30px;
  width: 570px;
  height: 690px;
  background-color: white;
  text-align: center;
  border: 20px solid rgb(67, 85, 56);
  padding-top: 7px;
}
.round {
  width: 12px;
  height: 12px;
  border: 0.1px solid rgb(217, 217, 217);
  background-color: white;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: inset 0 4px 6px rgba(84, 81, 81, 0.5);
}

.name-input {
  margin-top: 5px;
  width: 100%;
  font-size: 15px; 
}

.name-input:focus {
  border-color: white;
  outline: none;
}

.text-set3 {
  margin-top: 5px;
  line-height: 2.5;
}

.request {
  margin: 0px -121px 0px;
  padding: 0px 141px;
  margin-top: 90px;
  background-color: rgb(249, 233, 178);
  padding: 20px;
}
.request .top-section {
  display: flex;
  align-items: center;
  justify-content: center
}
.request .text {
  display: flex;
  flex-direction: column;
  height: 800px;
  flex-wrap: wrap;
}
.request .ord1 {
  order: 0;
}
.request .ord2 {
  order: 2;
}
.request .ord3 {
  order: 3;
}
@media screen and (max-width: 1200px) {
  .request .top-section {
    flex-wrap: wrap;
    justify-content: center;
  }
  .request .ord3 {
    order: 1;
  }
  .cat_heart {
    margin-top: 0px;
    display: flex;
    place-items: center;
  }
  .request .text {
    height: auto;
    align-items: center;
}
  .container5 {
    margin-left: 0px;
  }
}
@media (min-width: 1550px) and (max-width: 2000px) {
  .container5 {
    margin-left: 250px;
  }
}
@media screen and (max-width: 1294px) {
  .request {
    margin: 0px -41px 0px;
    padding: 0px 61px;
  }
}
</style>
