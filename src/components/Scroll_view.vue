<script setup>
import Button_1 from './Button_1.vue'
</script>

<template>
  <div class="bar2">
    <div class="button10" style="">
      <img
        id="left_button"
        src="/Left.png"
        alt="Left"
        class="cursor-pointer pozition-left"
        style="width: 49px; height: 69px"
      />
      <div class="scroll-container">
        <router-link to="/form">
          <div class="rectangle71">
            <img src="/Asya.jpg" alt="Asya" class="img10" />
            <h2 class="first-text my-text" style="font-size: 30px">Acя</h2>
            <p class="second-text my-text text-size6">4 месяца, девочка</p>
          </div>
        </router-link>
        <div class="rectangle71">
          <img src="/Mikki.jpg" alt="Mikki" class="img10" />
          <h2 class="first-text my-text text-size5">Микки</h2>
          <p class="second-text my-text text-size6">3 года, мальчик</p>
        </div>
        <div class="rectangle71">
          <img src="/Oskar.jpg" alt="Oskar" class="img10" />
          <h2 class="first-text my-text text-size5">Оскар</h2>
          <p class="second-text my-text text-size6">5 лет, мальчик</p>
        </div>
        <div class="rectangle71">
          <img src="/Yasha.jpeg" alt="Yasha" class="img10" />
          <h2 class="first-text my-text text-size5">Яша</h2>
          <p class="second-text my-text text-size6">6 лет, мальчик</p>
        </div>
        <div class="rectangle71">
          <img src="/Dim.jpg" alt="Dim" class="img10" />
          <h2 class="first-text my-text text-size5">Дим</h2>
          <p class="second-text my-text text-size6">8 лет, мальчик</p>
        </div>
        <div class="rectangle71">
          <img src="/Dim.jpg" alt="Dim" class="img10" />
          <h2 class="first-text my-text text-size5">Дим</h2>
          <p class="second-text my-text text-size6">8 лет, мальчик</p>
        </div>
        <div class="rectangle71">
          <img src="/Dim.jpg" alt="Dim" class="img10" />
          <h2 class="first-text my-text text-size5">Дим</h2>
          <p class="second-text my-text text-size6">8 лет, мальчик</p>
        </div>
        <div class="rectangle71">
          <img src="/Dim.jpg" alt="Dim" class="img10" />
          <h2 class="first-text my-text text-size5">Дим</h2>
          <p class="second-text my-text text-size6">8 лет, мальчик</p>
        </div>
        <div class="rectangle71">
          <img src="/Dim.jpg" alt="Dim" class="img10" />
          <h2 class="first-text my-text text-size5">Дим</h2>
          <p class="second-text my-text text-size6">8 лет, мальчик</p>
        </div>
      </div>
      <img
        id="right_button"
        src="/Right.png"
        alt="Right"
        class="cursor-pointer pozition-right"
        style="width: 49px; height: 69px"
      />
    </div>
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  let scroll = document.querySelector('.scroll-container')
  let left = document.getElementById('left_button')
  let right = document.getElementById('right_button')

  right.addEventListener('click', () => {
    scroll.scrollLeft += 310
  })
  left.addEventListener('click', () => {
    scroll.scrollLeft -= 310
  })
})
</script>

<style scoped>
.rectangle71 {
  border: 1px solid rgb(67, 85, 56);
  border-radius: 25px;
  margin-right: 40px;
  width: 200px;
  height: 280px;
  background-color: white;
  text-align: center;
  flex-shrink: 0;
}
.img10 {
  width: 200px;
  height: 180px;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
}
.bar2 .scroll-container {
  display: flex;
  width: 780px;
  margin: 0 auto;
  overflow: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.bar2 .button10 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.bar {
  margin: 0px -121px 0px;
  padding: 20px 141px;
}
@media screen and (max-width: 1294px) {
  .bar {
    margin: 0px -41px 0px;
    padding: 0px 61px;
  }
}
</style>
