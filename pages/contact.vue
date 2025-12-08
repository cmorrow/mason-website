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
            CONTACT
          </h1>
          <!-- <HeroTagline
            text="Let's connect about theatre projects, collaborations, or opportunities"
          /> -->
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-2xl mx-auto text-center">
          <div class="space-y-6">
            <div>
              <h2 class="text-2xl font-bold text-blue-900 mb-6">Email</h2>
              <h3 class="mb-6">
                <a
                  href="mailto:themasonmorrow@gmail.com"
                  class="text-3xl md:text-4xl font-bold text-blue-900 hover:text-blue-700 transition-colors inline-block tracking-tight"
                >
                  themasonmorrow@gmail.com
                </a>
              </h3>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
