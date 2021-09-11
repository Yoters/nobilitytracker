import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state: {
    scrapeData: {},
    loaded: false
  },
  mutations: {
    UPDATE_DATA(state, data) {
      state.scrapeData = data
    },
    HAS_LOADED(state, data) {
      state.loaded = data
    },
  },
  actions: {
    updateStats({commit}) {
      axios.get("https://api.nobilitytracker.com/")
      .then(res => {
        commit('UPDATE_DATA', res.data)
        commit('HAS_LOADED', true)
      })
      .catch(e => {
        console.log(e)
      })
    },
  },
  getters: {
    price:(state) => (state.scrapeData.priceUSD ? state.scrapeData.priceUSD : 0),
    priceChange24h:(state) => (state.scrapeData.priceChange24h ? state.scrapeData.priceChange24h : 0),
    volume24hUSD:(state) => (state.scrapeData.volume24hUSD ? state.scrapeData.volume24hUSD : 0),
    marketcap:(state, getters) => (59667242681.2201 * getters.price) / 1000000,
    holders:(state) => (state.scrapeData.totalHolders ? state.scrapeData.totalHolders : 0),
    supply:(state) => (state.scrapeData.totalSupply ? state.scrapeData.totalSupply : 0),
    dataLoaded:(state) => state.loaded
  }
});