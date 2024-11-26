<script setup>
import Button_1 from './Button_1.vue';
</script>

<template>
  <div style="margin-top: 40px">
    <p class="first-text my-text text-size3 center1">
      Мы команда волонтёров частного приюта «Девятая жизнь». Вот уже 20 лет мы помогаем бездомным кошкам и собакам найти настоящую семью
    </p>
  </div>
  <div class="column" style="display: flex; justify-content: space-around">
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 495px;">
      <div class="rectangle17" style="display: flex; align-items: center; justify-content: center;">
        <p class="second-text" style="color: white; font-size: 140px;">
          3300
        </p>
      </div>
      <div style="text-align: center; margin-top: 30px;">
        <p class="second-text my-text text-size4">
          животных нашли свой дом благодаря волонтёрам приюта «Девятая жизнь»
        </p>
      </div>
    </div>
    <div>
        <img src="/Us.png" alt="Us"/>
      </div>
  </div>
  <div class="us color">
    <div>
      <p class="first-text my-text text-size3 center" style="margin-bottom: 50px;">
        О приюте «Девятая жизнь» и его волонтёрах:
      </p>
    </div>
    <div class="container20">
      <div class="rectangle18">
        <p class="first-text my-text text-size4" style="margin-bottom: 15px;">
          Приют находится в г. Омске
        </p>
        <p class="second-text my-text text-size2">
          Приют «Девятая жизнь» — это частный приют для животных. Все собаки и кошки привиты, стерилизованы или кастрированы, волонтёры следят за их здоровьем, выгуливают собак и ухаживают за кошками, но все равно они нуждаются в настоящей семье и постоянной заботе. Волонтёр приезжает в приют не менее раза в неделю и помогает на постоянной основе.
        </p>
      </div>
      <div class="rectangle18">
        <p class="first-text my-text text-size4" style="margin-bottom: 15px;">
          Мы создали этот сайт на добровольной основе
        </p>
        <p class="second-text my-text text-size2">
          Наша главная миссия — помочь обрести дом бездомным животным. Мы рассказываем о приюте, где вы сможете найти себе верного и любящего друга. Также мы рады любой помощи и открыты для совместных проектов, которые помогут вырастить знание о нас и, следовательно, найти больше хозяев для хвостиков.        
        </p>
      </div>
      <div class="rectangle18">
        <p class="first-text my-text text-size4" style="margin-bottom: 15px;">
          Предупреждайте о приезде в наш приют
        </p>
        <p class="second-text my-text text-size2">
          Без сопровождения волонтёра вас не пустят на территорию приюта. Всех гостей встречает и сопровождает один из наших волонтёров. Мы очень рады вашим визитам, поэтому сделаем всё, чтобы у вас не возникло проблем на проходной. Администрация просит нас сообщать, что приедут гости и в каком количестве, так что лучше договориться о визите заранее.        
        </p>
      </div>
      <div class="rectangle18">
        <p class="first-text my-text text-size4" style="margin-bottom: 15px;">
          Мы принимаем животных в приют        
        </p>
        <p class="second-text my-text text-size2">
          Собаки и кошки попадают в приют через различные источники, включая государственные службы отлова и добрых людей, которые находят бездомных животных. Наш приют принимает животных, чтобы обеспечить им временное убежище и помочь найти новый дом.        
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rectangle17 {
    width: 495px;
    height: 211px;
    border-radius: 25px;
    background-color: rgb(255, 168, 0);
  }
.us {
  margin: 50px -121px 0;
  padding: 45px 141px;
}
.rectangle18 {
  width: 500px;
  height: 460px;
  border-radius: 25px;
  background-color: white;
  padding: 40px;
}
.container20 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 53px 53px;
  justify-items: center; 
  align-items: center; 
}

@media screen and (max-width: 1294px) {
  .us {
    margin: 30px -41px 0px;
    padding: 40px 61px;
  }
}

@media screen and (max-width: 1300px) {
  .container20 {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    align-items: center;
  }
  .center {
    text-align: center;
  }
}

@media screen and (max-width: 1080px) {
  .column {
    margin-top: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .center1 {
    text-align: center;
  }
}
</style>
