import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('store', {
  state: () => {
    return {
      featured: [] as featured[],
      services: [] as service[],
      fetched: false,
      width: 0
    }
  },

  getters: {
    getFeatured(state) {
      return state.featured
    },

    getWidth(state) {
      return state.width
    },

    getServices(state) {
      return state.services
    },

    isFetched(state) {
      return state.fetched
    }
  },

  actions: {
    async load() {
      if (this.featured.length) return
      axios
      .get(`https://api.cosmicjs.com/v3/buckets/comomayacom-production/objects/64803dec2fb5fafdbb9670bb?read_key=${import.meta.env.VITE_COSMIC_KEY}&depth=1&props=metadata`)
      .then((res) => {
        this.featured = res.data.object.metadata.featured
        this.services = res.data.object.metadata.services
      }).catch((err) => {
        this.featured = []
        console.error(err)
        return err
      })
      this.fetched = true;
    }
  }
})