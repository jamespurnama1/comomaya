<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main class="min-h-screen flex justify-center py-32 bg-beige z-0 relative mx-28 md:justify-start">
  <section>
    <h1 class="text-5xl font-semibold">{data.title}</h1>
    <p>{data.desc}</p>
    <p>{data.client}</p>
    <p>{data.industry}</p>
    <p>{data.services}</p>
    <p>share</p>
  </section>
  <div>{@html data.content}</div>
</main>
