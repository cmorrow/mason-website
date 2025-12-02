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
                  <UButton
                    color="blue"
                    variant="outline"
                    to="/resumes/teaching-resume.pdf"
                    target="_blank"
                    class="shrink-0 ml-4"
                  >
                    Download PDF
                  </UButton>
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
                  <UButton
                    color="blue"
                    variant="outline"
                    to="/resumes/performance-resume.pdf"
                    target="_blank"
                    class="shrink-0 ml-4"
                  >
                    Download PDF
                  </UButton>
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
                  <UButton
                    color="blue"
                    variant="outline"
                    to="/resumes/technical-resume.pdf"
                    target="_blank"
                    class="shrink-0 ml-4"
                  >
                    Download PDF
                  </UButton>
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
