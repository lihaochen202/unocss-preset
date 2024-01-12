<script setup lang="ts">
const article = 'This post will be a bit longer than usual. It’s quite a big announcement to me, and there are many things I want to talk about. I’ll be appreciated if you take the time to read through it. The table of contents is hidden on the left if you are on a desktop. Hope you enjoy :)'
</script>

<template>
  <div>
    <h2 my2>
      Text Ellipsis
    </h2>
    <div flex="~ col" gap2>
      <p w100 ellipsis>
        {{ article }}
      </p>
      <p w100 ellipsis-1>
        {{ article }}
      </p>
      <p w100 ellipsis-2>
        {{ article }}
      </p>
      <p w100 ellipsis-3>
        {{ article }}
      </p>
    </div>
  </div>
</template>
