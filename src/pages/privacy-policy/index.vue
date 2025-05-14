<script setup lang="ts">
import { useSchemaOrg } from '@unhead/schema-org';
import { useHead } from '@unhead/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'Privacy Policy - COMOMAYA',
  meta: [
    {
      name: 'description',
      content: 'Privacy Policy.',
    },
    {
      property: 'og:title',
      content: 'Privacy Policy - COMOMAYA'
    },
    {
      property: 'og:description',
      content: 'Privacy Policy.'
    },
    {
      property: 'og:url',
      content: 'https://www.comomaya.com/privacy-policy'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:site_name',
      content: 'COMOMAYA'
    },
  ],
})

useSchemaOrg([
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.comomaya.com",
    "url": `https://www.comomaya.com/privacy-policy`,
    "identifier": `https://www.comomaya.com/privacy-policy`,
    "name": "Privacy Policy",
    "description": "Privacy Policy.",
  }
])

</script>

<template>
  <main class="bg-stone-300">
    <div class="max-w-[1920px] mx-auto px-9 lg:px-20 xl:px-36 flex flex-col justify-center pt-24 pb-10 md:pt-20">
      <div class="min-h-[50vh] md:min-h-[75vh] justify-center flex flex-col gap-4">
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Privacy Policy
        </h1>
        <p class="split text-stone-500 text-sm font-extrabold overflow-hidden">
          Last updated: <date>13 May 2025</date>
        </p>
        <p class="mt-5 text-white">
          At Comomaya (www.comomaya.com), your privacy is important to us. This Privacy Policy outlines how we collect,
          use, and protect your information when you visit our website, interact with our content, or engage our
          services.
        <ul class="my-2">
          <li>
            <h3 class="text-active font-extrabold text-xl">1. Who We Are</h3>
            Comomaya is a design and branding studio based in Singapore. We specialize in helping brands find clarity
            and expression through strategy design, and storytelling.
          </li>
          <br />
          <li>
            <h3 class="text-active font-extrabold text-xl">2. Information We Collect</h3>
            We may collect the following types of information:
            <br />
            <strong>Personal Information</strong>: When you contact us through our website or subscribe to our
            newsletter, we may collect your name, email address, and any other information you voluntarily provide.
            <strong>Usage Data</strong>: We collect non-identifying data about how you use our site, such as pages
            visited, time spent,
            browser type, and referring websites. This helps us improve your experience.
            <strong>Cookies</strong>: We use cookies to track usage and improve our site's performance. You can disable
            cookies via your browser settings.
          </li>
          <br />
          <li>
            <h3 class="text-active font-extrabold text-xl">3. How We Use Your Information</h3>
            We use your information to:
            <br />
            Respond to inquiries or requests
            Improve our website and services
            Send updates or marketing communications
            Monitor and analyze usage trends via analytics tools (like Google Analytics)
          </li>
          <br />
          <li>
            <h3 class="text-active font-extrabold text-xl">4. Sharing Your Information</h3>
            We do not sell or trade your personal data. We may share limited information with trusted third-party
            services (e.g., email marketing platforms or analytics tools) to support our operations, but only under
            confidentiality agreements.
          </li>
          <br />
          <li>
            <h3 class="text-active font-extrabold text-xl">5. Data Security</h3>
            <br />
            We take reasonable steps to protect your personal information. However, please note that no online method
            of transmission or storage is 100% secure.
          </li>
          <br />
          <li>
            <h3 class="text-active font-extrabold text-xl">6. Your Rights</h3>
            You may request to:
            <br />
            Access, update, or delete your personal information
            Unsubscribe from our emails at any time
            To make any of these requests, email us at: ridhisain@comomaya.com
          </li>
          <br />
          <li>
            <h3 class="text-active font-extrabold text-xl">7. Links to Other Websites</h3>
            Our site may contain links to external sites we don't control. We're not responsible for the privacy
            practices of those sites.
          </li>
          <br />
          <li>
            <h3 class="text-active font-extrabold text-xl">8. Changes to This Policy</h3>
            We may update this policy occasionally. When we do, we'll revise the “Last updated” date above. We
            encourage you to review it periodically.
          </li>
          <br />
          <li>
            <h3 class="text-active font-extrabold text-xl">9.Contact Us</h3>
            For any questions regarding this policy, please contact us at:
            <br />
            <a aria-label="e-mail" href="mailto:ridhisain@comomaya.com">📧 ridhisain@comomaya.com</a>
            <br />
            <router-link aria-label="website" to="/">🌐 www.comomaya.com</router-link>
          </li>
        </ul>
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
