<script setup>
import Header from './components/Header.vue';
import Title from './components/Title.vue';
import Flower from './components/Flower.vue';
import Help from './components/Help.vue';
import Button_1 from './components/Button_1.vue';
import Scroll from './components/Scroll.vue';
import Six_comp from './components/Six_comp.vue';
import News from './components/News.vue';
import Articles from './components/Articles.vue';
import Request from './components/Request.vue';
import Inform from './components/Inform.vue';
import Members from './components/Members.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <Title />
  <Flower />
  <Scroll />
  <Help />
  <News />
  <Articles />
  <Request />
  <Inform />
  <Footer />
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
