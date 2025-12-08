<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with Blue Gradient and Chevron Pattern -->
    <section
      class="relative py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden"
    >
      <!-- Chevron Pattern Overlay -->
      <div class="absolute inset-0 opacity-10 chevron-pattern"></div>

      <UContainer class="relative z-10">
        <div class="text-center text-white max-w-4xl mx-auto">
          <h1 class="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            RESUME
          </h1>
          <HeroTagline
            text="Professional credentials and experience across teaching, performance, and technical theatre"
          />
        </div>
      </UContainer>
    </section>
    <!-- Resume Links Section -->
    <section class="py-12 bg-white border-b border-gray-200">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <NuxtLink
              to="/headshots"
              prefetch
              class="inline-flex items-center gap-2 bg-blue-950 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Headshots
            </NuxtLink>
            <NuxtLink
              to="/performance/resume"
              prefetch
              class="inline-flex items-center gap-2 bg-white text-blue-950 border-2 border-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Online Resume
            </NuxtLink>
            <a
              href="/resume/Mason-Morrow-Performance-Resume.pdf"
              download
              class="inline-flex items-center gap-2 bg-white text-blue-950 border-2 border-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Resume Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-7xl mx-auto space-y-24">
          <!-- Teaching Resume -->
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl -z-10"
            ></div>
            <div
              class="relative overflow-hidden rounded-2xl shadow-xl bg-white"
            >
              <div class="p-12 md:p-16">
                <div class="flex items-start justify-between mb-8">
                  <h2
                    class="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
                  >
                    Teaching Resume
                  </h2>
                  <a
                    href="/resume/Mason-Morrow-Teaching-Artistry-Resume.pdf"
                    download
                    class="inline-flex items-center gap-2 bg-white text-blue-950 border-2 border-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg shrink-0 ml-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Teaching Artistry Resume
                  </a>
                </div>

                <!-- Decorative line -->
                <div
                  class="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-8"
                ></div>

                <ul
                  class="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Extensive experience in theatre education and curriculum
                      development</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Proven track record of student engagement and artistic
                      development</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Specialized in acting techniques, stagecraft, and
                      theatrical production</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Experience directing student productions and
                      workshops</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Commitment to fostering creativity and critical thinking
                      in students</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Performance Resume -->
          <div class="relative">
            <div
              class="relative overflow-hidden rounded-2xl shadow-xl bg-white"
            >
              <div class="p-12 md:p-16">
                <div class="flex items-start justify-between mb-8">
                  <h2
                    class="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
                  >
                    Performance Resume
                  </h2>
                  <a
                    href="/resume/Mason-Morrow-Performance-Resume.pdf"
                    download
                    class="inline-flex items-center gap-2 bg-white text-blue-950 border-2 border-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg shrink-0 ml-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Performance Resume
                  </a>
                </div>

                <!-- Decorative line -->
                <div
                  class="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-8"
                ></div>

                <ul
                  class="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Versatile performer with experience in classical and
                      contemporary theatre</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Strong background in character development and stage
                      presence</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span>Experience in both dramatic and comedic roles</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Collaborative approach to ensemble work and
                      production</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Dedicated to continuous artistic growth and professional
                      development</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Technical Resume -->
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl -z-10"
            ></div>
            <div
              class="relative overflow-hidden rounded-2xl shadow-xl bg-white"
            >
              <div class="p-12 md:p-16">
                <div class="flex items-start justify-between mb-8">
                  <h2
                    class="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
                  >
                    Technical Resume
                  </h2>
                  <a
                    href="/resume/technical-resume.pdf"
                    download
                    class="inline-flex items-center gap-2 bg-white text-blue-950 border-2 border-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg shrink-0 ml-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Technical Resume
                  </a>
                </div>

                <!-- Decorative line -->
                <div
                  class="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-8"
                ></div>

                <ul
                  class="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Expertise in stage management and production
                      coordination</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Proficient in lighting design, sound design, and
                      technical direction</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Experience with set construction and scenic design</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Knowledge of theatre safety protocols and equipment
                      operation</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3 mt-1">•</span>
                    <span
                      >Ability to manage multiple technical aspects of
                      theatrical productions</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Closing Section with Blue Gradient -->
    <section
      class="relative py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden"
    >
      <!-- Chevron Pattern Overlay -->
      <div class="absolute inset-0 opacity-10 chevron-pattern"></div>

      <UContainer class="relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="bg-white rounded-lg p-12 shadow-2xl">
            <h2 class="text-4xl font-bold text-blue-900 mb-6">
              Professional Excellence
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              A comprehensive background spanning education, performance, and
              technical theatre, demonstrating versatility and dedication to the
              craft. Each resume reflects a commitment to excellence and
              continuous growth in the theatrical arts.
            </p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
