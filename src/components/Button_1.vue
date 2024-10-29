<template>
  <div>
    <button
      class="second-text container button button:hover text-size2"
      :class="[size, color, pozition, text_color, hover]"
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
  height: 60px;
}
.button {
  border-radius: 25px;
  cursor: pointer;
}

.container.big {
  width: 365px;
}
.container.medium {
  width: 265px;
}
.container.medium2 {
  width: 290px;
}
.container.small {
  width: 171px;
}
.container.tiny {
  width: 161px;
}

.container.color-dark {
  background-color: rgb(67, 85, 56);
}
.container.color-light {
  background-color: rgb(205, 233, 187);
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
