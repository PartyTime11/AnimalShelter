<script setup>
import Header from './components/Header.vue'
import Button_1 from './components/Button_1.vue'
import Scroll from './components/Scroll.vue'
import Button_2 from './components/Button_2.vue'
import Six_comp from './components/Six_comp.vue'
import Button_3 from './components/Button_3.vue'
import Button_4 from './components/Button_4.vue'
import News from './components/News.vue'
import Articles from './components/Articles.vue'
import Request from './components/Request.vue'
import Members from './components/Members.vue'
import Button_5 from './components/Button_5.vue'
</script>

<template>
  <div class="m-auto h-screen">
    <Header />
    <ul class="px-28 py-20 my-text left-text text-with-border1">
      <li class="first-text text-size1 text-line-height1">
        <span>Самое время найти лучшего друга!</span>
      </li>
      <li class="second-text text-with-border2 text-indentation text-size2 text-line-height2">
        <span>Возьмите собаку или кошку из приюта «Девятая жизнь» бесплатно</span>
      </li>
    </ul>
    <img src="/Титул.png" alt="Титул" class="img-pozition" style="width: 650px; height: 450px" />
    <Button_1 />

    <ul class="first-text text-size3 my-text center-text">
      <li class="px-32" style="margin-top: 50px; margin-bottom: 40px">
        <span
          >Приют «Девятая жизнь» — это частный приют для бездомных животных в Омске, существующий с
          2020 года</span
        >
      </li>
      <li>
        <img
          src="/Flower.png"
          alt="Flower"
          class="px-28"
          style="width: 1500.61px; height: 93.25px"
        />
      </li>
      <li class="px-28" style="margin-top: 40px; margin-bottom: 70px">
        <span
          >В приюте вас ждут 500 верных собак и более 120 ласковых кошек. Вы очень нужны им,
          приходите скорее!
        </span>
      </li>
    </ul>

    <Scroll />
    <Button_2 />
    <div class="color px-28">
      <ul class="px-28">
        <li class="first-text text-size3 my-text" style="margin-bottom: 30px">
          <span>Как помочь приюту?</span>
        </li>
        <li>
          <span class="second-text my-text text-size4 text-line-height3 text-with-border3"
            >В нашем приюте для собак и кошек социализацией, уходом за животными, выгулом собак и
            поиском добрых и заботливых хозяев занимаются добровольцы-волонтёры, поэтому мы будем
            очень благодарны вам за помощь приюту</span
          >
          <img
            src="/Heart.png"
            alt="Heart"
            class="px-28"
            style="
              width: 480px;
              height: 280px;
              transform: rotate(25deg);
              margin-left: 860px;
              margin-top: -260px;
            "
          />
        </li>
      </ul>
      <Six_comp />
      <Button_3 />
    </div>

    <div>
      <ul class="container-center">
        <li class="my-text first-text text-size3 container-center" style="margin-top: 40px">
          <span>Новости приюта</span>
          <img
            src="/Wi-Fi.png"
            alt="Wi-Fi"
            class=""
            style="width: 30px; height: 30px; transform: rotate(45deg); margin-top: -30px"
          />
        </li>
      </ul>
      <News />
    </div>

    <div>
      <p class="first-text my-text text-size3 container-center">Полезные статьи</p>
      <Articles />
    </div>

    <div>
      <div class="color" style="margin-top: 830px; display: flex">
        <ul class="px-28">
          <li class="first-text text-size3 my-text" style="margin-top: 30px">
            <span>Большая благодарность всем, кто нам помогает!</span>
          </li>
          <li>
            <div style="width: 500px; height: auto">
              <img
                src="/Cat_heart.png"
                alt="Cat_heart"
                style="width: 100%; height: auto; margin-top: 290px"
              />
            </div>
          </li>
        </ul>
        <Request />
      </div>
      <div style="margin-left: 950px; margin-top: -220px; margin-bottom: 175px">
        <Button_4 />
      </div>
    </div>

    <div class="px-28">
      <ul style="">
        <li class="first-text my-text text-size3" style="margin-top: 60px">
          <span>Будем рады встрече с вами!</span>
        </li>
        <div style="display: flex; margin-top: 30px">
          <li class="second-text my-text text-size2">
            <span>
              Ниже будут указаны контакты наших волонтеров, если у вас остались<br />
              вопросы, то они с радостью ответят. Обратите внимание, что звонки<br />
              принимаются только в рабочее время с 9:00 до 18:00, г. Омск
            </span>
          </li>
          <div>
            <li class="text-size-2 my-text" style="margin-left: 100px">
              <span class="first-text">Адрес</span><br />
              <span class="second-text"
                >г. Омск<br />
                ул 9- Линия</span
              >
            </li>
          </div>
        </div>
      </ul>
    </div>
    <Members />

    <div class="color2">
      <div style="display: flex">
        <p class="second-text text-size2 px-28 text-set" style="color: white; margin-top: 50px">
          Благотворительный проект волонтёров<br />
          приюта для животных «Девятая жизнь»
        </p>
        <div class="second-text px-28 text-set" style="font-size: 16px; margin-left: 416px">
          <p style="color: white; margin-top: 50px">О ПРИЮТЕ</p>
          <p class="text-line-height3" style="color: white; margin-top: 20px">
            Наши собаки<br />Наши кошки<br />Контакты<br />О нас<br />Как помочь<br />FAQ
          </p>
        </div>
      </div>
      <div class="" style="margin-top: 30px; display: flex; justify-content: center">
        <div class="rectangle9" style="display: flex; align-items: center">
          <img
            src="/Loupe.png"
            alt="Loupe"
            style="width: 21px; height: 24px; object-fit: cover; margin-left: 5px"
          />
          <p class="second-text text-size2" style="color: rgb(153, 153, 153); margin-left: 20px">
            Введите ваш запрос
          </p>
        </div>
        <Button_5 />
      </div>
      <div class="px-28">
        <img src="/Line.png" alt="Line" style="width: 1200px; margin-top: 30px" />
      </div>
      <div class="px-28">
        <p
          class="second-text text-size2"
          style="color: white; margin-top: 60px; margin-bottom: 60px"
        >
          2020 — 2024 Девятая жизнь
        </p>
      </div>
    </div>
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

.left-text {
  text-align: left;
}
.right-text {
  text-align: right;
}
.center-text {
  text-align: center;
}

.text-size1 {
  font-size: 60px;
}
.text-size2 {
  font-size: 20px;
}
.text-size3 {
  font-size: 40px;
}
.text-size4 {
  font-size: 25px;
}

.text-with-border1 {
  border-right: 600px solid transparent;
  padding-right: 5px;
  display: inline-block;
}
.text-with-border2 {
  border-right: 250px solid transparent;
  padding-right: 5px;
  display: inline-block;
}
.text-with-border3 {
  border-right: 150px solid transparent;
  padding-right: 5px;
  display: inline-block;
}
.text-with-border4 {
  border-right: 540px solid transparent;
  padding-right: 5px;
  display: inline-block;
}

.text-line-height1 {
  line-height: 1.2;
}
.text-line-height2 {
  line-height: 1.9;
}
.text-line-height3 {
  line-height: 2;
}

.img-pozition {
  margin-left: 700px;
  margin-right: 112px;
  margin-top: -345px;
}

.text-indentation {
  margin-top: 40px;
}

.container-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.color {
  margin-top: 90px;
  background-color: rgb(249, 233, 178);
  padding: 20px;
}
.color2 {
  background-color: rgb(67, 85, 56);
  padding: 20px;
}

.rectangle9 {
  border-radius: 50px;
  padding: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 375px;
  height: 68px;
  background-color: rgb(255, 255, 255);
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  cursor: pointer;
}
</style>
