import { defineComponent, reactive, onMounted, watch, onBeforeUnmount, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useHead } from "@vueuse/head";
import { u as useStore } from "../main.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "vite-ssg";
import "pinia";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/vue-fontawesome";
const swiper = "";
const pagination = "";
const __default__ = {
  components: {
    Swiper,
    SwiperSlide
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "COMOMAYA - Portfolio",
      meta: [
        {
          name: "COMOMAYA",
          content: "Portfolio"
        }
      ]
    });
    const store = useStore();
    const route = useRoute();
    let contentID;
    let thisPage = reactive({});
    const modules = [Pagination];
    store.load();
    async function load() {
      const res = await fetch("https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?pretty=true&query=%7B%22type%22%3A%22portfolios%22%7D&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&limit=20&props=slug,title,content,metadata");
      const landing = await res.json();
      if (res.ok) {
        contentID = landing.objects.map((x) => x.slug).indexOf(route.params.slug);
        thisPage.content = landing.objects[contentID];
        return landing;
      }
      return {
        status: res.status
      };
    }
    function handleResize() {
      ScrollTrigger.refresh();
    }
    load();
    async function loadContent() {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(document.querySelectorAll(".content img").length);
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.set(".content *:not(:first-child)", {
          y: "300px",
          autoAlpha: 0
        });
        gsap.to(".content", {
          scrollTrigger: {
            id: "pin",
            trigger: ".info",
            pin: true,
            start: "top 50vh",
            end: "bottom bottom"
          }
        });
      });
      ScrollTrigger.batch(".content *", {
        start: "top 70%",
        onEnter: (batch) => gsap.to(batch, {
          autoAlpha: 1,
          stagger: 0.1,
          y: 0,
          duration: 0.75
        })
      });
    }
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      handleResize();
      watch(() => thisPage, (x) => {
        if (!x)
          return;
        loadContent();
      });
    });
    onBeforeUnmount(() => {
      if (ScrollTrigger.getById("pin"))
        ScrollTrigger.getById("pin").kill();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "leading-relaxed min-h-screen py-32 bg-beige z-0 relative mx-10" }, _attrs))}>`);
      if ("content" in unref(thisPage) && Object.keys(unref(thisPage).content).length) {
        _push(`<section${ssrRenderAttrs({ class: "flex flex-col md:justify-start md:flex-row justify-center first" })}><div class="content flex flex-col items-center -mt-10 md:mt-0 md:w-2/3 md:pr-20">${unref(thisPage).content.content}</div><div class="info md:w-1/3"><h1 class="text-3xl font-medium md:mt-4 mt-20 mb-5">${ssrInterpolate(unref(thisPage).content.title)}</h1><p>${ssrInterpolate(unref(thisPage).content.metadata.description)}</p><hr class="my-5 border-gray"><div class="flex"><span class="w-28"><p><b class="font-medium">Client</b></p><p><b class="font-medium">Industry</b></p><p><b class="font-medium">Our Services</b></p></span><span class="ml-3"><p>${ssrInterpolate(unref(thisPage).content.metadata.client)}</p><p>${ssrInterpolate(unref(thisPage).content.metadata.industry)}</p><p>${ssrInterpolate(unref(thisPage).content.metadata.our_services)}</p></span></div><hr class="my-5 border-gray"><span class="flex items-center"><p class="w-28"><b class="font-medium">Share</b></p><span class="ml-3 flex"><a href="" target="_blank" rel="noreferrer noopener">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fab", "instagram"],
          size: "lg",
          class: "text-black mr-5 hover:text-active"
        }, null, _parent));
        _push(`</a><a href="" target="_blank" rel="noreferrer noopener">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fab", "linkedin"],
          size: "lg",
          class: "text-black mr-5 hover:text-active"
        }, null, _parent));
        _push(`</a><a href="" target="_blank" rel="noreferrer noopener">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fab", "twitter"],
          size: "lg",
          class: "text-black mr-5 hover:text-active"
        }, null, _parent));
        _push(`</a><a href="" target="_blank" rel="noreferrer noopener">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fab", "pinterest"],
          size: "lg",
          class: "text-black mr-5 hover:text-active"
        }, null, _parent));
        _push(`</a><a href="mailto:">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fab", "telegram"],
          size: "lg",
          class: "text-black mr-5 hover:text-active"
        }, null, _parent));
        _push(`</a></span></span></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="text-3xl text-center font-medium mt-20 mb-3">Selected Works</h2><hr class="my-5 border-active border-2 mx-auto w-1/4">`);
      if (unref(store).isFetched) {
        _push(ssrRenderComponent(unref(Swiper), {
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          modules,
          "slides-per-view": 3,
          "space-between": 10
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(store).getFeatured, (work) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  tag: "a",
                  href: `/portfolio/${work.slug}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="overflow-hidden h-96 w-full bg-cover" style="${ssrRenderStyle(`background-image: url(${work.thumbnail})`)}"${_scopeId2}><p class="absolute z-20 text-white bottom-5 left-10 text-2xl"${_scopeId2}>${ssrInterpolate(work.title)}</p><div class="h-full w-full bg-gradient-to-t from-black via-transparent"${_scopeId2}></div></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "overflow-hidden h-96 w-full bg-cover",
                          style: `background-image: url(${work.thumbnail})`
                        }, [
                          createVNode("p", { class: "absolute z-20 text-white bottom-5 left-10 text-2xl" }, toDisplayString(work.title), 1),
                          createVNode("div", { class: "h-full w-full bg-gradient-to-t from-black via-transparent" })
                        ], 4)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(store).getFeatured, (work) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    tag: "a",
                    href: `/portfolio/${work.slug}`
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "overflow-hidden h-96 w-full bg-cover",
                        style: `background-image: url(${work.thumbnail})`
                      }, [
                        createVNode("p", { class: "absolute z-20 text-white bottom-5 left-10 text-2xl" }, toDisplayString(work.title), 1),
                        createVNode("div", { class: "h-full w-full bg-gradient-to-t from-black via-transparent" })
                      ], 4)
                    ]),
                    _: 2
                  }, 1032, ["href"]);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="swiper-pagination"></div></main>`);
    };
  }
});
const _slug__vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/portfolio/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
