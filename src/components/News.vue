<template>
  <div class="new">
    <div class="container-center">
      <div class="my-text first-text text-size3 container-center" style="margin-top: 40px; position: relative;">
        <span>Новости приюта</span>
      </div>
      <div>
          <img
            src="/Wi-Fi.png"
            alt="Wi-Fi"
            class=""
            style="width: 30px; height: 30px; transform: rotate(45deg)"
        />
      </div>
    </div>
    <div class="outer-container" style="margin-top: 30px; margin-bottom: 30px">
      <div class="container4">
        <ul>
          <li class="first-text my-text text-size2">
            <span class="container-center" style="cursor: pointer"
              >ВЫСТАВКА БЕЗДОМНЫХ ЖИВОТНЫХ ПРИЮТА «ДЕВЯТАЯ ЖИЗНЬ»
            </span>
            <span class="container-center">. . . . . . . . . . . .</span>
            <span class="container-center">24.01.2025</span>
            <span class="container-center" style="margin-top: -10px">. . . . . . . . . . . .</span>
          </li>
          <li class="second-text my-text text-size2" style="margin-top: 20px">
            <span
              >24 января 2025 года, в преддверии дня изменения жизни питомца к лучшему, приглашаем вас
              на выставку бездомных животных приюта «Девятая жизнь»
            </span>
          </li>
          <li class="second-text my-text text-size2" style="margin-top: 30px">
            <span
              >В ТЦ МЕГА соберутся собачки и котики из нашего приюта. Все они здоровы, привиты,
              стерилизованы и ищут себе дом! Передача животных в семьи абсолютно бесплатна, но
              необходимо будет заключить договор, поэтому не забудьте взять с собой паспорт. Если у
              вас нет возможности забрать питомца домой, но вы хотите помочь, то это легко
              сделать:</span
            >
          </li>
          <li class="second-text my-text text-size2">
            <span
              >— можно принести подарки животным. Они будут рады корму, игрушкам, поводкам, ошейникам,
              мискам и лекарствам.
            </span>
          </li>
          <li class="second-text my-text text-size2">
            <span
              >— вы можете на самом мероприятии купить памятные сувениры. Все вырученные средства
              будут направлены на помощь бездомным животным.</span
            >
          </li>
          <li class="second-text my-text text-size2" style="margin-top: 30px">
            <span>Приходите, хвостатые друзья ждут именно Вас!</span>
          </li>
          <li class="second-text my-text text-size2 text-with-border4" style="margin-top: 30px">
            <span
              >24 января 2025 с 11 до 18 часов ТЦ МЕГА, г. Омск, ул. бул. Архитекторов, 35 Вход
              свободный</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div>
      <img
        src="/Right_circle.png"
        alt="Right_circle"
        style="width: 200px; height: 350px; position: absolute; right: 0; margin-top: -800px"
      />
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
.container4 {
  background-color: white;
  color: rgb(100, 147, 102);
  padding: 20px 30px;
  border: none;
  border-radius: 25px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  height: auto;
  flex-direction: column;
  border: 1px solid rgb(100, 147, 102);
}

.container4 ul {
  width: 100%;
}

.container-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.outer-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.text-with-border4 {
  border-right: 540px solid transparent;
  padding-right: 5px;
  display: inline-block;
}

.new {
  margin: 0px -121px 0;
  padding: 5px 141px;
}
</style>
