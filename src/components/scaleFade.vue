<script setup lang="ts">
  import { gsap } from "gsap"

  // function scaleFade(node: HTMLElement, {start, duration}: {start: number, duration: number}) {
  //   return {
  //     duration,
  //     css: (t: number, u: number) => `transform: scale(${Math.abs(start - t)}); opacity: ${Math.max(0, t - 0.5)}`
  //   }
  // }

  function onEnter(element: HTMLElement, done: GSAPCallback) {
    gsap.to(element, {
      scale: 1,
      opacity: 1,
      onComplete: done,
    })
  }
  function onLeave(element: HTMLElement, done: GSAPCallback) {
    gsap.to(element, {
      scale: 0,
      opacity: 0,
      onComplete: done,
    })
  }
</script>

<template>
  <transition-group
    name="scaleFade"
    @enter="onEnter"
    @leave="onLeave">
    <slot></slot>
  </transition-group>
</template>

<style>
/*
  Necessary CSS...
  Note: avoid using <style scoped> here since it
  does not apply to slot content.
*/
</style>