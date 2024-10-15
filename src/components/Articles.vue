<template>
  <div class="container3" style="margin-top: 50px">
    <div class="rectangle3" style="display: flex">
      <img src="/Homeless.jpg" alt="Homeless" class="img1" style="border-radius: 25px 0 0 25px" />
      <div style="text-align: center; margin-top: 60px; margin-left: 20px">
        <p class="second-text my-text text-set2 text-size2">
          Что делать, если вы нашли бездомное животное и хотите забрать его к себе?
        </p>
      </div>
    </div>
    <div class="rectangle3" style="display: flex; align-items: center">
      <img
        src="/Milk_puppy.webp"
        alt="Milk_puppy"
        class="img1"
        style="border-radius: 25px 0 0 25px"
      />
      <div style="text-align: center; margin-top: 10px; margin-left: 20px">
        <p class="second-text my-text text-set2 text-size2">
          Как часто нужно кормить котят и щенков?
        </p>
      </div>
    </div>
    <div class="rectangle3" style="display: flex; align-items: center">
      <img
        src="/White_puppy.jpg"
        alt="White_puppy"
        class="img1"
        style="border-radius: 25px 0 0 25px"
      />
      <div style="text-align: center; margin-top: 10px; margin-left: 20px">
        <p class="second-text my-text text-set2 text-size2">Что нужно купить для собаки?</p>
      </div>
    </div>
    <div class="rectangle3" style="display: flex; align-items: center">
      <img src="/Friend.jpg" alt="Friend" class="img1" style="border-radius: 25px 0 0 25px" />
      <div style="text-align: center; margin-top: 10px; margin-left: 20px">
        <p class="second-text my-text text-set2 text-size2">Правила передачи животных их приюта</p>
      </div>
    </div>
    <div class="rectangle3" style="display: flex; align-items: center">
      <img src="/Doctor.jpg" alt="Doctor" class="img1" style="border-radius: 25px 0 0 25px" />
      <div style="text-align: center; margin-top: 10px; margin-left: 20px">
        <p class="second-text my-text text-set2 text-size2">
          Какие прививки нужно делать собакам каждый год?
        </p>
      </div>
    </div>
    <div class="rectangle3" style="display: flex; align-items: center">
      <img src="/Hungry.jpg" alt="Hungry" class="img1" style="border-radius: 25px 0 0 25px" />
      <div style="text-align: center; margin-top: 10px; margin-left: 20px">
        <p class="second-text my-text text-set2 text-size2">
          Лучшие варианты корма для кошек и собак
        </p>
      </div>
    </div>
  </div>
  <div>
    <img
      src="/Left_circle.png"
      alt="Left_circle"
      class=""
      style="width: 500px; height: auto; float: left; margin-top: -190px"
    />
    <img
      src="/Right_circle2.png"
      alt="Right_circle2"
      class=""
      style="width: 384px; height: auto; float: right; margin-top: 150px"
    />
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
.text-size2 {
  font-size: 20px;
}
.rectangle3 {
  border-radius: 25px;
  /* padding: 10px; */
  margin-right: 40px;
  margin-bottom: 40px;
  width: 580px;
  height: 247px;

  background-color: white;
  text-align: right;
  padding-right: 25px;
  cursor: pointer;
  border: 1px solid rgb(100, 147, 102);
}
.container3 {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-set3 {
  margin-top: 5px;
  line-height: 1.2;
}
.img1 {
  width: 270px;
  height: 247px;
  object-fit: cover;
}
</style>
