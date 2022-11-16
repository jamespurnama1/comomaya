import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      featured: [],
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
      const response = await fetch('https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?query=%7B%22type%22%3A%22landing%22%2C%22slug%22%3A%22home%22%7D&pretty=true&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&props=metadata');
      try {
        const result: Landing = await response.json();
        this.featured = result.objects[0].metadata.featured;
      } catch (err) {
        this.featured = [];
        console.error('Error loading new arrivals:', err);
        return err;
      }

      this.fetched = true;
    }
  }
})