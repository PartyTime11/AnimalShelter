<script setup>
import Members from './Members.vue';
</script>

<template>
  <div class="member">
    <div class="top-section">
      <div class="text">
        <div class="first-text my-text text-size3" style="margin-top: 40px">
          <span>Будем рады встрече с вами!</span>
        </div>
        <div style="display: flex; margin-top: 30px">
          <div class="second-text my-text text-size2">
            <span>
              Ниже будут указаны контакты наших волонтеров, если у вас остались
              вопросы, то они с радостью ответят. Обратите внимание, что звонки
              принимаются только в рабочее время с 9:00 до 18:00, г. Омск
            </span>
          </div>
          <div>
            <div class="text-size-2 my-text" style="margin-left: 10px">
              <p class="first-text">Адрес</p>
              <span class="second-text"
                >г. Омск
                ул 9- Линия</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Members />
  </div>
</template>

<style scoped>
.member {
  margin: 0px -121px 0;
  padding: 0px 141px;
}
.member .top-section {
  display: flex;
  align-items: center;
}
.member .text {
  display: flex;
  flex-direction: column;
}
</style>