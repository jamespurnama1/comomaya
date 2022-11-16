import { defineComponent, withAsyncContext, ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    target: null
  },
  async setup(__props) {
    let __temp, __restore;
    async function load() {
      const res2 = await fetch("https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?query=%7B%22type%22%3A%22portfolio-list%22%2C%22slug%22%3A%22list%22%7D&pretty=true&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&props=metadata");
      const landing = await res2.json();
      await setTimeout(() => {
      }, 5e3);
      if (res2.ok)
        return landing;
      return {
        status: res2.status
      };
    }
    let res = ([__temp, __restore] = withAsyncContext(() => load()), __temp = await __temp, __restore(), __temp).objects[0].metadata;
    const imgSrc = ref("");
    const imgAlt = ref("");
    ref(false);
    onMounted(() => {
      loadContent();
      async function loadContent() {
        await load();
        document.querySelector(".imgP");
      }
    });
    const link = res.list.map((x) => ({
      rel: "preload",
      as: "image",
      href: x.thumbnail.toString()
    }));
    useHead({
      title: "COMOMAYA - Portfolio",
      meta: [
        {
          name: "COMOMAYA",
          content: "Portfolio"
        }
      ],
      link
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex justify-center py-32 bg-beige z-0 relative mx-10 md:mx-28 md:justify-start" }, _attrs))}><img${ssrRenderAttr("src", imgSrc.value)}${ssrRenderAttr("alt", imgAlt.value)} class="imgP fixed max-w-[10rem] md:max-w-md h-auto top-0 left-0 opacity-0 z-20 pointer-events-none"><ul class="grid z-10"><!--[-->`);
      ssrRenderList(unref(res).list, (portfolio, i) => {
        _push(`<li><a${ssrRenderAttr("href", `/portfolio/${portfolio.slug}`)}><div class="flex py-3 md:py-10 flex-wrap"><h2 class="text-4xl md:text-7xl whitespace-nowrap font-semibold">${ssrInterpolate(portfolio.title)}</h2><h3 class="text-xs md:text-s font-semibold whitespace-nowrap">${ssrInterpolate(portfolio.metadata.type)}</h3></div></a></li>`);
      });
      _push(`<!--]--></ul></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
