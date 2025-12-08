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
            THEATER EDUCATION
          </h1>
          <HeroTagline
            text="Inspiring and mentoring students in the art of theatre, helping them discover their creative potential and develop their craft"
          />
        </div>
      </UContainer>
    </section>

    <!-- Gallery Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-7xl mx-auto">
          <!-- Gallery Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(item, index) in educationItems"
              :key="index"
              class="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <!-- Image Container -->
              <div
                v-if="item.image"
                class="relative h-64 md:h-72 overflow-hidden"
              >
                <img
                  :src="getImageSrc(item.image)"
                  :alt="item.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <!-- Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                <!-- Category Badge Overlay -->
                <div class="absolute top-4 left-4 z-10">
                  <span
                    class="inline-block bg-blue-950/90 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide backdrop-blur-sm"
                  >
                    {{ item.category }}
                  </span>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-6 flex flex-col h-full">
                <!-- Category Badge (if no image) -->
                <div v-if="!item.image" class="mb-4">
                  <span
                    class="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide"
                  >
                    {{ item.category }}
                  </span>
                </div>

                <!-- Title -->
                <h3
                  class="text-xl md:text-2xl font-bold text-blue-950 mb-3 leading-tight"
                >
                  {{ item.title }}
                </h3>

                <!-- Description -->
                <div class="flex-1">
                  <p
                    v-if="item.description"
                    class="text-gray-700 leading-relaxed text-sm md:text-base"
                  >
                    {{ item.description }}
                  </p>
                </div>
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
              Empowering Through Theatre
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Through directing, playwriting, and teaching, I create meaningful
              theatrical experiences that foster creativity, empathy, and
              personal growth. Each project represents a commitment to
              supporting youth development through the transformative power of
              theatre arts.
            </p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
const educationItems = [
  {
    category: "Directing",
    title: "Mystery of the Missing Letter",
    description:
      "For my senior project, I directed Mystery of the Missing Letter at Homewood Theatre, taking full ownership of the artistic vision and rehearsal process. I coordinated staging, worked closely with actors of varying experience levels, and managed all production elements to bring the story to life. This project showcased my leadership, creative problem-solving, and ability to guide a full theatrical production from concept to performance.",
    image: "/images/education/mystery-of-the-missing-letter-01.jpg",
  },
  {
    category: "Playwriting",
    title: "Olive & The Cosmic Clash",
    description:
      "A TFYA touring show for elementary audiences commissioned by CLIMB Theatre. This play was written with the goal of teaching kids empathy and self-regulation through the story of Olive, a young artist who helps the Sun and Moon resolve their conflict.",
    image: "/images/education/cosmic-clash-01-4x3.jpg",
  },
  {
    category: "Teaching",
    title: "RMT Theme Camp (Harry Potter)",
    description:
      "An immersive themed camp experience bringing the magic of Harry Potter to life through theatrical activities, character exploration, and creative play.",
    image: "/images/education/rmt-theme-camp-potter-01.jpg",
  },
  {
    category: "Teaching",
    title: "Arts Integration with 4th grade",
    description:
      "Integrating theatre arts into the 4th grade curriculum to enhance learning across subjects, fostering creativity and deeper understanding through performance.",
    image: "/images/education/arts-integration-01.jpg",
  },
  {
    category: "Teaching",
    title: "Sensory Story with kindergarten",
    description:
      "A multi-sensory storytelling experience designed for kindergarten students, engaging all senses to create an inclusive and memorable learning adventure.",
    image: "images/education/sensory-story-kindergarten-01.jpg",
  },
];

// Helper function to get image source (supports both string and object formats)
const getImageSrc = (image) => {
  if (typeof image === "string") {
    return image;
  }
  return image?.src || image;
};

useHead({
  title: "Theater Education - Mason Morrow",
  meta: [
    {
      name: "description",
      content:
        "Theater education projects including directing, playwriting, and teaching. Inspiring students through the transformative power of theatre arts.",
    },
  ],
});
</script>

<style scoped>
.chevron-pattern {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 255, 255, 0.1) 10px,
    rgba(255, 255, 255, 0.1) 20px
  );
}
</style>
