<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
router.push('/404')
</script>

<template>
  <main class="relative min-h-screen flex flex-col items-center justify-center py-20">
    <h1 class="text-3xl md:text-5xl">Page not found</h1>
    <a aria-label="Back to landing page" class="underline hover:text-active" href="/">go back to home page</a>
  </main>
</template>