<template>
  <div class="container2">
    <button class="second-text button2 button2:hover text-size2">Смотреть всех животных</button>
  </div>
</template>

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
.container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 61px;
}
.button2 {
  background-color: rgb(67, 85, 56);
  color: white;
  padding: 15px 20px;
  width: 367px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 60px;
}
.button2:hover {
  background-color: rgb(100, 147, 102);
}
</style>
