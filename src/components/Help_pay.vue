<script setup></script>

<template>
  <div class="center first-text my-text text-size3" style="margin-top: 40px">
    <p style="text-align: center;">Даже маленькая сумма приносит пользу.</p>
    <p style="text-align: center;">Сделайте жизнь животных немного лучше!</p>
  </div>
  <div class="column" style="display: flex; justify-content: space-around; margin-top: 50px">
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      "
    >
      <div class="container31">
        <p
          class="first-text my-text"
          style="font-size: 30px; margin-bottom: 10px; margin-top: 20px; text-align: center"
        >
          Реквизиты для помощи
        </p>
        <div style="display: flex; justify-content: space-evenly">
          <div>
            <p
              class="first-text my-text"
              style="font-size: 30px; margin-bottom: 15px; text-align: center"
            >
              Сбербанк
            </p>
            <p class="second-text my-text text-size2">2202 7382 0320 1246</p>
            <p class="second-text my-text text-size2">Анастасия Дмитриевна</p>
          </div>
          <div>
            <p
              class="first-text my-text"
              style="font-size: 30px; margin-bottom: 15px; text-align: center"
            >
              Т-Банк
            </p>
            <p class="second-text my-text text-size2">5536 7332 5320 9186</p>
            <p class="second-text my-text text-size2">Евдокия Сергеевна</p>
          </div>
        </div>
      </div>
      <div>
        <img src="/Heart.png" alt="Heart" style="width: 300px; margin-top: 30px" />
      </div>
    </div>
  </div>
  <div class="help_pay color">
    <div>
      <div>
        <p class="center_text first-text my-text text-size3" style="margin-bottom: 40px">
          Как можно помочь приюту для животных?
        </p>
      </div>
      <div class="container32">
        <div class="rectangle32">
          <img
            src="/Dog_sick.jpeg"
            alt="Dog_sick"
            class="img32"
            style="border-radius: 25px 0 0 25px"
          />
          <div style="margin-top: 10px; margin-left: 20px; margin-right: 20px">
            <p
              class="first-text my-text text-size2"
              style="text-align: center; margin-top: 20px; margin-bottom: 10px"
            >
              Срочная помощь
            </p>
            <p class="second-text my-text text-size6" style="text-align: left">
              Некоторые наши подопечные нуждаются в срочном лечении или операции, для которого
              необходимо оперативно собрать деньги. Подробнее об этих животных можно узнать, написав
              нашим волонтёрам.
            </p>
          </div>
        </div>
        <div class="rectangle32">
          <img
            src="/Dog_walk.jpg"
            alt="Dog_walk"
            class="img32"
            style="border-radius: 25px 0 0 25px"
          />
          <div style="margin-top: 10px; margin-left: 20px; margin-right: 20px">
            <p
              class="first-text my-text text-size2"
              style="text-align: center; margin-top: 20px; margin-bottom: 10px"
            >
              Стать волонтёром
            </p>
            <p class="second-text my-text text-size6" style="text-align: left">
              Волонтёр приезжает в приют один или несколько раз в неделю, общается, гуляет с
              животными и ищет им семьи. Если вы хотите попробовать себя в этой роли, напишите и мы
              расскажем, как присоединиться к команде и делать мир лучше.
            </p>
          </div>
        </div>
        <div class="rectangle32">
          <img
            src="/Dog_eat.jpg.jpg"
            alt="Dog_eat"
            class="img32"
            style="border-radius: 25px 0 0 25px"
          />
          <div style="margin-top: 10px; margin-left: 20px; margin-right: 20px">
            <p
              class="first-text my-text text-size2"
              style="text-align: center; margin-top: 20px; margin-bottom: 10px"
            >
              Привезти корм и вещи
            </p>
            <p class="second-text my-text text-size6" style="text-align: left">
              Животные нуждаются в лечебном корме (при аллергиях, болезни жкт, почек и др.), будут
              рады лакомствам из зоомагазина, больше всего подойдут вяленое мясо и субпродукты.
              Привезти подарки можно в любой день, заранее договорившись о встрече.
            </p>
          </div>
        </div>
        <div class="rectangle32">
          <img
            src="/Dog_friend.jpg"
            alt="Dog_friend"
            class="img32"
            style="border-radius: 25px 0 0 25px"
          />
          <div style="margin-top: 10px; margin-left: 20px; margin-right: 20px">
            <p
              class="first-text my-text text-size2"
              style="text-align: center; margin-top: 20px; margin-bottom: 10px"
            >
              Помочь делом
            </p>
            <p class="second-text my-text text-size6" style="text-align: left">
              Нам требуются люди, которые помогут отвезти животное в новый дом или клинику,
              прибраться в вольерах, утеплить их в зимний сезон и повесить теневые сетки в летний,
              сделать фотографии собак и кошек или написать пиарный текст для анкет.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container30 {
  width: 500px;
  height: 892px;
  border-radius: 25px;
  border: 1px solid rgb(100, 147, 102);
}
.container31 {
  width: 580px;
  height: 272px;
  border-radius: 25px;
  border: 1px solid rgb(100, 147, 102);
  display: flex;
  flex-direction: column;
}
.help_pay {
  margin: 50px -121px 0;
  padding: 45px 141px;
}
.container32 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px 40px;
  justify-items: center;
  align-items: center;
}
.rectangle32 {
  width: 580px;
  height: 290px;
  background-color: white;
  border-radius: 25px;
  display: flex;
}
.img32 {
  width: 262px;
  height: 290px;
  object-fit: cover;
}

@media screen and (max-width: 1294px) {
  .help_pay {
    margin: 30px -41px 0px;
    padding: 40px 61px;
  }
}
@media screen and (max-width: 1360px) {
  .column {
    flex-direction: column;
    align-items: center;
  }
  .container30 {
    width: 600px;
  }
  .container31 {
    display: flex;
    flex-direction: none;
    margin-top: 40px;
  }
}
@media screen and (max-width: 1420px) {
  .container32 {
    grid-template-columns: repeat(1, 1fr);
  }
  .center_text {
    text-align: center;
  }
  .center {
    text-align: center;
  }
}

</style>
