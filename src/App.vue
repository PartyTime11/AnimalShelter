<script setup></script>

<template>
  <RouterView />
</template>

<style>
#app {
  padding: 0 121px;
}
@media screen and (max-width: 1294px) {
  #app {
    padding: 0 41px;
  }
  .text-size3 {
    font-size: 25px;
  }
  .text-size1 {
    font-size: 40px;
  }
}
.first-text {
  font-family: 'VAG World';
}
.second-text {
  font-family: 'KleinText';
}
.my-text {
  color: rgb(67, 85, 56);
}

.left-text {
  text-align: left;
}
.right-text {
  text-align: right;
}
.center-text {
  text-align: center;
}

.text-size1 {
  font-size: 60px;
}
.text-size2 {
  font-size: 20px;
}
.text-size3 {
  font-size: 40px;
}
.text-size4 {
  font-size: 25px;
}
.text-size5 {
  font-size: 30px;
}
.text-size6 {
  font-size: 15px;
}

.text-line-height1 {
  line-height: 1.2;
}
.text-line-height2 {
  line-height: 1.9;
}
.text-line-height3 {
  line-height: 2;
}

.img-pozition {
  margin-left: 700px;
  margin-right: 112px;
  margin-top: -345px;
}

.text-indentation {
  margin-top: 40px;
}

.container-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.color {
  margin-top: 90px;
  background-color: rgb(249, 233, 178);
  padding: 20px;
}
.color2 {
  background-color: rgb(67, 85, 56);
  padding: 20px;
}
</style>
