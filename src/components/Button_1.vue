<template>
  <div>
    <button class="second-text container button button:hover text-size2">Перейти в каталог</button>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.button {
  position: absolute;
  top: 535px;
  left: 112px;

  background-color: rgb(67, 85, 56);
  color: white;
  padding: 15px 20px;
  width: 265px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.button:hover {
  background-color: rgb(100, 147, 102);
}
</style>
