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
@media screen and (max-width: 1000px) {
  #app {
    padding: 0 41px;
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

.title {
  margin: 0px -121px 0;
  padding: 0px 141px;
}

.title .top-section {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .title .text {
    text-align: center;
  }
  .title .top-section {
    flex-wrap: wrap;
    justify-content: center;
  }
  
}
.title .text {
  display: flex;
  flex-direction: column;
}


.help-shelter {
  margin: 50px -121px 0;
  padding: 45px 141px;
}

.help-shelter .top-section {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .help-shelter .top-section {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.help-shelter .text {
  display: flex;
  flex-direction: column;
}

.article {
  margin: 0px -121px 0;
  padding: 0px 141px;
}
.article .top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.article .text {
  display: flex;
  flex-direction: column;
}

.request {
  margin: 0px -121px 0;
  padding: 0px 141px;
}
.request .top-section {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .request .top-section {
    flex-wrap: wrap;
    justify-content: center;
  }
  .request .ord3 {
    order: 1;
  }
};
.request .text {
  display: flex;
  flex-direction: column;
}
.request .ord1 {
  order: 0;
}
.request .ord2 {
  order: 2;
}
.request .ord3 {
  order: 3;
}

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


.new {
  margin: 0px -121px 0;
  padding: 0px 141px;
}

.rectangle9 {
  border-radius: 50px;
  padding: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 375px;
  height: 68px;
  background-color: rgb(255, 255, 255);
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  cursor: pointer;
}
</style>
