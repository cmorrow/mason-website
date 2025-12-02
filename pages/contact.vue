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
          <HeroTagline
            text="Let's connect about theatre projects, collaborations, or opportunities"
          />
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-2xl mx-auto text-center">
          <div class="space-y-6">
            <UContainer class="relative z-10">
              <div class="max-w-4xl mx-auto text-center">
                <div class="bg-white rounded-lg p-12 shadow-2xl">
                  <h2 class="text-4xl font-bold text-blue-900 mb-6">
                    Let's Create Together
                  </h2>
                  <p class="text-lg text-gray-700 leading-relaxed">
                    Theatre is a collaborative art form, and I'm always excited
                    to explore new projects, partnerships, and creative
                    opportunities. Whether you're looking for a performer,
                    educator, playwright, or collaborator, I'd love to connect
                    and see how we can bring stories to life together.
                  </p>
                </div>
              </div>
            </UContainer>
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
