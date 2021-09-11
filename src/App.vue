<template>
<div class="app">
  <Navbar />
  <div class="body mx-auto">
    <Stats/>
  </div>
  <div>
    <p></p>
  </div>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Stats from './components/Stats.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Navbar,
    Stats
  },
  data() {
    return {
      v1Data: {
        priceUSD: 0,
        volume24hUSD: 0,
        liquidityUSD: 0
      },
      v2Data: {}
    }
  },
  created() {
    axios.get("https://api.dex.guru/v1/tokens/0xa67a13c9283da5aabb199da54a9cb4cd8b9b16ba?network=bsc")
    .then(res => {
      this.v1Data = res.data;
    })
    .catch(e => {
      console.log(e)
    })

    axios.get("https://api.dex.guru/v2/tokens/0xa67a13c9283da5aabb199da54a9cb4cd8b9b16ba/price?amm=pancakeswap&network=bsc")
    .then(res => {
      this.v2Data = res.data;
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>

<style>
.body {
  max-width: 800px;

}
</style>
