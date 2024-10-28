<script setup>
import Button_1 from './Button_1.vue';
import Six_comp from './Six_comp.vue';
</script>

<template>
  <div class="color help-shelter">
    <div class="top-section">
      <div class="text">
        <div class="first-text text-size3 my-text" style="margin-bottom: 30px">
          <span>Как помочь приюту?</span>
        </div>
        <div class="second-text my-text text-size4 text-line-height3">
          В нашем приюте для собак и кошек социализацией, уходом за животными, выгулом собак и
          поиском добрых и заботливых хозяев занимаются добровольцы-волонтёры, поэтому мы будем
          очень благодарны вам за помощь приюту
        </div>
      </div>
      <img
        src="/Heart.png"
        alt="Heart"
        class="hide"
        style="height: 230px;"
      />
    </div>
    <Six_comp />
    <div style="display: flex; justify-content: center; margin-top: 40px;">
      <Button_1
        size="big"
        color="color-dark"
        text_color="text-color-white"
        hover="light"
        >
        Подробнее о видах помощи  
      </Button_1>
    </div>
  </div>
</template>

<style scoped>
.help-shelter {
  margin: 50px -121px 0;
  padding: 45px 141px;
}

.help-shelter .top-section {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .help-shelter .top-section {
    flex-wrap: wrap;
    justify-content: center;
  }
  .hide {
    display: none;
  }
}
.help-shelter .text {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 1294px) {
  .help-shelter {
    margin: 30px -41px 0px;
    padding: 40px 61px;
  }
  .text-size4 {
    font-size: 20px;
  }
  .help-shelter .text {
    align-items: center
}
}
</style>

