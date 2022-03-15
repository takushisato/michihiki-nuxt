<template>
    <div>
        <!-- <img src="https://api.tide736.net/tide_image.php?pc=28&hc=9&yr=2022&mn=3&dy=15&rg=day&w=768&h=512&lc=blue&gcs=cyan&gcf=blue&ld=on&ttd=on&tsmd=on"> -->
        <h1>テスト</h1>
        <!-- <span>{{ items.tide.port.harbor_namej }}</span> -->
        <span>{{ items.tide }}</span>
    </div>
</template>
 
<script>
export default {
    async asyncData({ app }) {
        let items = await app.$axios.$get('/api')
        return {
            items
        }
    },
};

</script>
https://zenn.dev/mouse_484/articles/nuxt-axios-cors

https://zenn.dev/code_diver/articles/dcf0ec9803cb55

https://tech.noricgeographic.com/nuxt-js%E3%81%AEapi%E3%82%B3%E3%83%BC%E3%83%AB%E6%99%82%E3%81%AEcors%E5%AF%BE%E7%AD%96/
