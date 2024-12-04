<template>
  <header class="sm:flex sm:gap-5 sm:items-center sm:mb-5 my-5">
    <img
      src="/assets/img/james.jpg"
      alt=""
      class="rounded-lg object-cover w-40 h-40"
      width="160"
      height="160"
    />

    <div class="text-white my-3">
      <h2 class="font-bold text-3xl">James Anquillano</h2>
      <p class="flex items-center gap-1 text-sm mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"
          /></svg
        >Cebu, Philippines
      </p>
      <h3 class="mt-1 font-medium text-gray-200 text-md">
        Full-Stack Developer
      </h3>
      <div class="flex items-center justify-start gap-3 mt-3">
        <NuxtLink
          to="/cv"
          class="btn bg-white text-black px-2 py-1.5 rounded-md text-xs flex justify-center items-center gap-1 hover:-translate-y-0.5 transition-all duration-200"
          type="button"
        >
          <svg
            data-testid="geist-icon"
            height="14"
            stroke-linejoin="round"
            viewBox="0 0 16 16"
            width="14"
            style="color: currentcolor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5 4V6H2.5V2.5H6L7.33333 3.5C7.76607 3.82456 8.29241 4 8.83333 4H13.5ZM1 6V2.5V1H2.5H6.16667C6.38304 1 6.59357 1.07018 6.76667 1.2L8.23333 2.3C8.40643 2.42982 8.61696 2.5 8.83333 2.5H13.5H15V4V6H16L15.8333 7.5L15.2471 12.7761C15.1064 14.0422 14.0363 15 12.7624 15H3.23761C1.96373 15 0.893573 14.0422 0.752898 12.7761L0.166667 7.5L0 6H1ZM14 7.5H2H1.6759L2.24372 12.6104C2.29999 13.1169 2.72806 13.5 3.23761 13.5H12.7624C13.2719 13.5 13.7 13.1169 13.7563 12.6104L14.3241 7.5H14Z"
              fill="currentColor"
            ></path>
          </svg>
          View Resume</NuxtLink
        >
        <NuxtLink
          to="https://github.com/semajame/"
          target="_blank"
          class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1"
        >
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
              d="M8 1.46252C4.40875 1.46252 1.5 4.37029 1.5 7.96032C1.5 10.8356 3.36062 13.2642 5.94438 14.1251C6.26937 14.182 6.39125 13.987 6.39125 13.8165C6.39125 13.6621 6.38313 13.1504 6.38313 12.6063C4.75 12.9068 4.3275 12.2083 4.1975 11.8428C4.12437 11.6559 3.8075 11.0793 3.53125 10.9249C3.30375 10.8031 2.97875 10.5026 3.52312 10.4945C4.035 10.4863 4.40062 10.9656 4.5225 11.1605C5.1075 12.1433 6.04188 11.8671 6.41563 11.6966C6.4725 11.2742 6.64313 10.9899 6.83 10.8275C5.38375 10.665 3.8725 10.1046 3.8725 7.61919C3.8725 6.91255 4.12438 6.32775 4.53875 5.87291C4.47375 5.71046 4.24625 5.04444 4.60375 4.15099C4.60375 4.15099 5.14812 3.98042 6.39125 4.81701C6.91125 4.67081 7.46375 4.59771 8.01625 4.59771C8.56875 4.59771 9.12125 4.67081 9.64125 4.81701C10.8844 3.9723 11.4288 4.15099 11.4288 4.15099C11.7863 5.04444 11.5588 5.71046 11.4938 5.87291C11.9081 6.32775 12.16 6.90443 12.16 7.61919C12.16 10.1127 10.6406 10.665 9.19438 10.8275C9.43 11.0305 9.63313 11.4204 9.63313 12.0296C9.63313 12.8987 9.625 13.5972 9.625 13.8165C9.625 13.987 9.74687 14.1901 10.0719 14.1251C11.3622 13.6896 12.4835 12.8606 13.2779 11.7547C14.0722 10.6488 14.4997 9.32178 14.5 7.96032C14.5 4.37029 11.5913 1.46252 8 1.46252Z"
              fill="currentColor"
            ></path>
          </svg>
          Github</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
