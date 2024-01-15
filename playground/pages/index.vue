<script setup lang="ts">
const pages = ['ellipsis', 'flex', 'grid', 'position', 'scrollbar']
</script>

<template>
  <div flex="~ center" size-screen>
    <ul flex="~ wrap" gap2>
      <li v-for="page in pages" :key="page">
        <NuxtLink :to="`/${page}`">
          {{ page }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
