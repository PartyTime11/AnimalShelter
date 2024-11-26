<template>
  <div
    class="container1"
    style="margin-top: 50px"
  >
    <div class="rectangle1">
      <h2
        class="first-text my-text"
        style="font-size: 22px"
      >
        Стать волонтёром
      </h2>
      <p
        class="second-text my-text text-set"
        style="font-size: 15px"
      >
        Волонтеры приезжают в приют минимум раз в неделю и помогают на постоянной основе
      </p>
    </div>
    <div class="rectangle1">
      <h2
        class="first-text my-text"
        style="font-size: 22px"
      >
        Погулять с животными
      </h2>
      <p
        class="second-text my-text text-set"
        style="font-size: 15px"
      >
        Собаки и котики очень скучают по общению с человеком и ждут встречи с вами
      </p>
    </div>
    <div class="rectangle1">
      <h2
        class="first-text my-text"
        style="font-size: 22px"
      >
        Взять на предержку
      </h2>
      <p
        class="second-text my-text text-set"
        style="font-size: 15px"
      >
        Животные будут рады временному дому, они очень ждут вас!
      </p>
    </div>
    <div class="rectangle1 hide">
      <h2
        class="first-text my-text"
        style="font-size: 22px"
      >
        Помочь с лечением
      </h2>
      <p
        class="second-text my-text text-set"
        style="font-size: 15px"
      >
        Иногда наши животные нуждаются в оплате ветеринарных услуг: прививки, операции, терапия
      </p>
    </div>
    <div class="rectangle1 hide">
      <h2
        class="first-text my-text"
        style="font-size: 22px"
      >
        Привезти корм
      </h2>
      <p
        class="second-text my-text text-set"
        style="font-size: 15px"
      >
        В нашем приюте очень много животных, вы очень поможете нам, если привезёте корм
      </p>
    </div>
    <div class="rectangle1 hide">
      <h2
        class="first-text my-text"
        style="font-size: 22px"
      >
        Привезти игрушки
      </h2>
      <p
        class="second-text my-text text-set"
        style="font-size: 15px"
      >
        Животным крайне важно играть, это поможет их скорейшей социализации
      </p>
    </div>
  </div>
</template>

<style scoped>
.rectangle1 {
  border-radius: 35px;
  margin: 0 auto;
  max-width: 365px;
  padding: 7px 25px 10px;
  height: 122px;
  background-color: white;
  text-align: left;
  cursor: pointer;
}
.container1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px 53px;
}

@media screen and (max-width: 1400px) {
  .container1 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 1000px) {
  .container1 {
    grid-template-columns: repeat(1, 1fr);
  }
  .hide {
    display: none;
  }
}

.text-set {
  margin-top: 5px;
  line-height: 1.2;
}
</style>
