import { ViteSSG } from "vite-ssg";
import { defineComponent, ref, reactive, onMounted, onUpdated, resolveComponent, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, Transition, Suspense, createCommentVNode, useSSRContext, withAsyncContext, watch, onBeforeUnmount, unref, mergeProps } from "vue";
import { ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { defineStore, createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faLinkedin, faTwitter, faPinterest, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp, faBook, faPencil, faLaptop, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const style = "";
const fonts = "";
const transition = "";
const _imports_0 = "/COMOMAYA_Logo_Beige_800x90.png";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "COMOMAYA - Branding | Design | Digital | Social Media",
      meta: [
        {
          name: "COMOMAYA",
          content: "Branding | Design | Digital | Social Media"
        }
      ]
    });
    const innerWidth = ref(0);
    const scrollY = ref(0);
    const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-beige transition ease transform duration-300`;
    const linkSelected = ref(false);
    const links = [
      "",
      "portfolio",
      "about",
      "contact"
    ];
    const target = reactive({ x: 0, y: 0 });
    let hoverables = null;
    onMounted(() => {
      innerWidth.value = window.innerWidth;
      document.addEventListener("resize", () => {
        innerWidth.value = window.innerWidth;
      });
      document.addEventListener("scroll", () => {
        scrollY.value = window.scrollY;
      });
      const cursor = document.querySelector(".cursor");
      let raf = requestAnimationFrame(render);
      document.addEventListener("mousemove", function(e) {
        target.x = e.clientX, target.y = e.clientY, cursor ? cursor.style.opacity = "1" : null;
        !raf ? raf = requestAnimationFrame(render) : null;
      });
      function render() {
        if (!cursor)
          return;
        if (linkSelected.value) {
          cursor.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) scale(3)`;
        } else {
          cursor.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
        }
        raf = requestAnimationFrame(render);
      }
    });
    function hoverLink() {
      hoverables = document.querySelectorAll("a, button");
      if (!hoverables || !hoverables.length)
        return;
      hoverables.forEach((item) => {
        if (item.getAttribute("listener") === "true")
          return;
        item.addEventListener("mouseover", () => {
          linkSelected.value = true;
        });
        item.addEventListener("mouseleave", () => {
          linkSelected.value = false;
        });
      });
    }
    onUpdated(() => {
      hoverLink();
    });
    const opened = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_router_view = resolveComponent("router-view");
      _push(`<!--[--><div class="${ssrRenderClass([[innerWidth.value < 570 ? "!opacity-0" : ""], "cursor origin-center pointer-events-none z-50 fixed mix-blend-difference w-6 h-6 -top-3 -left-3 rounded-3xl bg-white opacity-0 transition-transform ease-out"])}"></div><nav class="${ssrRenderClass([[scrollY.value > 50 && _ctx.$route.path !== "/" || _ctx.$route.path !== "/" ? "bg-opacity-100" : ""], "fixed w-screen top-0 left-0 flex py-7 px-9 justify-between items-center z-30 transition-all bg-beige bg-opacity-0 origin-top-left"])}"><a href="/"><img${ssrRenderAttr("src", _imports_0)} alt="COMOMAYA" class="${ssrRenderClass([[opened.value || scrollY.value > 50 && _ctx.$route.path !== "/" || _ctx.$route.path !== "/" ? "brightness-0" : ""], "logo transition-all duration-700 h-9 img-responsive origin-top-left"])}"></a><button class="flex flex-col h-12 w-12 justify-center items-center group p-2 -m-2 transition-transform"><div class="${ssrRenderClass([
        opened.value ? "rotate-45 translate-y-1.5 opacity-100 !bg-black" : "opacity-100",
        genericHamburgerLine,
        scrollY.value > 50 && _ctx.$route.path !== "/" || _ctx.$route.path !== "/" ? "bg-black" : ""
      ])}"></div><div class="${ssrRenderClass([
        opened.value ? "opacity-0 !bg-black" : "opacity-100",
        genericHamburgerLine,
        scrollY.value > 50 && _ctx.$route.path !== "/" || _ctx.$route.path !== "/" ? "bg-black" : ""
      ])}"></div><div class="${ssrRenderClass([
        opened.value ? "-rotate-45 -translate-y-1.5 opacity-100 !bg-black" : "opacity-100",
        genericHamburgerLine,
        scrollY.value > 50 && _ctx.$route.path !== "/" || _ctx.$route.path !== "/" ? "bg-black" : ""
      ])}"></div></button></nav><nav style="${ssrRenderStyle(opened.value ? null : { display: "none" })}" class="moreNav bg-beige w-screen fixed left-0 top-0 z-20 h-screen flex items-center md:justify-center flex-col"><ul${ssrRenderAttrs({
        name: "stagger-in",
        style: { "--total": links.length },
        class: "text-center mt-24 mb-8"
      })}>`);
      ssrRenderList(links, (link, i) => {
        _push(`<li style="${ssrRenderStyle({ "--i": i })}" class="${ssrRenderClass([[_ctx.$route.path === `/${link}` ? "text-active" : ""], "my-3 text-lg md:text-3xl hover:text-active"])}"><a${ssrRenderAttr("href", `/${link}`)}>${ssrInterpolate(link === "" ? "home" : link)}</a></li>`);
      });
      _push(`</ul><span${ssrRenderAttrs({
        name: "fade",
        class: "flex justify-center mb-10"
      })}><a href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", "instagram"],
        size: "xl",
        class: "mx-2 hover:text-active"
      }, null, _parent));
      _push(`</a><a href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", "linkedin"],
        size: "xl",
        class: "mx-2 hover:text-active"
      }, null, _parent));
      _push(`</a></span></nav><div style="${ssrRenderStyle(opened.value ? null : { display: "none" })}" class="fixed w-screen h-screen bg-opacity-50 bg-black z-10"></div><button style="${ssrRenderStyle(scrollY.value > 50 ? null : { display: "none" })}" class="flex justify-center items-center fixed bottom-10 right-10 bg-black w-10 h-10 z-20">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fas", "angle-up"],
        size: "lg",
        class: "mx-2 text-beige"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_router_view, null, {
        default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (Component) {
              ssrRenderSuspense(_push2, {
                fallback: () => {
                  _push2(`<div class="flex justify-center items-center h-screen"${_scopeId}><h1 class="text-xl"${_scopeId}>Loading...</h1></div>`);
                },
                default: () => {
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), { target }, null), _parent2, _scopeId);
                },
                _: 2
              });
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              Component ? (openBlock(), createBlock(Transition, {
                key: 0,
                name: "fade"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Suspense, null, {
                    fallback: withCtx(() => [
                      createVNode("div", { class: "flex justify-center items-center h-screen" }, [
                        createVNode("h1", { class: "text-xl" }, "Loading...")
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(Component), { target }, null, 8, ["target"]))
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024)) : createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<footer class="fixed bottom-0 my-5 ml-10"><p class="text-xs mix-blend-difference text-white"> \xA9 2022 COMOMAYA. All rights reserved. </p></footer><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useStore = defineStore("store", {
  state: () => {
    return {
      featured: [],
      fetched: false
    };
  },
  getters: {
    getFeatured(state) {
      return state.featured;
    },
    isFetched(state) {
      return state.fetched;
    }
  },
  actions: {
    async load() {
      if (this.featured.length)
        return;
      const response = await fetch("https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?query=%7B%22type%22%3A%22landing%22%2C%22slug%22%3A%22home%22%7D&pretty=true&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&props=metadata");
      try {
        const result = await response.json();
        this.featured = result.objects[0].metadata.featured;
      } catch (err) {
        this.featured = [];
        console.error("Error loading new arrivals:", err);
        return err;
      }
      this.fetched = true;
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store2 = useStore();
    store2.load();
    const bgImages = ([__temp, __restore] = withAsyncContext(() => store2.getFeatured.map((x) => x.thumbnail)), __temp = await __temp, __restore(), __temp);
    const link = bgImages.map((x) => ({
      rel: "preload",
      as: "image",
      href: x.toString()
    }));
    useHead({
      link
    });
    let imageFade;
    async function loadContent() {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const skewSetter = gsap.quickSetter(".projectList", "skewY", "deg");
      let proxy = { skew: 0 };
      const clamp = gsap.utils.clamp(-20, 20);
      gsap.set(".projectList", { transformOrigin: "right center", force3D: true });
      const allBGs = gsap.utils.toArray(".bg");
      imageFade = gsap.timeline({ defaults: { ease: "none", stagger: -2 } }).to(allBGs, { autoAlpha: 1, duration: 0.5 }).to({}, { duration: 1 }, 1);
      ScrollTrigger.create({
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        id: "main",
        animation: imageFade,
        scrub: 0.3,
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -300);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
          }
        }
      });
    }
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      watch(() => store2.isFetched, (x) => {
        if (!x)
          return;
        loadContent();
      });
    });
    onBeforeUnmount(() => {
      if (imageFade)
        imageFade.kill();
      if (!ScrollTrigger.getById("main"))
        return;
      ScrollTrigger.getById("main").kill();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      if (unref(store2).getFeatured.length) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex justify-center py-20" }, _attrs))}><ul class="portfoliosList flex flex-col justify-center m-auto text-center group z-0"><!--[-->`);
        ssrRenderList(unref(store2).getFeatured, (portfolio, i) => {
          _push(`<li class="projectList py-52 md:py-24"><a${ssrRenderAttr("href", `/portfolio/${portfolio.slug}`)} class="transition-all group-hover:opacity-50 hover:!opacity-100"><h2 class="listChildren text-5xl font-bold text-white md:text-9xl">${ssrInterpolate(portfolio.title)}</h2></a></li>`);
        });
        _push(`<!--]--></ul><!--[-->`);
        ssrRenderList(unref(store2).getFeatured.map((x) => x.thumbnail).slice().reverse(), (image, i) => {
          _push(`<img${ssrRenderAttr("src", image.toString())}${ssrRenderAttr("alt", unref(store2).getFeatured.reverse()[i].title)} class="bg h-screen fixed top-0 left-0 w-screen object-cover opacity-0" style="${ssrRenderStyle(`z-index: ${-i - 5}`)}">`);
        });
        _push(`<!--]--><img class="min-h-screen fixed top-0 left-0 w-screen object-cover" style="${ssrRenderStyle(`z-index: ${-unref(store2).getFeatured.map((x) => x.thumbnail).length - 6}`)}"${ssrRenderAttr("src", unref(store2).getFeatured.map((x) => x.thumbnail)[0].toString())}${ssrRenderAttr("alt", unref(store2).getFeatured[0].title)}><span class="md:block fixed left-0 ml-8 bottom-10 flex flex-col justify-center"><a href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fab", "instagram"],
          size: "xl",
          class: "text-beige m-2 hover:text-active"
        }, null, _parent));
        _push(`</a><a href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fab", "linkedin"],
          size: "xl",
          class: "text-beige m-2 hover:text-active"
        }, null, _parent));
        _push(`</a></span></main>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pages_import_0__ = () => import("./assets/index.0442833a.js");
const __pages_import_1__ = () => import("./assets/index.67c0b600.js");
const __pages_import_2__ = () => import("./assets/index.9e762c06.js");
const __pages_import_4__ = () => import("./assets/_slug_.0e6199fe.js");
const routes = [{ "name": "portfolio", "path": "/portfolio", "component": __pages_import_0__, "props": true }, { "name": "contact", "path": "/contact", "component": __pages_import_1__, "props": true }, { "name": "about", "path": "/about", "component": __pages_import_2__, "props": true }, { "name": "index", "path": "/", "component": _sfc_main$1, "props": true }, { "name": "portfolio-slug", "path": "/portfolio/:slug", "component": __pages_import_4__, "props": true }];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "scaleFade",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});
const scaleFade_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/scaleFade.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
library.add(faAngleUp, faInstagram, faLinkedin, faTwitter, faPinterest, faTelegram, faBook, faPencil, faLaptop, faTrophy);
const store = createPinia();
const createApp = ViteSSG(
  _sfc_main$2,
  {
    routes
  },
  ({ app, router, routes: routes2, isClient, initialState }) => {
    app.component("font-awesome-icon", FontAwesomeIcon);
    app.component("scaleFade", _sfc_main);
    app.use(store);
  }
);
export {
  createApp,
  useStore as u
};
