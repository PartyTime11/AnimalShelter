<script setup>
</script>

<template>
  <div style="margin-top: 30px;">
    <p class="first-text my-text text-size3 center">
      Адрес приюта «Девятая жизнь»
    </p>
  </div>
  <div class="column" style="display: flex; justify-content: space-around; align-items: center;">
    <div class="center" style="display: flex; flex-direction: column;">
      <p class="first-text my-text text-size4">Адрес</p>
      <p class="second-text my-text text-size2">г. Омск</p>
      <p class="second-text my-text text-size2">ул. 9-Линия</p>
    </div>
    <div class="center" style="display: flex; flex-direction: column;">
      <p class="first-text my-text text-size4">Режим работы</p>
      <p class="second-text my-text text-size2">Понедельник и четверг — выходные дни</p>
      <p class="second-text my-text text-size2">Вт, ср, пт, сб, вс — 9:00-17:00</p>
    </div>
    <div>
      <img src="/Heart.png" alt="Heart" class="" style="width: 180px;" />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1000px) {
  .column {
    margin-top: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .center {
    text-align: center;
  }
}
</style>
