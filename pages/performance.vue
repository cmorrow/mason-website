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
            PERFORMANCE
          </h1>
          <HeroTagline
            text="A showcase of theatrical performances bringing stories to life on stage. Each production represents a journey of creativity, collaboration, and artistic expression."
          />
        </div>
      </UContainer>
    </section>

    <!-- Performance Showcase Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-7xl mx-auto space-y-24">
          <PerformanceCard
            v-for="(performance, index) in performances"
            :key="index"
            :performance="performance"
            :index="index"
          />
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
              Theatrical Excellence
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Each performance is a testament to the power of storytelling,
              bringing together talented artists to create memorable experiences
              that resonate with audiences and inspire the next generation of
              theatre makers.
            </p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
const performances = [
  {
    title: "The Stage Between",
    description:
      "A powerful dramatic performance exploring the complex relationships between teachers and students in a high school theatre program. This production showcased emotional depth and authentic character development.",
    photos: [
      {
        src: "/mason-56.jpg",
        caption:
          "A powerful moment between characters showcasing the emotional depth of the production.",
      },
      {
        src: "/mason-44.jpg",
        caption:
          "The ensemble cast brings authenticity to the complex relationships on stage.",
      },
      {
        src: "/mason-1-6.jpg",
        caption:
          "Intimate character development highlights the production's dramatic intensity.",
      },
      {
        src: "/mason-56.jpg",
        caption:
          "The final scene captures the essence of the theatrical journey.",
      },
    ],
  },
  {
    title: "Echoes in the Wings",
    description:
      "A comedic backstage drama that captured the chaos and camaraderie of community theatre. This performance highlighted ensemble work and the humanity behind the characters we see on stage.",
    photos: [
      {
        src: "/mason-44.jpg",
        caption:
          "Backstage chaos reveals the camaraderie of community theatre.",
      },
      {
        src: "/mason-1-6.jpg",
        caption:
          "Ensemble work shines through in this comedic backstage drama.",
      },
      {
        src: "/mason-56.jpg",
        caption: "The humanity behind the characters comes to life on stage.",
      },
      {
        src: "/mason-44.jpg",
        caption: "A moment of connection in the midst of theatrical chaos.",
      },
    ],
  },
  {
    title: "The Last Rehearsal",
    description:
      "An intimate family drama that unfolded during the final rehearsal of an original play. This production examined legacy, loss, and the enduring impact of storytelling through powerful performances.",
    photos: [
      {
        src: "/mason-1-6.jpg",
        caption: "The final rehearsal captures the weight of legacy and loss.",
      },
      {
        src: "/mason-56.jpg",
        caption: "Intimate moments reveal the enduring impact of storytelling.",
      },
      {
        src: "/mason-44.jpg",
        caption: "Powerful performances bring the family drama to life.",
      },
    ],
  },
];
</script>
