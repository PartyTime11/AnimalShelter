<template>
  <body class="wrapper">
    <header class="flex justify-between border-b py-2 header" style="align-items: center">
      <div class="flex items-center gap-1">
        <img src="/Logo.png" alt="Logo" class="w-14" style="width: 64px; height: 70px" />

        <div class="text-xl first-text tracking-wide my-text">
          <h1>Девятая</h1>
          <h2>жизнь</h2>
        </div>
      </div>
      <button class="header_burger" id="burger">
        <span></span><span></span><span></span>
      </button>
      <nav class="flex items-center gap-12 second-text tracking-wide text-l hide menu" id="menu">
        <ul class=" flex items-center gap-12 second-text tracking-wide text-l">
          <li class="my-text cursor-pointer menu_list">
            <span>Каталог животных</span>
          </li>

          <li class="my-text cursor-pointer menu_list link">
            <span>Полезные статьи</span>
          </li>

          <li class="my-text cursor-pointer menu_list link">
            <span>О нас</span>
          </li>

          <li class="my-text cursor-pointer menu_list link">
            <span>Помочь приюту</span>
          </li>

          <li class="my-text cursor-pointer menu_list link">
            <span>Контакты</span>
          </li>
        </ul>
      </nav>
    </header>
  </body>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open");
  });
});
</script>



<style>
.wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;}
header {
  margin-bottom: 0;
}
.menu {
  transition: transform .5s, visibility .5s;
}
.header_burger {
  display: none;
  position: relative;
  width: 40px;
  height: 40px;
  border: none;
  z-index: 2;
  outline: none;
  background-color: transponent;
  cursor: pointer;
}
.header_burger span {
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: rgb(67, 85, 56);
  left: 5px;
  transition: background-color .05s, opacity .25s, transform .5s;
  will-change: transform;
}

.header_burger:hover span {
  background-color: rgb(67, 85, 56);;
}

.header_burger span:nth-child(1) {
  transform: translateY(-10px);
}
.header_burger span:nth-child(3) {
  transform: translateY(10px);
}

.header.open .header_burger span:nth-child(1) {
  transform: translateY(0) rotate(45deg);
}
.header.open .header_burger span:nth-child(2) {
  opacity: 0;
}
.header.open .header_burger span:nth-child(3) {
  transform: translateY(0) rotate(-45deg);
}


@media (max-width: 1090px) {
  .header_burger {
    display:block;
  }
  .menu {
    position: absolute;
    right: -350px;
    top: 0;
    width: 350px;
    padding: 75px 20px 20px 20px;
    background-color:rgb(249, 233, 178);
    transition: right .5s, visibility .5s;
    visibility: hidden;
  }
  .menu_list {
    display: block;
    padding: 10px 0;
  }
  .header.open .menu {
    right: 0;
    visibility: visible;
  }
}
</style>
