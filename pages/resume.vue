<template>
  <div class="max-w-2xl mx-auto">
    <div class="flex gap-5 justify-between">
      <NuxtLink to="/" class="text-white hover:underline"
        >&larr; Go Back</NuxtLink
      >
      <h1 class="text-white text-xl">Resume</h1>
    </div>
    <div class="mt-5 p-6 bg-white shadow-md rounded-lg">
      <!-- Header -->
      <div class="text-center mb-6">
        <h1 class="text-2xl font-bold text-black">Anquillano, James</h1>
        <p class="text-sm text-black">
          jamesanquillano@gmail.com | 09369533064
        </p>
      </div>
      <!-- Horizontal Line -->
      <hr class="border-gray-400 my-4" />
      <!-- Objective -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-black">Objective</h2>
        <p class="text-sm mt-2 text-black">
          To land a job in the IT industry that offers a dynamic and
          collaborative work environment, fostering continuous learning and
          professional growth. My adaptability and rapid learning capacity make
          me an asset that thrives in dynamic work environments, consistently
          delivering results.
        </p>
      </div>
      <!-- Horizontal Line -->
      <hr class="border-gray-400 my-4" />
      <!-- Education -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-black">Education</h2>
        <div>
          <p class="text-sm font-bold text-black">2021 - 2025</p>
          <p class="text-sm text-black">Benedicto College</p>
          <p class="text-sm text-black">Mandaue, A.S Fortuna Cebu</p>
          <p class="text-sm text-black">
            Bachelor’s of Science in Information Technology
          </p>
        </div>
      </div>
      <!-- Horizontal Line -->
      <hr class="border-gray-400 my-4" />
      <!-- Experience -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-black">Experience</h2>
        <div v-for="(entry, index) in experiences" :key="index" class="mb-6">
          <div class="flex gap-4 items-start">
            <div>
              <p class="text-sm font-bold text-black">{{ entry.date }}</p>
              <p class="text-sm font-bold text-black">{{ entry.title }}</p>
              <p class="text-sm text-black">{{ entry.location }}</p>
              <p class="text-sm mt-2 text-black">{{ entry.description }}</p>
            </div>
          </div>
          <!-- Line between items -->
          <div
            v-if="index < experiences.length - 1"
            class="border-l-2 border-gray-400 ml-2 h-8"
          ></div>
        </div>
      </div>
      <!-- Horizontal Line -->
      <hr class="border-gray-400 my-4" />
      <!-- Technical Skills -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-black">Technical Skills</h2>
        <ul class="list-disc list-inside mt-2 text-black">
          <li>Frontend: HTML5, CSS3, JavaScript</li>
          <li>Frameworks: VueJS, Nuxt, Angular, Tailwind, Bootstrap5, SCSS</li>
          <li>Backend: Nestjs, Nodejs, Mysql, Expressjs</li>
          <li>Developer Tools: Figma, VS Code, Git, GitHub</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = [
  {
    date: "June 2023 - November 2024",
    title: "Freelance Frontend Developer",
    location: "Cebu City, Mandaue",
    description: "Created the frontend of a web based grading system.",
  },
  {
    date: "November 7, 2024",
    title: "CHED Tour De Tech Participant",
    location: "Cebu City, Bai Hotel",
    description:
      "Attended an enriching seminar on technology innovation at Bai Hotel. Engaged with industry experts and peers. Acquired insights into the latest advancements in technology and its applications.",
  },
  {
    date: "June 7, 2024",
    title: "Cebu Interschool Hackathon",
    location: "Cebu City, City Hall",
    description:
      "Created a solution for environmental problems in the community. Enhanced my intrapersonal skills such as focus, leadership, and time management. Improved my programming skills by integrating AI API.",
  },
  {
    date: "May 25, 2023",
    title: "Cebu Interschool Hackathon",
    location: "Cebu City, Northwinds Hotel",
    description:
      "Showcased my passion for innovation and problem-solving. Highlighted my ability to thrive under pressure and my commitment to finding innovative solutions to real-world problems. Honed and improved teamwork and communication skills.",
  },
  {
    date: "March 31, 2023",
    title: "PSITE Participant",
    location: "Cebu City, Cebu",
    description:
      "Enhanced skills and teaching methodologies, ultimately benefiting both students and colleagues in the IT education community. Actively contributed to discussions and knowledge, fostering collaboration with peers and the latest trends in the IT community. Demonstrating a commitment to professional development in the field of information technology education.",
  },
];

useHead({
  app: {
    head: {
      title: "Resume | James  ",
    },
  },
});
</script>

<style scoped>
/* Styling */
body {
  font-family: Arial, sans-serif;
}
</style>
