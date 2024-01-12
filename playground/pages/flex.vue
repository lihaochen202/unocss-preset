<script setup lang="ts"></script>

<template>
  <div>
    <h2 my2>
      Flex
    </h2>
    <div flex="~ center" gap2 w100 h10 bg-gray>
      <div w10 h4 bg-blue />
      <div w10 h4 bg-blue />
      <div w10 h4 bg-blue />
    </div>
    <div flex="~ center-start" gap2 mt2 w100 h10 bg-gray>
      <div w10 h4 bg-blue />
      <div w10 h4 bg-blue />
      <div w10 h4 bg-blue />
    </div>
    <div flex="~ center-end" gap2 mt2 w100 h10 bg-gray>
      <div w10 h4 bg-blue />
      <div w10 h4 bg-blue />
      <div w10 h4 bg-blue />
    </div>
  </div>
</template>
