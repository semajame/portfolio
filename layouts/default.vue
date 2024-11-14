<template>
  <div class="bg-black min-h-screen max-w-screen-lg mx-auto">
    <div class="max-w-4xl mx-auto px-4 py-8">
      <section class="flex gap-5 items-center mb-5">
        <img
          src="/assets/img/james.jpg"
          alt=""
          class="rounded-lg object-cover w-40 h-40"
          width="160"
          height="160"
        />

        <div class="text-white">
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
            Full Stack Developer
          </h3>
          <div class="flex items-center justify-start gap-3 mt-5">
            <NuxtLink
              to="/"
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
              View CV</NuxtLink
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
      </section>
      <section class="grid grid-cols-3 grid-rows-2 gap-2">
        <div class="bento col-span-2">
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
                d="M8 3C8.82843 3 9.5 2.32843 9.5 1.5C9.5 0.671573 8.82843 0 8 0C7.17157 0 6.5 0.671573 6.5 1.5C6.5 2.32843 7.17157 3 8 3Z"
                fill="currentColor"
              ></path>
              <path
                d="M4.67148 6C5.89632 6 6.83343 7.09104 6.64857 8.30185L6.43 9.73346C6.3381 10.2159 6.1906 10.6874 6 11.1401L4.33 15.2L5.92164 15.888L7.594 11.9162C7.72668 11.6011 8.27332 11.6011 8.406 11.9162L10.0784 15.888L11.67 15.2L10 11.1401C9.8094 10.6874 9.6619 10.2159 9.57 9.73346L9.2835 8.42904C9.00946 7.18131 9.95947 6 11.2369 6H14V4.5H2V6H4.67148Z"
                fill="currentColor"
              ></path>
            </svg>
            About
          </h3>
          <p class="my-5 text-sm">
            I'm a full-stack developer with strong skills in both front-end and
            back-end technologies.
            <br />
            <br />
            My experience spans from making intuitive user interfaces to
            developing robust server-side logic, always striving to create
            impactful solutions that enhance user experience and drive business
            goals.
          </p>
        </div>
        <div class="bento text-lg col-span-2 col-start-1 row-start-2">
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
                d="M4.21969 12.5303L4.75002 13.0607L5.81068 12L5.28035 11.4697L1.81068 7.99999L5.28035 4.53032L5.81068 3.99999L4.75002 2.93933L4.21969 3.46966L0.39647 7.29289C0.00594562 7.68341 0.00594562 8.31658 0.39647 8.7071L4.21969 12.5303ZM11.7804 12.5303L11.25 13.0607L10.1894 12L10.7197 11.4697L14.1894 7.99999L10.7197 4.53032L10.1894 3.99999L11.25 2.93933L11.7804 3.46966L15.6036 7.29289C15.9941 7.68341 15.9941 8.31658 15.6036 8.7071L11.7804 12.5303Z"
                fill="currentColor"
              ></path></svg
            >Skills
          </h3>
          <div class="mt-5 mb-0 flex items-center gap-1">
            <div>
              <h3 class="text-sm">Frontend Development</h3>

              <div class="flex flex-wrap gap-1 mt-2">
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Vuejs
                </div>
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Angular
                </div>
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Nuxt
                </div>
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Tailwind
                </div>
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Bootstrap
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-sm">Backend Development</h3>

              <div class="flex flex-wrap gap-1 mt-2">
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  MySQL
                </div>
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Nestjs
                </div>
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Tailwind
                </div>
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Nodejs
                </div>

                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Github
                </div>
                <div
                  class="text-xs border border-gray-500 px-2 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-1 text-white"
                >
                  Git
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bento col-span-2 row-span-2 col-start-3 row-start-1">
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
                d="M6 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V4H5.5V3C5.5 2.72386 5.72386 2.5 6 2.5ZM4 4V3C4 1.89543 4.89543 1 6 1H10C11.1046 1 12 1.89543 12 3V4H14.5H16V5.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V5.5V4H1.5H4ZM12 5.5H10.5H5.5H4H1.5V9.25H7.25V8.5H8.75V9.25L14.5 9.25V5.5H12ZM8.75 10.75L14.5 10.75V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V10.75H7.25V11.5H8.75V10.75Z"
                fill="currentColor"
              ></path></svg
            >Experience
          </h3>
          <p class="my-5 text-sm">
            I'm a full-stack software engineer specializing in developing web
            apps with Nuxt, Mysql, and NestJs. I work on projects including
            building modern websites, web applications, and search engine
            optimization.
          </p>
        </div>
        <div class="bento col-span-1">
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
                d="M8.08422 1.97439C8.0056 1.91936 7.90243 1.91419 7.8187 1.96108L2.88355 4.72476C2.64669 4.8574 2.5 5.10767 2.5 5.37914V9.39218L9.36972 6.64429L9.37139 6.64848L14.0494 4.77726C14.26 4.7188 14.4873 4.75487 14.6705 4.8789C14.8766 5.01843 15 5.25109 15 5.49995V10.6208C15 11.4352 14.5599 12.186 13.8494 12.5839L8.91421 15.3476C8.32812 15.6758 7.6059 15.6396 7.05559 15.2544L3.49235 12.7601L5.15688 12.0943L7.91579 14.0255C7.9944 14.0805 8.09758 14.0857 8.1813 14.0388L13.1165 11.2751C13.3533 11.1425 13.5 10.8922 13.5 10.6208V6.60773L7.88025 8.85563L7.87861 8.85152L1.95134 11.2224C1.74058 11.2812 1.51296 11.2452 1.32953 11.121C1.12345 10.9815 1 10.7488 1 10.5V5.37914C1 4.56474 1.44008 3.81392 2.15064 3.416L7.08579 0.652317C7.67188 0.324109 8.39411 0.360336 8.94441 0.745547L12.5077 3.23987L10.8432 3.90569L8.08422 1.97439Z"
                fill="currentColor"
              ></path></svg
            >Beyond Coding
          </h3>
          <p class="my-5 text-sm">
            When not writing code, I study to stay up to date with the latest
            technologies and spend time with my friends and family.
            <br />
            <br />
            I also like to workout as my hobby to stay healthy and play chess to
            keep my mind running.
          </p>
        </div>
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

          <div class="my-5 grid grid-cols-2 grid-rows-2 gap-2">
            <NuxtLink
              to="https://greenery-ecommerce.vercel.app/"
              target="_blank"
              class="bento hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 class="text-sm font-bold">The Greenery</h3>
              <p class="text-xs my-1">Ecommerce</p>
              <p
                class="link text-xs border border-black p-2 bg-black rounded-md mt-2"
              >
                greenery-ecommerce.vercel.app
              </p>
            </NuxtLink>

            <NuxtLink
              to="https://grand-standard-hotel.vercel.app/"
              target="_blank"
              class="bento hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 class="text-sm font-bold">Grand Standard</h3>
              <p class="text-xs my-1">Hotel Website</p>
              <p
                class="link text-xs border border-black p-2 bg-black rounded-md mt-2"
              >
                grand-standard-hotel.vercel.app
              </p>
            </NuxtLink>
            <NuxtLink
              to="https://crypto-currency-x.vercel.app/"
              target="_blank"
              class="bento hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 class="text-sm font-bold">CryptoCurrency X</h3>
              <p class="text-xs my-1">Real time crypto updates</p>
              <p
                class="link text-xs border border-black p-2 bg-black rounded-md mt-2"
              >
                crypto-currency-x.vercel.app
              </p>
            </NuxtLink>
            <NuxtLink
              to="https://bc-scheduling-1024.vercel.app/"
              target="_blank"
              class="bento hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 class="text-sm font-bold">Benedicto College Scheduling</h3>
              <p class="text-xs my-1">Online class scheduling</p>
              <p
                class="link text-xs border border-black p-2 bg-black rounded-md mt-2"
              >
                bc-scheduling-1024.vercel.app
              </p>
            </NuxtLink>
          </div>
        </div>
        <div class="bento col-span-2">
          <h3 class="font-bold flex items-center gap-3">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            Certifications
          </h3>
        </div>
        <div class="bento col-span-2">
          <h3 class="font-bold flex items-center gap-3">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Connect
          </h3>
          <div class="my-5 text-sm">
            <div class="text-xs border border-black p-2 bg-black rounded-md">
              <h5 class="text-sm font-bold">Email</h5>
              <p class="text-md">jamesanquillano@gmail.com</p>
            </div>

            <h5 class="text-sm font-bold mt-3">Socials</h5>
            <div class="text-xs flex items-center gap-2 mt-2">
              <NuxtLink
                to="https://www.linkedin.com/in/james-anquillano-47b001263/"
                target="_blank"
                class="border-black p-2 bg-black rounded-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg
                  class="w-5 h-5 invert"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  ></path></svg
              ></NuxtLink>
              <NuxtLink
                to="https://www.instagram.com/jaymesevilla/"
                target="_blank"
                class="border-black p-2 bg-black rounded-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg
                  class="w-5 h-5 invert"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path></svg
              ></NuxtLink>
              <NuxtLink
                to="  https://www.facebook.com/jsev.12"
                target="_blank"
                class="border-black p-2 bg-black rounded-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 26 26"
                  class="invert"
                >
                  <path
                    d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 20.464844 14.003906 L 18.03125 14.003906 L 18.03125 23.007813 L 13.96875 23.007813 L 13.96875 14.003906 L 12.390625 14.003906 L 12.390625 10.96875 L 13.96875 10.96875 L 13.96875 9.035156 C 13.96875 6.503906 15.019531 5 18.007813 5 L 21.03125 5 L 21.03125 8.023438 L 19.273438 8.023438 C 18.113281 8.023438 18.035156 8.453125 18.035156 9.265625 L 18.03125 10.96875 L 20.796875 10.96875 Z"
                  ></path></svg
              ></NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <footer
        class="border-t border-gray-600 mt-20 pt-8 px-4 flex justify-between items-center"
      >
        <p class="text-white text-sm">© 2024 James Anquillano.</p>
        <p class="text-sm">All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>
8
<script lang="ts" setup></script>

<style></style>
