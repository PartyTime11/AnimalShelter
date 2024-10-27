<script setup>
import Button_1 from './Button_1.vue';
</script>

<template>
  <div class="title" style="display: flex">
    <div class="top-section">
      <div class="text">
        <div class="my-text left-text">
          <div class="first-text text-size1 text-line-height1">
            <span
              >Самое время найти<br />
              лучшего друга!</span
            >
          </div>
          <div class="second-text text-indentation text-size2 text-line-height2" style="margin-bottom: 115px;">
            <span
              >Возьмите собаку или кошку из приюта<br />
              «Девятая жизнь» бесплатно</span
            >
          </div>
          <Button_1
            size="medium"
            color="color-dark"
            text_color="text-color-white"
            hover="light"
          >
            Перейти в каталог
          </Button_1>
        </div>
      </div>
      <img
        src="/Титул.png"
        alt="Титул"
        style="max-width: 670px; max-height: 450px; margin-top: 70px"
      />
    </div>
  </div>
</template>

<style scoped> 
  .title {
    margin: 0px -121px 0;
    padding: 0px 141px;
  }

  .title .top-section {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 1000px) {
    .title .text {
      text-align: center;
    }
    .title .top-section {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  /* @media (min-width: 600px) and (max-width: 1504px) {
    .title .text {
      text-align: center;
    }
    .title .top-section {
      flex-wrap: wrap;
      justify-content: center;
    }
  .title .text {
    display: flex;
    flex-direction: column;
  }
} */
</style>