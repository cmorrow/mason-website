<template>
  <div class="bg-white min-h-screen">
    <!-- Hero Section - Bold Asymmetric Layout -->
    <section
      class="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      <UContainer class="relative z-10 py-20">
        <div class="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <!-- Large Text Block - Takes up half the space -->
          <div
            class="lg:col-span-6 lg:col-start-1 space-y-6 lg:space-y-8 overflow-hidden"
          >
            <div class="space-y-4">
              <h1
                class="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] text-blue-900 tracking-tight break-words"
              >
                <span class="block">MASON</span>
                <span class="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  >MORROW</span
                >
              </h1>
            </div>

            <!-- Overlapping tagline -->
            <div class="relative -mt-4 lg:-mt-8">
              <p
                class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 leading-tight"
              >
                Theatre Educator
              </p>
              <p
                class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 leading-tight mt-2"
              >
                Performer
              </p>
              <p
                class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 leading-tight mt-2"
              >
                Playwright
              </p>
            </div>
          </div>

          <!-- Image - Right side, takes up half the container -->
          <div
            class="lg:col-span-6 lg:col-start-7 relative z-20 mt-8 lg:mt-0 flex items-center"
          >
            <div class="relative w-full">
              <!-- Decorative shape behind image -->
              <div
                class="absolute -inset-4 bg-blue-900/5 rotate-3 rounded-lg"
              ></div>
              <img
                src="/mason-56.jpg"
                alt="Mason Morrow"
                class="relative w-full h-[500px] lg:h-[700px] object-cover rounded-lg shadow-2xl"
                style="object-position: center top"
              />
              <!-- Accent overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900/10 rounded-lg"
              ></div>
            </div>
          </div>
        </div>

        <!-- Bottom description - Full width but offset -->
        <div class="mt-12 lg:mt-20 lg:ml-0 lg:w-2/3">
          <p
            class="text-lg md:text-xl lg:text-2xl text-blue-800/80 leading-relaxed font-light"
          >
            Bringing stories to life on stage and inspiring the next generation
            of theatre artists through education, performance, and original
            playwriting.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Services Section - Asymmetric Grid -->
    <section class="py-24 bg-white">
      <UContainer>
        <!-- Section Header - Offset -->
        <div class="mb-16 lg:ml-8">
          <h2
            class="text-5xl md:text-6xl lg:text-7xl font-black text-blue-950 tracking-tight"
          >
            WHAT I DO
          </h2>
          <div class="w-24 h-1 bg-blue-950 mt-4"></div>
        </div>

        <!-- Asymmetric Grid Layout -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <!-- Large Card - Theatre Education -->
          <NuxtLink
            to="/resume"
            class="md:col-span-2 lg:col-span-1 lg:row-span-2 group relative overflow-hidden bg-black text-white rounded-lg p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500"
          >
            <!-- Background Image Overlay -->
            <div
              class="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            >
              <img
                src="/mason-1-6.jpg"
                alt="Theatre Education"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Title at top-left -->
            <div class="relative z-10">
              <h3 class="text-3xl md:text-4xl font-black mb-4 leading-tight">
                THEATRE<br />EDUCATION
              </h3>
            </div>

            <!-- Description at bottom -->
            <p
              class="relative z-10 text-lg md:text-xl text-white/90 leading-relaxed font-light mt-auto"
            >
              Inspiring and mentoring students in the art of theatre, helping
              them discover their creative potential and develop their craft.
            </p>
          </NuxtLink>

          <!-- Medium Card - Performance -->
          <NuxtLink
            to="/performance"
            class="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-lg min-h-[300px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500"
          >
            <img
              src="/mason-44.jpg"
              alt="Performance"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent"
            ></div>

            <!-- Title at top-left -->
            <div class="relative z-10 p-8 md:p-10">
              <h3
                class="text-2xl md:text-3xl font-black mb-4 leading-tight text-white"
              >
                PERFORMANCE
              </h3>
            </div>
            <!-- Description at bottom -->
            <p
              class="relative z-10 text-base md:text-lg text-white/90 leading-relaxed font-light p-8 md:p-10 mt-auto"
            >
              Bringing characters to life on stage with passion, dedication, and
              authentic storytelling.
            </p>
          </NuxtLink>

          <!-- Small Card - Playwriting -->
          <NuxtLink
            to="/playwright"
            class="md:col-span-1 lg:col-span-1 group relative overflow-hidden bg-blue-950 text-white rounded-lg p-8 md:p-10 min-h-[300px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500"
          >
            <!-- Title at top-left -->
            <h3 class="text-2xl md:text-3xl font-black mb-4 leading-tight">
              PLAYWRITING
            </h3>
            <!-- Description at bottom -->
            <p
              class="text-base md:text-lg text-white/90 leading-relaxed font-light mt-auto"
            >
              Creating original theatrical works that explore human experiences
              and engage audiences.
            </p>
          </NuxtLink>

          <!-- Wide Card - Call to Action -->
          <div
            class="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-gradient-to-r from-blue-950 to-blue-900 rounded-lg p-8 md:p-12 lg:p-16 min-h-[250px] flex items-center"
          >
            <div class="flex-1">
              <h3 class="text-3xl md:text-4xl font-black text-white mb-4">
                Let's Create Something Together
              </h3>
              <p class="text-lg md:text-xl text-white/80 mb-6 font-light">
                Interested in collaboration? Get in touch to discuss your next
                project.
              </p>
              <NuxtLink
                to="/contact"
                class="inline-block bg-white text-blue-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 hover:text-white hover:border-2 hover:border-white transition-all duration-300"
              >
                CONTACT ME
              </NuxtLink>
            </div>
            <!-- Decorative element -->
            <div
              class="hidden lg:block absolute right-0 top-0 bottom-0 w-64 bg-white/5"
            ></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Trust Statement - Minimal -->
    <section class="py-16 bg-white border-t-2 border-blue-900/10">
      <UContainer>
        <p
          class="text-center text-xl md:text-2xl text-blue-800/70 font-light max-w-3xl mx-auto"
        >
          Dedicated to excellence in theatre education, performance, and
          creative storytelling
        </p>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Mason Morrow - Theatre Educator, Performer, Playwright",
  meta: [
    {
      name: "description",
      content:
        "Theatre Educator, Performer, and Playwright. Bringing stories to life on stage and inspiring the next generation of theatre artists.",
    },
  ],
});
</script>

<style scoped>
/* Smooth scroll animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animation to cards on scroll */
.group {
  animation: fadeInUp 0.6s ease-out backwards;
}

.group:nth-child(1) {
  animation-delay: 0.1s;
}
.group:nth-child(2) {
  animation-delay: 0.2s;
}
.group:nth-child(3) {
  animation-delay: 0.3s;
}
.group:nth-child(4) {
  animation-delay: 0.4s;
}
</style>
