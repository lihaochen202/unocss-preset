<script setup lang="ts"></script>

<template>
  <div>
    <h2 my2>
      Grid
    </h2>
    <div grid="~ cols-3 center" w100 h10 bg-gray>
      <div w10 h2 bg-blue />
      <div w10 h2 bg-blue />
      <div w10 h2 bg-blue />
    </div>
    <div grid="~ cols-3 center-start" mt2 w100 h10 bg-gray>
      <div w10 h2 bg-blue />
      <div w10 h2 bg-blue />
      <div w10 h2 bg-blue />
    </div>
    <div grid="~ cols-3 start-center" mt2 w100 h10 bg-gray>
      <div w10 h2 bg-blue />
      <div w10 h2 bg-blue />
      <div w10 h2 bg-blue />
    </div>
  </div>
</template>
