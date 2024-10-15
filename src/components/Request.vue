<template>
  <div class="container5" style="margin-top: 50px; margin-right: 121px; margin-bottom: 50px">
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
        <p class="rectangle5 first-text my-text" style="font-size: 15px">Ваше имя</p>
        <p class="rectangle5 first-text my-text" style="font-size: 15px; margin-top: 20px">
          Телефон
        </p>
        <p class="rectangle6 first-text my-text" style="font-size: 15px; margin-top: 20px">
          Описание задачи
        </p>
      </div>
      <div class="rectangle7" style="margin-top: 30px">
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
    </div>
    <Button_4 />
  </div>
</template>

<style>
.first-text {
  font-family: 'VAG World';
}
.second-text {
  font-family: 'KleinText';
}
.my-text {
  color: rgb(67, 85, 56);
}
.rectangle5 {
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
  display: flex;
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 30px;
  width: 1000px;
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
.text-set3 {
  margin-top: 5px;
  line-height: 2.5;
}
</style>
