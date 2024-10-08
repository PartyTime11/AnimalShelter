<template>
  <header class="flex justify-between border-b px-28 py-2">
    <div class="flex items-center gap-1">
      <img src="/Logo.png" alt="Logo" class="w-14" style="width: 64px; height: 70px" />

      <div class="text-xl first-text tracking-wide my-text">
        <h1>Девятая</h1>
        <h2>жизнь</h2>
      </div>
    </div>

    <ul class="flex items-center gap-12 second-text tracking-wide text-l">
      <li class="my-text cursor-pointer">
        <span>Каталог животных</span>
      </li>

      <li class="my-text cursor-pointer">
        <span>FAQ</span>
      </li>

      <li class="my-text cursor-pointer">
        <span>О нас</span>
      </li>

      <li class="my-text cursor-pointer">
        <span>Помочь приюту</span>
      </li>

      <li class="my-text cursor-pointer">
        <span>Контакты</span>
      </li>
    </ul>
  </header>
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
</style>
