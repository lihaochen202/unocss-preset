<script setup lang="ts"></script>

<template>
  <div>
    <h2 my2>
      Absolute
    </h2>
    <div relative mx-5 size-50 bg-gray>
      <div absolute="~ r" w1 bg-blue />
      <div absolute="~ l" w1 bg-blue />
      <div absolute="~ t" h1 bg-blue />
      <div absolute="~ b" h1 bg-blue />
      <div absolute="~ tl" size-3 bg-blue />
      <div absolute="~ tr" size-3 bg-blue />
      <div absolute="~ lb" size-3 bg-blue />
      <div absolute="~ rb" size-3 bg-blue />
      <div absolute="~ center" size-3 bg-blue />
      <div absolute="~ center-t" size-3 bg-red />
      <div absolute="~ center-tt" size-3 bg-blue:50 />
      <div absolute="~ center-tb" size-3 bg-blue:50 />
      <div absolute="~ center-b" size-3 bg-red />
      <div absolute="~ center-bt" size-3 bg-blue:50 />
      <div absolute="~ center-bb" size-3 bg-blue:50 />
      <div absolute="~ center-l" size-3 bg-red />
      <div absolute="~ center-ll" size-3 bg-blue:50 />
      <div absolute="~ center-lr" size-3 bg-blue:50 />
      <div absolute="~ center-r" size-3 bg-red />
      <div absolute="~ center-rl" size-3 bg-blue:50 />
      <div absolute="~ center-rr" size-3 bg-blue:50 />
      <div absolute="~ full" bg-blue:20 />
      <div absolute="~ full-20" bg-blue:50 />
      <div absolute="~ full--2" bg-blue:50 />
    </div>
  </div>
</template>
