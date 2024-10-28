<template>
  <div class="container8 member" style="margin-top: 50px; gap: 60px">
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
.member {
  margin: 0px -41px 0px;
  padding: 0px 61px;
}
.member .top-section {
  display: flex;
  align-items: center;
}
.member .text {
  display: flex;
  flex-direction: column;
}
.member .rectangle8 {
  border-radius: 50px;
  width: 525px;
  height: 186px;
  background-color: white;
  text-align: left;
  border: 1px solid rgb(67, 85, 56);
  display: flex;
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
@media screen and (max-width: 1294px) {
  .member {
    margin: 0px -41px 0px;
    padding: 0px 61px;
  }
}
</style>
