<template>
  <div class="container1" style="margin-top: 50px">
    <div class="rectangle1">
      <h2 class="first-text my-text" style="font-size: 22px">Стать волонтёром</h2>
      <p class="second-text my-text text-set" style="font-size: 15px">
        Волонтеры приезжают в приют минимум раз в неделю и помогают на постоянной основе
      </p>
    </div>
    <div class="rectangle1">
      <h2 class="first-text my-text" style="font-size: 22px">Погулять с животными</h2>
      <p class="second-text my-text text-set" style="font-size: 15px">
        Собаки и котики очень скучают по общению с человеком и ждут встречи с вами
      </p>
    </div>
    <div class="rectangle1">
      <h2 class="first-text my-text" style="font-size: 22px">Взять на предержку</h2>
      <p class="second-text my-text text-set" style="font-size: 15px">
        Животные будут рады временному дому, они очень ждут вас!
      </p>
    </div>
    <div class="rectangle1">
      <h2 class="first-text my-text" style="font-size: 22px">Помочь с лечением</h2>
      <p class="second-text my-text text-set" style="font-size: 15px">
        Иногда наши животные нуждаются в оплате ветеринарных услуг: прививки, операции, терапия
      </p>
    </div>
    <div class="rectangle1">
      <h2 class="first-text my-text" style="font-size: 22px">Привезти корм</h2>
      <p class="second-text my-text text-set" style="font-size: 15px">
        В нашем приюте очень много животных, вы очень поможете нам, если привезёте корм
      </p>
    </div>
    <div class="rectangle1">
      <h2 class="first-text my-text" style="font-size: 22px">Привезти игрушки</h2>
      <p class="second-text my-text text-set" style="font-size: 15px">
        Животным крайне важно играть, это поможет их скорейшей социализации
      </p>
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
.rectangle1 {
  border-radius: 35px;
  padding: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
  max-width: 365px;
  height: 122px;
  background-color: white;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  cursor: pointer;
}
.container1 {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-set {
  margin-top: 5px;
  line-height: 1.2;
}
</style>
