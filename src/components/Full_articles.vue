<script setup>
import { ref, reactive } from 'vue'
const isOpen = ref(false)
const openedTabs = {
  getPet: false,
  feedPet: false
}

function toggleText(key) {
  openedTabs[key] = !openedTabs[key]
}
</script>

<template>
  <div style="margin-top: 20px">
    <p class="first-text my-text text-size1">Полезные статьи</p>
  </div>
  <div
    class="rectangle"
    style="margin-top: 40px; display: flex; justify-content: space-between; align-items: center"
  >
    <div class="second-text my-text text-size2">
      <p>Что делать, если вы нашли бездомное животное и хотите забрать его к себе?</p>
    </div>
    <div class="circle" :class="{ open: isOpen, close: !isOpen }" @click="toggleText('getPet')">
      <img
        src="/Button.png"
        alt="Button"
        style="width: 30px"
        class="arrow"
        :class="{ 'rotate-up': isOpen, 'rotate-down': !isOpen }"
      />
    </div>
  </div>

  <transition name="fade">
    <div v-if="isOpen">
      <div style="display: flex; align-items: center; margin-top: 20px">
        <div>
          <p class="second-text my-text text-size2" style="margin-bottom: 10px">
            На улицах городов и в парках нередко можно встретить бездомных животных, нуждающихся в
            помощи. Если вы решили забрать такое животное к себе, важно действовать ответственно и
            обдуманно. Вот несколько шагов, которые помогут вам в этом процессе.
          </p>
          <p class="first-text my-text text-size2" style="margin-bottom: 10px">
            1. Оцените состояние животного
          </p>
          <p class="second-text my-text text-size2">
            Прежде всего, убедитесь, что животное в безопасности. Оцените его состояние:<br />Внешний
            вид: Есть ли у животного раны, признаки болезни или истощения?<br />Поведение: Спокойно
            ли оно себя ведет или проявляет агрессию? Возможно, животное испугано и нуждается во
            времени для привыкания к людям.<br />Если вы видите, что животное серьезно травмировано
            или больно, лучше всего обратиться в ветеринарную клинику.
          </p>
        </div>
        <img src="/1.png" alt="1" style="object-fit: cover" />
      </div>
      <div>
        <p class="first-text my-text text-size2" style="margin-bottom: 10px">
          2. Подготовить свой дом
        </p>
        <p class="second-text my-text text-size2">
          Перед тем как забрать животное домой, убедитесь, что ваш дом готов к новому жильцу:
          Создайте безопасное пространство: Отведите отдельное место для животного с лежанкой,
          мисками для еды и воды. Обеспечьте безопасность: Убедитесь, что в доме нет опасных
          предметов и токсичных растений.
        </p>
        <p class="first-text my-text text-size2" style="margin-bottom: 10px">
          3. Визит к ветеринару
        </p>
        <p class="second-text my-text text-size2">
          После того как вы забрали животное домой, обязательно запланируйте визит к ветеринару:
          Проверьте общее состояние здоровья. Сделайте необходимые прививки. Обсудите вопросы
          стерилизации или кастрации.
        </p>
        <p class="first-text my-text text-size2" style="margin-bottom: 10px">
          4. Дайте животному привыкнуть к новому дому
        </p>
        <p class="second-text my-text text-size2">
          Дайте животному время адаптироваться к новым условиям. Будьте терпеливы и осторожны:
          Позвольте ему исследовать пространство. Не заставляйте его общаться, если он этого не
          хочет.
        </p>
        <p class="first-text my-text text-size2" style="margin-bottom: 10px">
          5. Заботьтесь о питомце
        </p>
        <p class="second-text my-text text-size2">
          Обеспечьте животному правильный уход: Кормите сбалансированным кормом. Обеспечьте
          регулярные прогулки (если это собака). Обратите внимание на его эмоциональное состояние и
          потребности.
        </p>
      </div>
    </div>
  </transition>

  <div
    class="rectangle"
    style="margin-top: 40px; display: flex; justify-content: space-between; align-items: center"
  >
    <div class="second-text my-text text-size2">
      <p>Как часто нужно кормить котят и щенков?</p>
    </div>
    <div class="circle" :class="{ open: isOpen, close: !isOpen }" @click="toggleText('feedPet')">
      <img
        src="/Button.png"
        alt="Button"
        style="width: 30px"
        class="arrow"
        :class="{ 'rotate-up': isOpen, 'rotate-down': !isOpen }"
      />
    </div>
  </div>

  <transition name="fade">
    <div v-if="isOpen">
      <p>felfmlemfal</p>
      ]
    </div>
  </transition>
</template>

<style>
.rectangle {
  max-width: 2000px;
  height: 80px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  padding: 20px 30px;
  border: 1px solid rgb(67, 85, 56);
}
.circle {
  width: 51px;
  height: 51px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(67, 85, 56);
}
.arrow {
  transition: transform 0.3s ease;
}

.rotate-up {
  transform: rotate(180deg);
}

.rotate-down {
  transform: rotate(0deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
