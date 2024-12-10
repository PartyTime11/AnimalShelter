<script setup>
import Button_1 from './Button_1.vue'
</script>

<template>
  <div class="title">
    <div class="top-section">
      <div class="text">
        <div class="my-text left-text container">
          <div class="first-text text-size1 text-line-height1 ord1" style="max-width: 400px">
            Самое время найти лучшего друга!
          </div>
          <div
            class="second-text text-indentation text-size2 text-line-height2 ord2"
            style="max-width: 400px"
          >
            Возьмите собаку или кошку из приюта «Девятая жизнь» бесплатно
          </div>
          <div class="center text-size2 ord3">
            <Button_1 size="medium" color="color-dark" text_color="text-color-white" hover="light">
              Перейти в каталог
            </Button_1>
          </div>
          <div class="ord4">
            <img src="/Титул.png" alt="Титул" class="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 450px;
  flex-wrap: wrap;
  margin-top: 20px;
}
.text-size1 {
  font-size: 40px;
}
.img {
  max-width: 670px;
  max-height: 450px;
}
.text-indentation {
  margin-top: 35px;
}
.title {
  display: flex;
}

.title .top-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ord1 {
  order: 0;
}
.ord2 {
  order: 2;
  margin-bottom: 115px;
}
.ord3 {
  order: 3;
  margin-top: 35px;
}
.ord4 {
  order: 4;
}

@media screen and (max-width: 1000px) {
  .img {
    width: 800px;
    height: auto;
    margin-top: 20px;
  }
  .title {
    justify-content: center;
  }
  .title .text {
    justify-content: center;
  }
  .title .top-section {
    flex-wrap: wrap;
    justify-content: center;
  }
  .left-text {
    text-align: center;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-size1 {
    font-size: 40px;
  }
  .ord4 {
    order: 1;
  }
  .ord2 {
    margin-bottom: 20px;
  }
  .container {
    height: auto;
    align-items: center;
  }
}

@media (min-width: 1294px) and (max-width: 1504px) {
  .img {
    width: 600px;
    height: auto;
  }
  .text-size1 {
    font-size: 40px;
  }
}

@media (min-width: 1001px) and (max-width: 1294px) {
  .img {
    width: 500px;
    height: auto;
    margin-left: 10px;
  }
  .text-size1 {
    font-size: 40px;
  }
  .ord2 {
    margin-bottom: 20px;
  }
  .container {
    height: 330px;
  }
}

@media screen and (min-width: 1400px) {
  .img {
    margin-left: 100px;
  }
}
@media screen and (max-width: 705px) {
  .img {
    width: 450px;
    height: auto;
    margin-left: 10px;
  }
}
</style>
