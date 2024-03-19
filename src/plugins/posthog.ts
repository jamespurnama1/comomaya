import posthog from "posthog-js";
import type { App } from 'vue';

export default {
  install(app: App) {
    app.config.globalProperties.$posthog = posthog.init(
      import.meta.env.VITE_POSTHOG_API,
      {
        api_host: "https://eu.posthog.com",
      }
    );
  },
};
