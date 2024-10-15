<template>
  <!-- <div class="scroll-container">
    <button id="image-button">
      <img
        src="/Left.png"
        alt="Left"
        class="cursor-pointer pozition-left"
        style="width: 69px; height: 89px"
      >
    </button>
    <button class="image-button">
      <img
        src="/Right.png"
        alt="Right"
        class="cursor-pointer pozition-right"
        style="width: 69px; height: 89px"
      >
    </button>
  </div> -->
  <div class="scroll-container">
    <div class="rectangle">
      <img src="/Asya.jpg" alt="Asya" class="img" />
      <h2 class="first-text my-text" style="font-size: 30px">Acя</h2>
      <p class="second-text my-text text-size2">4 месяца, девочка</p>
    </div>
    <div class="rectangle">
      <img src="/Mikki.jpg" alt="Mikki" class="img" />
      <h2 class="first-text my-text" style="font-size: 30px">Микки</h2>
      <p class="second-text my-text text-size2">3 года, мальчик</p>
    </div>
    <div class="rectangle">
      <img src="/Oskar.jpg" alt="Oskar" class="img" />
      <h2 class="first-text my-text" style="font-size: 30px">Оскар</h2>
      <p class="second-text my-text text-size2">5 лет, мальчик</p>
    </div>
    <div class="rectangle">
      <img src="/Yasha.jpeg" alt="Yasha" class="img" />
      <h2 class="first-text my-text" style="font-size: 30px">Яша</h2>
      <p class="second-text my-text text-size2">6 лет, мальчик</p>
    </div>
    <div class="rectangle">
      <img src="/Dim.jpg" alt="Dim" class="img" />
      <h2 class="first-text my-text" style="font-size: 30px">Дим</h2>
      <p class="second-text my-text text-size2">8 лет, мальчик</p>
    </div>
    <div class="rectangle">
      <img src="/Dim.jpg" alt="Dim" class="img" />
      <h2 class="first-text my-text" style="font-size: 30px">Дим</h2>
      <p class="second-text my-text text-size2">8 лет, мальчик</p>
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
/* .pozition-left {
  margin-left: 33px;
  margin-top: 450px;
}
.pozition-right {
  margin-left: 1236px;
  margin-right: 33px;
  margin-top: 450px;
} */
.rectangle {
  border: 1px solid rgb(67, 85, 56);
  border-radius: 25px;
  /* padding: 39px; */
  margin-right: 40px;
  width: 270px;
  height: 388px;
  background-color: white;
  text-align: center;
}
.img {
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
}
.scroll-container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* overflow-x: auto; */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.5s ease;
  align-items: flex-start;
}
</style>
