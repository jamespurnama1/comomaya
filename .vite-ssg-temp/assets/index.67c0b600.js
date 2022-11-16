import { defineComponent, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import { gsap } from "gsap";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      const split = document.querySelectorAll(".split span");
      if (split) {
        gsap.to(split, {
          y: "-0.1em",
          duration: 0.5,
          stagger: 0.2
        });
        gsap.to(split, {
          autoAlpha: 1,
          stagger: 0.2
        });
      }
    });
    useHead({
      title: "COMOMAYA - Contact Us",
      meta: [
        {
          name: "COMOMAYA",
          content: "Contact Us"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "bg-black mx-auto flex flex-col justify-center pt-10 md:pt-20" }, _attrs))} data-v-eb7ffe68><section class="flex flex-col mx-auto justify-center min-h-screen py-10" data-v-eb7ffe68><h2 class="text-active mx-5 md:mx-0 font-semibold tracking-widest mb-3" data-v-eb7ffe68>CONTACT US</h2><h1 class="split mx-5 md:mx-0 max-w-4xl text-white text-4xl md:text-9xl font-semibold overflow-hidden" data-v-eb7ffe68><span data-v-eb7ffe68>Let&#39;s</span><span data-v-eb7ffe68>kickstart</span><span data-v-eb7ffe68>your</span><span data-v-eb7ffe68>new</span><span data-v-eb7ffe68>project...</span></h1></section><section class="md:py-52 py-32 md:mx-52 flex md:flex-row mx-10 flex-col" data-v-eb7ffe68><span class="mr-5 md:w-1/3" data-v-eb7ffe68><p class="text-active font-semibold tracking-widest mb-3" data-v-eb7ffe68>GIVE US A CALL</p><a href="tel:+6594245994" data-v-eb7ffe68><p class="text-white font-semibold mb-5" data-v-eb7ffe68>+65 9424 5994</p></a><p class="text-active font-semibold tracking-widest mb-3" data-v-eb7ffe68>WRITE TO US</p><a href="mailto:ridhisain@comomaya.com" data-v-eb7ffe68><p class="text-white font-semibold mb-5" data-v-eb7ffe68>ridhisain@comomaya.com</p></a></span><form action="https://formspree.io/f/xqkjgbng" method="POST" class="flex flex-wrap md:w-2/3 content-start" data-v-eb7ffe68><span class="flex w-full" data-v-eb7ffe68><input class="bg-black text-white placeholder-white border-white border-b mb-5 mr-5 w-1/2 focus:outline-none h-12" type="text" name="name" placeholder="Name" data-v-eb7ffe68><input class="bg-black text-white placeholder-white border-white border-b mb-5 ml-5 w-1/2 focus:outline-none h-12" type="email" name="email" placeholder="E-mail" data-v-eb7ffe68></span><input class="bg-black text-white placeholder-white border-white border-b my-5 w-full focus:outline-none h-12" type="text" name="subject" placeholder="Subject" data-v-eb7ffe68><textarea class="bg-black text-white placeholder-white border-white border-b my-5 resize-none w-full h-52 focus:outline-none" placeholder="Your Message" name="message" data-v-eb7ffe68></textarea><button class="z-0 relative bg-beige text-black py-3 px-1 w-full my-5 font-semibold h-12 hover:bg-black hover:text-beige hover:ring-beige" type="submit" data-v-eb7ffe68>Submit Message</button></form></section></main>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_eb7ffe68_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb7ffe68"]]);
export {
  index as default
};
