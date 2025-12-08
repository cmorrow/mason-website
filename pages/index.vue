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
              <NuxtLink
                to="/theater-education"
                class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 leading-tight hover:text-blue-900 hover:underline transition-colors duration-300 block"
              >
                Theatre Educator
              </NuxtLink>
              <NuxtLink
                to="/performance"
                class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 leading-tight mt-2 hover:text-blue-800 hover:underline transition-colors duration-300 block"
              >
                Performer
              </NuxtLink>
              <NuxtLink
                to="/playwright"
                class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 leading-tight mt-2 hover:text-blue-700 hover:underline transition-colors duration-300 block"
              >
                Playwright
              </NuxtLink>
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
                src="/images/headshots/Mason-Morrow-headshot-01.jpg"
                alt="Mason Morrow"
                class="relative w-full h-auto lg:h-[700px] object-contain lg:object-cover rounded-lg shadow-2xl"
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
          <blockquote
            class="personal-quote text-lg md:text-xl lg:text-2xl text-blue-800/90 leading-relaxed font-light italic relative pl-8 md:pl-12 lg:pl-16 py-6 md:py-8"
          >
            <span
              class="quote-mark absolute left-0 top-0 text-6xl md:text-7xl lg:text-8xl text-blue-900/20 font-serif leading-none"
              >"</span
            >
            <span class="relative z-10">
              Hello! I'm Mason Morrow, a theatre artist and educator passionate
              about supporting the growth of youth. I have training and
              professional experience in teaching artistry, performance,
              playwriting, directing, and stage management. I believe in the
              power of play, and apply it to all my work as a means of fostering
              development, empathy, and connection to ourselves and each other.
            </span>
            <span
              class="quote-mark absolute right-0 bottom-0 text-6xl md:text-7xl lg:text-8xl text-blue-900/20 font-serif leading-none transform rotate-180"
              >"</span
            >
          </blockquote>
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
            to="/theater-education"
            class="md:col-span-2 lg:col-span-1 lg:row-span-2 group relative overflow-hidden bg-black text-white rounded-lg p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col hover:scale-[1.02] transition-transform duration-500"
          >
            <!-- Background Image Overlay -->
            <div
              class="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
            >
              <img
                src="/images/education/education-vertical-kindergarten.jpg"
                alt="Theatre Education"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Title centered in middle -->
            <div
              class="relative z-10 flex-1 flex items-center justify-start text-left"
            >
              <h3 class="text-3xl md:text-4xl font-black leading-tight">
                THEATRE<br />EDUCATION
              </h3>
            </div>
          </NuxtLink>

          <!-- Medium Card - Performance -->
          <NuxtLink
            to="/performance"
            class="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-lg aspect-[4/3] flex flex-col hover:scale-[1.02] transition-transform duration-500"
          >
            <img
              src="/images/performance/lucky-stiff-02.jpg"
              alt="Performance"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent"
            ></div>

            <!-- Title at bottom -->
            <div class="relative z-10 p-8 md:p-10 mt-auto">
              <h3
                class="text-2xl md:text-3xl font-black leading-tight text-white"
              >
                PERFORMANCE
              </h3>
            </div>
          </NuxtLink>

          <!-- Small Card - Playwriting -->
          <NuxtLink
            to="/playwright"
            class="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-lg aspect-[4/3] flex flex-col hover:scale-[1.02] transition-transform duration-500"
          >
            <img
              src="/images/Olive-Clash.png"
              alt="Playwriting"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <!-- Dark overlay for better text legibility -->
            <div class="absolute inset-0 bg-black/40"></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/70 to-blue-950/40"
            ></div>

            <!-- Title at bottom -->
            <div class="relative z-10 p-8 md:p-10 mt-auto">
              <h3
                class="text-2xl md:text-3xl font-black leading-tight text-white"
              >
                PLAYWRITING
              </h3>
            </div>
          </NuxtLink>

          <!-- Wide Card - Call to Action -->
          <div
            class="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-gradient-to-r from-blue-950 to-blue-700 rounded-lg p-8 md:p-12 lg:p-16 min-h-[250px] flex items-center"
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

/* Personal blockquote styling */
.personal-quote {
  position: relative;
  border-left: 4px solid rgba(30, 64, 175, 0.3);
  background: linear-gradient(
    to right,
    rgba(59, 130, 246, 0.05) 0%,
    transparent 100%
  );
  border-radius: 0 8px 8px 0;
  font-style: italic;
  transition: all 0.3s ease;
}

.personal-quote:hover {
  border-left-color: rgba(30, 64, 175, 0.5);
  background: linear-gradient(
    to right,
    rgba(59, 130, 246, 0.08) 0%,
    transparent 100%
  );
  transform: translateX(4px);
}

.personal-quote .quote-mark {
  font-family: Georgia, "Times New Roman", serif;
  user-select: none;
  pointer-events: none;
  font-weight: 400;
}

.personal-quote .quote-mark:first-child {
  top: -0.1em;
  left: 0.05em;
}

.personal-quote .quote-mark:last-child {
  bottom: -0.3em;
  right: 0.1em;
}
</style>
