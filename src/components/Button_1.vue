<template>
  <div>
    <button
      class="second-text container button button:hover"
      :class="[size, color, position, text_color, hover]"
    >
      <slot />
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['size', 'color', 'position', 'text_color', 'hover']);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  border-radius: 25px;
  cursor: pointer;
}

.container.big {
  width: 365px;
  height: 60px;
}
.container.medium {
  width: 265px;
  height: 60px;
}
.container.medium2 {
  width: 290px;
  height: 60px;
}
.container.small {
  width: 171px;
  height: 60px;
}
.container.tiny {
  width: 161px;
  height: 60px;
}
.container.tiny2 {
  width: 194px;
  height: 41px;
}

.container.color-dark {
  background-color: rgb(67, 85, 56);
}
.container.color-light {
  background-color: rgb(205, 233, 187);
}
.container.color-beige {
  background-color: rgb(249, 233, 178);
  border: 1px solid rgb(67, 85, 56);
}

.container.text-color-white {
  color: white;
}
.container.text-color-green {
  color:rgb(67, 85, 56);
}
.container.light:hover {
  background-color: rgb(100, 147, 102);
  transition: background-color 0.3s;
}
.container.dark:hover {
  background-color: rgb(91, 109, 92);
  transition: background-color 0.3s;
}
</style>
