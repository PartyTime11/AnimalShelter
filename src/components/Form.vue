<script setup>
import Button_1 from './Button_1.vue';
</script>

<template>
  <div style="display: flex; flex-direction: column; margin-top: 90px; ">
    <div class="column center" style="display: flex; justify-content: space-around">
      <img
          src="/Mops.webp"
          alt="Mops"
          class="img ord0"
        />
      <div style="display: flex; flex-direction: column; align-items: center;">
        <div class="ord1" style="display: flex; align-items: center; justify-content: center;">
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <p1 class="first-text my-text text-size3">Майк</p1>
            <p class="second-text my-text text-size2">5 лет, мальчик</p>
          </div>
          <div style="margin-left: 50px;">
            <img
              src="/Heart.png"
              alt="Heart"
              style="height: 100px;"
            />
          </div>
        </div>
        <div class="rectangle ord2" style="margin-top: 40px">
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <p class="second-text my-text text-size2" style="text-align: center;">Поделитесь анкетой с друзьями, возможно это чья-то судьба:</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 15px">
              <img
                src="/Vk.png"
                alt="Vk"
                style="height: 50px;"
              />
            <img
              src="/Tg_2.png"
              alt="Tg_2"
              style="height: 50px;"
            />
            <img
              src="/WhatsApp.png"
              alt="WhatsApp"
              style="height: 50px;"
            />
            </div>
          </div>
        </div>
        <div class="second-text text-size2 ord3" style="margin-top: 60px">
          <Button_1
            size="medium"
            color="color-dark"
            text_color="text-color-white"
            hover="light"
            >
            Познакомиться 
          </Button_1>
        </div>
      </div>
    </div>
    <div class="container ord4" style="margin-bottom: 40px;">
      <div class="second-text my-text text-size2">
        <p>Мопс по имени Майк — это очаровательный пятилетний мальчик с яркой индивидуальностью и неповторимым характером. Его короткая, гладкая шерсть имеет насыщенный бежевый цвет, а большие, выразительные глаза излучают доброту и любопытство. Майк обладает типичной для мопсов округлой головой и короткой мордочкой, что придаёт ему комичный и милый вид.</p>
        <p style="margin-top: 20px">Этот мопс — настоящий компаньон. Он любит проводить время рядом с людьми, всегда готов поиграть или просто полежать на диване, наслаждаясь вниманием своих хозяев. Майк очень дружелюбен и общителен, легко находит общий язык как с детьми, так и со взрослыми. Его игривый характер делает его идеальным другом для семейных прогулок и активных игр на свежем воздухе.</p>
        <p style="margin-top: 20px">Несмотря на свои небольшие размеры, Майк полон энергии и жизнелюбия. Он обожает бегать за мячом и исследовать окрестности во время прогулок. Мопсы известны своим умом и сообразительностью, и Майк не исключение — он быстро учится новым трюкам и командам. Этот милый мопс приносит радость и смех в жизнь своей семьи, становясь незаменимым членом домашнего коллектива.</p>
      </div>
    </div>
  </div>
  <div class="help_2" style="align-items: center; margin-bottom: 50px">
    <div class="column_2" style="display: flex;">
      <div class="center_2">
        <p class="first-text my-text text-size3 margin" style="margin-bottom: 30px">
          Контакты куратора
        </p>
        <p class="second-text my-text text-size2">
          Чтобы забрать животное из приюта, свяжитесь с куратором. Она расскажет об особенностях характера и поведения животного и ответит на вопросы
        </p>
      </div>
      <div class="center_3">
        <div class="rectangle8" style="margin-left: 30px">
          <img src="/Evdokia_monkey.jpg" alt="Evdokia_monkey" class="img2" style="margin-right: 10px" />
          <div style="margin-left: 30px; margin-top: 20px">
            <h2 class="first-text my-text" style="font-size: 25px">Евдокия</h2>
            <p class="second-text my-text text-size2" style="cursor: pointer">+7 913 689 92 73</p>
            <img
              src="/Tg.png"
              alt="Tg"
              style="width: 64px; height: 64px; margin-top: 10px; cursor: pointer"
            />
          </div>
          <div>
            <img
              src="/Banana.png"
              alt="Banana"
              style="width: 100px; margin-top: 20px; margin-left: 35px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {
  max-width: 600px; 
  height: 446px; 
  border-radius: 25px; 
  object-fit: cover;
}
.rectangle {
  width: 414px;
  height: 174px;
  border-radius: 25px;
  padding: 20px;
  border: 1px solid rgb(100, 147, 102);
  background-color: white;
}
.container {
  max-width: 1700px;
  max-height: 1000px;
  padding: 20px;
  margin-top: 40px
}
.help_2 {
  margin: 0px -121px 0px;
  padding: 0px 141px;
  background-color: rgb(249, 233, 178);
  padding-top: 50px;
  padding-bottom: 50px;
}
.rectangle8 {
  border-radius: 50px;
  width: 525px;
  height: 186px;
  background-color: white;
  text-align: left;
  border: 1px solid rgb(67, 85, 56);
  display: flex;
}
.img2 {
  width: 172px;
  height: 186px;
  border-radius: 50px 0px 0px 50px;
  object-fit: cover;
}
@media screen and (max-width: 1294px) {
  .help_2 {
    margin: 30px -41px 0px;
    padding: 40px 61px;
  }
  .help_2 {
    margin-top: -30px;
  }

}
@media screen and (max-width: 1180px) {
  .column {
  flex-direction: column;
}
.center {
  align-items: center;
}
}
@media screen and (max-width: 1155px) {
  .column_2 {
    flex-direction: column;
  }
  .center_2 {
    text-align: center;
  }
  .center_3 {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
}
</style>
