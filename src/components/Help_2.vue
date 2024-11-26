<script setup>
import Button_1 from './Button_1.vue';
</script>

<template>
  <div class="color help" style="margin-top: 40px">
    <div class="column" style="display: flex; align-items: center; justify-content:space-between;">
      <div class="text" style="margin-bottom: 60px">
        <div class="text-left size center" style="margin-top: 30px;">
          <p1 class="first-text text-size3 my-text">Помощь приюту</p1>
          <div class="second-text text-size2 my-text text-line-height2 center" style="margin-top: 40px;">
            <p class="cen">Отклик неравнодушных людей помогает нам в лечении и реабилитации животных приюта, транспортировке в клинику и обратно, а также в получении необходимых лекарств.</p>
            <p class="cen" style="margin-top: 40px">Есть множество способов помочь: от полной опеки над больным животным до помощи с перевозкой или простого репоста. </p>
            <p style="margin-top: 40px">Узнайте больше о вариантах помощи по кнопке!</p>
          </div>
        </div>
      </div>
      <div style="position: relative; display: inline-block; margin-top: 50px">
        <img
          src="/Star.png"
          alt="Star"
          style="width: 600px; height: auto;"
        />
        <div class="text-size2" style="display: flex; justify-content: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); margin-top: -10px">
          <Button_1
            size="small"
            color="color-dark"
            text_color="text-color-white"
            hover="light"
            >
            Помочь!
          </Button_1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-line-height2 {
  line-height: 1.9;
}

.help {
  margin: 0px -121px 0px;
  padding: 0px 141px;
  margin-top: 90px;
  background-color: rgb(249, 233, 178);
}

.size {
  max-width: 800px;
}
@media screen and (max-width: 1294px) {
  .help {
    margin: 30px -41px 0px;
    padding: 40px 61px;
  }
}

@media screen and (max-width: 1200px) {
  .column {
    flex-direction: column;
  }
  .size {
    max-width: 1200px;
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cen {
    text-align: center;
  }
}
</style>
