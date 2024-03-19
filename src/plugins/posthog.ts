import posthog from "posthog-js";

export default {
  install(app) {
    app.config.globalProperties.$posthog = posthog.init(
      import.meta.env.VITE_POSTHOG_API,
      {
        api_host: "https://eu.posthog.com",
      }
    );
  },
};
