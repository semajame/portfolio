<template>
  <div class="bento col-span-3">
    <div class="flex justify-between items-center">
      <h3 class="font-bold flex items-center gap-3">
        <svg
          data-testid="geist-icon"
          height="16"
          stroke-linejoin="round"
          viewBox="0 0 16 16"
          width="16"
          style="color: currentcolor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0.0994263L8.40611 0.360987L15.6561 5.03048L16 5.25197V5.66102V10.3305V10.7396L15.6561 10.961L8.40611 15.6305L8 15.8921L7.59389 15.6305L0.343892 10.961L0 10.7396V10.3305V5.66102V5.25197L0.343892 5.03048L7.59389 0.360987L8 0.0994263ZM1.5 9.16029L3.24781 7.99577L1.5 6.83124V9.16029ZM2.0654 5.70591L4.375 7.24474L7.375 5.24591L7.375 2.28616L2.0654 5.70591ZM11.625 7.24474L8.625 5.24591V2.28616L13.9346 5.70591L11.625 7.24474ZM14.5 6.83124L12.7522 7.99577L14.5 9.16029V6.83124ZM10.4978 7.99577L8 6.33153L5.50219 7.99577L8 9.66L10.4978 7.99577ZM7.375 10.7456L4.375 8.74679L2.0654 10.2856L7.375 13.7054V10.7456ZM8.625 13.7054L13.9346 10.2856L11.625 8.74679L8.625 10.7456V13.7054Z"
            fill="currentColor"
          ></path>
        </svg>
        Recent Projects
      </h3>
      <NuxtLink to="/projects" class="text-gray-300 text-xs">
        View all ->
      </NuxtLink>
    </div>

    <div
      class="sm:my-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-2 flex flex-col gap-3 mt-5"
    >
      <NuxtLink
        v-for="(project, index) in projects"
        :key="index"
        :to="project.link"
        target="_blank"
        class="bento transition-all duration-100 hover:bg-zinc-900"
      >
        <h3 class="text-sm font-bold">
          {{ project.title }}
        </h3>
        <p class="text-xs my-1">
          {{ project.description }}
        </p>
        <p
          class="link text-xs border border-black p-2 bg-black rounded-md mt-2"
        >
          {{ project.displayLink }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'The Greenery',
    description: 'Ecommerce',
    link: 'https://greenery-ecommerce.vercel.app/',
    displayLink: 'greenery-ecommerce.vercel.app',
  },
  {
    title: 'Wild Kingdom',
    description: 'Real animal information using api',
    link: 'https://wild-kingdom.vercel.app/',
    displayLink: 'wild-kingdom.vercel.app',
  },
  {
    title: 'Apple Ui',
    description: 'Frontend of the famous technology brand Apple',
    link: 'https://apple-uii.vercel.app/',
    displayLink: 'apple-uii.vercel.app',
  },
  {
    title: 'Benedicto College Scheduling',
    description: 'Online class scheduling',
    link: 'https://bc-scheduling-1024.vercel.app/',
    displayLink: 'bc-scheduling-1024.vercel.app',
  },
]
</script>
