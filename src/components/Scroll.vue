<template>
  <div class="button10">
    <img
      id="left_button"
      src="/Left.png"
      alt="Left"
      class="cursor-pointer pozition-left"
      style="width: 69px; height: 89px"
    />
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
      <div class="rectangle">
        <img src="/Dim.jpg" alt="Dim" class="img" />
        <h2 class="first-text my-text" style="font-size: 30px">Дим</h2>
        <p class="second-text my-text text-size2">8 лет, мальчик</p>
      </div>
    </div>
    <img
      id="right_button"
      src="/Right.png"
      alt="Right"
      class="cursor-pointer pozition-right"
      style="width: 69px; height: 89px"
    />
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
.rectangle {
  border: 1px solid rgb(67, 85, 56);
  border-radius: 25px;
  margin-right: 40px;
  width: 270px;
  height: 388px;
  background-color: white;
  text-align: center;
  flex-shrink: 0;
}
.img {
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
}
.scroll-container {
  display: flex;
  max-width: 1210px;
  margin: 0 auto;
  overflow: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.button10 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}
</style>
