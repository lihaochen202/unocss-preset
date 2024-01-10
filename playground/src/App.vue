<script setup lang="ts">
const article = 'This post will be a bit longer than usual. It’s quite a big announcement to me, and there are many things I want to talk about. I’ll be appreciated if you take the time to read through it. The table of contents is hidden on the left if you are on a desktop. Hope you enjoy :)'
</script>

<template>
  <h2>Text Ellipsis</h2>
  <p mt1 w100 ellipsis>
    {{ article }}
  </p>
  <p mt1 w100 ellipsis-1>
    {{ article }}
  </p>
  <p mt1 w100 ellipsis-2>
    {{ article }}
  </p>
  <p mt1 w100 ellipsis-3>
    {{ article }}
  </p>
  <h2>Flex/Grid Compositions</h2>
  <div flex="~ center" gap10>
    <div>ss</div>
    <div>ss</div>
    <div>ss</div>
  </div>
  <div grid="~ cols-2 center" h40>
    <div>
      ss
    </div>
    <div>
      ss
    </div>
    <div>
      ss
    </div>
    <div>
      ss
    </div>
  </div>
  <h2>Position</h2>
  <h3>Absolute</h3>
  <div relative w50 h50 bg-gray b--2 rd of-hidden>
    <div absolute="~ t" h1 bg-blue />
    <div absolute="~ t-2" h1 bg-blue />
    <div absolute="~ r" w1 bg-blue />
    <div absolute="~ r-2" w1 bg-blue />
    <div absolute="~ b" h1 bg-blue />
    <div absolute="~ b-2" h1 bg-blue />
    <div absolute="~ l" w1 bg-blue />
    <div absolute="~ l-2" w1 bg-blue />
    <div absolute="~ tl" w5 h5 bg-blue />
    <div absolute="~ tl-5" top-2 w5 h5 bg-blue />
    <div absolute="~ tr" w5 h5 bg-blue />
    <div absolute="~ tr-5" top-2 w5 h5 bg-blue />
    <div absolute="~ br" w5 h5 bg-blue />
    <div absolute="~ br-5" w5 h5 bg-blue />
    <div absolute="~ bl" w5 h5 bg-blue />
    <div absolute="~ bl-5" w5 h5 bg-blue />
    <div absolute="~ center" w5 h5 bg-blue />
    <div absolute="~ full" bg-blue:50 />
  </div>
  <div size-20 rd-full bg-blue />
</template>
