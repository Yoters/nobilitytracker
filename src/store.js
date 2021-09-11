import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state: {
    v1Data: {},
    v2Data: {},
    scrapeData: {}
  },
  mutations: {
    UPDATE_V1FETCH(state, data) {
      state.v1Data = data
    },
    UPDATE_V2FETCH(state, data) {
      state.v2Data = data
    },
    UPDATE_SCRAPE(state, data) {
      state.scrapeData = data
    }
  },
  actions: {
    updateStats({commit}) {
      axios.get("https://api.dex.guru/v1/tokens/0xa67a13c9283da5aabb199da54a9cb4cd8b9b16ba?network=bsc")
      .then(res => {
        commit('UPDATE_V1FETCH', res.data)
      })
      .catch(e => {
        console.log(e)
      })
    
      axios.get("https://api.dex.guru/v2/tokens/0xa67a13c9283da5aabb199da54a9cb4cd8b9b16ba/price?amm=pancakeswap&network=bsc")
      .then(res => {
        commit('UPDATE_V2FETCH', res.data)
      })
      .catch(e => {
        console.log(e)
      })
      axios.get("https://api.nobilitytracker.com/")
      .then(res => {
        commit('UPDATE_SCRAPE', res.data)
      })
      .catch(e => {
        console.log(e)
      })
    },
  },
  getters: {
    price:(state) => (state.v2Data.token_price_usd ? state.v2Data.token_price_usd : 0),
    priceChange24h:(state) => (state.v1Data.priceChange24h ? state.v1Data.priceChange24h : 0),
    volume24hUSD:(state) => (state.v1Data.volume24hUSD ? state.v1Data.volume24hUSD : 0),
    marketcap:(state, getters) => (59667242681.2201 * getters.price) / 1000000,
    holders:(state) => (state.scrapeData.totalHolders ? state.scrapeData.totalHolders : 0),
    supply:(state) => (state.scrapeData.totalSupply ? state.scrapeData.totalSupply : 0)

  }
});