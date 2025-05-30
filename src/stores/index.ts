import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      featured: [] as featured[],
      services: [] as service[],
      testimonials: [] as testimonials[],
      fetched: false,
      width: 0,
      submitted: false,
      form: {
        name: '',
        email: '',
        phone: '',
      },
    };
  },

  getters: {
    getFeatured(state) {
      return state.featured;
    },

    getWidth(state) {
      return state.width;
    },

    getServices(state) {
      if (!state.services.length) {
        useStore()
          .load()
          .then((res) => {
            return state.services;
          });
        } else {
        return state.services;
      }
    },

    getTestimonials(state) {
      return state.testimonials;
    },

    isFetched(state) {
      return state.fetched;
    },
  },

  actions: {
    async load(): Promise<AxiosResponse<any, any> | undefined> {
      if (this.featured.length) return;
      axios
        .get(
          `https://api.cosmicjs.com/v3/buckets/comomayacom-production/objects/64803dec2fb5fafdbb9670bb?read_key=${
            import.meta.env.VITE_COSMIC_KEY
          }&depth=1&props=metadata`,
        )
        .then((res) => {
          this.featured = res.data.object.metadata.featured;
          this.services = res.data.object.metadata.services;
          this.testimonials = res.data.object.metadata.testimonials;
          return res;
        })
        .catch((err) => {
          this.featured = [];
          console.error(err);
          return err;
        });
        this.fetched = true;
    },
  },
});
