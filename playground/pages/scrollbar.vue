<script setup lang="ts"></script>

<template>
  <div w100 h50 of-auto scrollbar="size-8px" scrollbar-track="bg-sky/10">
    <div v-for="i in 10" :key="i" size-120 />
  </div>
</template>
