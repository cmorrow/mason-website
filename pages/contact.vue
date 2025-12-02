<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with Blue Gradient and Chevron Pattern -->
    <section
      class="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden"
    >
      <!-- Chevron Pattern Overlay -->
      <div class="absolute inset-0 opacity-10 chevron-pattern"></div>

      <UContainer class="relative z-10">
        <div class="text-center text-white max-w-4xl mx-auto">
          <h1 class="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            CONTACT
          </h1>
          <div
            class="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
          >
            <p class="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Let's connect about theatre projects, collaborations, or opportunities
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-2xl mx-auto">
          <UCard class="p-8 text-center">
            <div class="space-y-6">
              <div>
                <div class="text-4xl mb-4">📧</div>
                <h2 class="text-2xl font-bold text-blue-900 mb-4">Email Me</h2>
                <a 
                  href="mailto:themasonmorrow@gmail.com"
                  class="text-xl text-blue-600 hover:text-blue-800 font-medium transition-colors inline-block"
                >
                  themasonmorrow@gmail.com
                </a>
              </div>
              
              <div class="pt-6 border-t border-gray-200">
                <p class="text-gray-700 mb-4">
                  Whether you're interested in:
                </p>
                <ul class="text-left space-y-2 text-gray-700 max-w-md mx-auto">
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span>Theatre education opportunities</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span>Performance collaborations</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span>Playwriting commissions or readings</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span>Workshops or speaking engagements</span>
                  </li>
                </ul>
                <p class="text-gray-700 mt-6">
                  I'd love to hear from you!
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Closing Section with Blue Gradient -->
    <section
      class="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden"
    >
      <!-- Chevron Pattern Overlay -->
      <div class="absolute inset-0 opacity-10 chevron-pattern"></div>

      <UContainer class="relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="bg-white rounded-lg p-12 shadow-2xl">
            <h2 class="text-4xl font-bold text-blue-900 mb-6">
              Let's Create Together
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Theatre is a collaborative art form, and I'm always excited to explore new projects, 
              partnerships, and creative opportunities. Whether you're looking for a performer, 
              educator, playwright, or collaborator, I'd love to connect and see how we can bring 
              stories to life together.
            </p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

