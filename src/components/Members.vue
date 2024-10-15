<template>
  <div class="container8" style="margin-top: 50px">
    <div class="rectangle8">
      <img src="/Evdokia_monkey.jpg" alt="Evdokia_monkey" class="img2" style="margin-right: 10px" />
      <div style="margin-left: 30px; margin-top: 20px">
        <h2 class="first-text my-text" style="font-size: 25px">Евдокия</h2>
        <p class="second-text my-text text-size2" style="cursor: pointer">+7 913 689 92 73</p>
        <img
          src="/Tg.png"
          alt="Tg"
          style="width: 64px; height: 64px; margin-top: 10px; cursor: pointer"
        />
      </div>
      <div>
        <img
          src="/Banana.png"
          alt="Banana"
          style="width: 100px; margin-top: 20px; margin-left: 35px"
        />
      </div>
    </div>
    <div class="rectangle8">
      <img src="/Asya_monkey.jpg" alt="Asya_monkey" class="img3" style="margin-right: 10px" />
      <div style="margin-left: 30px; margin-top: 20px">
        <h2 class="first-text my-text" style="font-size: 25px">Настя</h2>
        <p class="second-text my-text text-size2" style="cursor: pointer">+7 913 725 64 17</p>
        <img
          src="/Tg.png"
          alt="Tg"
          style="width: 64px; height: 64px; margin-top: 10px; cursor: pointer"
        />
      </div>
      <div>
        <img
          src="/Banana.png"
          alt="Banana"
          style="width: 100px; margin-top: 20px; margin-left: 40px"
        />
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
.rectangle8 {
  border-radius: 50px;
  /* padding: 10px; */
  margin-right: 80px;
  margin-bottom: 70px;
  width: 525px;
  height: 186px;
  background-color: white;
  text-align: left;
  /* padding-left: 25px; */
  /* padding-right: 25px; */
  /* padding-top: 7px; */
  border: 1px solid rgb(67, 85, 56);
  display: flex;
  /* align-items: center; */
}
.container8 {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-set {
  margin-top: 5px;
  line-height: 1.2;
}
.img2 {
  width: 172px;
  height: 186px;
  border-radius: 50px 0px 0px 50px;
  object-fit: cover;
}
.img3 {
  width: 172px;
  height: 186px;
  border-radius: 50px 0px 0px 50px;
  object-fit: cover;
}
</style>
