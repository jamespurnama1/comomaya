import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('store', {
  state: () => {
    return {
      featured: [] as Featured[],
      fetched: false
    }
  },

  getters: {
    getFeatured(state) {
      return state.featured;
    },

    // carouselCount(state) {
    //   return Math.ceil(state.featured.length / 3) : Math.ceil(content)
    // },

    isFetched(state) {
      return state.fetched;
    }
  },

  actions: {
    async load() {
      if (this.featured.length) return
      axios.get('https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?query=%7B%22type%22%3A%22landing%22%2C%22slug%22%3A%22home%22%7D&pretty=true&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&props=metadata')
      .then((res) => {
        this.featured = res.data.objects[0].metadata.featured
      }).catch((err) => {
        this.featured = []
        console.error(err)
        return err
      })

      this.fetched = true;
    }
  }
})