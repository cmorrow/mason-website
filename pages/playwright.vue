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
            PLAYWRIGHT
          </h1>
          <HeroTagline
            text="Original theatrical works that explore human experiences and challenge perspectives"
          />
        </div>
      </UContainer>
    </section>

    <!-- Plays Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-6xl mx-auto space-y-12">
          <PlaywrightCard :play="plays[0]" :index="0"
            >            <template #image>
              <img
                src="/images/education/cosmic-clash-01-16x9.jpg"
                alt="Olive and The Cosmic Clash"
                class="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </template>
            <template #description
              ><p>
                Olive &amp; The Cosmic Clash is a TFYA touring show for
                elementary audiences. I proposed this piece to CLIMB Theatre as
                part of their 25-26 season, with the goal of teaching kids both
                empathy and self-regulation. CLIMB commissioned me to write this
                play, which included developing the piece through workshops by
                incorporating feedback from readings into subsequent drafts. The
                play is currently one of CLIMB's assembly offerings, and will
                remain in my ownership after their season concludes.
              </p>
              <p>
                The play follows Olive, a young artist, and the Sun and Moon who
                have crashed into her backyard fighting. Olive proposes they
                switch jobs for one day, and chaos ensues as the Moon tries to
                run daytime and the Sun tries to run nighttime. Throughout the
                play, Olive uses a learning device (STAR) that walks through a
                step-by-step process to apologize to someone you've hurt. At the
                end of the play, the Sun and Moon use STAR to apologize to each
                other, forgive each other, and become friends.
              </p></template
            ></PlaywrightCard
          >
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
              Original Storytelling
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Each play represents a journey into the human experience,
              exploring themes of connection, legacy, and the transformative
              power of theatre. Through original storytelling, these works
              challenge perspectives and invite audiences to see the world
              through new eyes.
            </p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
const plays = [
  {
    title: "Olive and The Cosmic Clash",
    genre: "Theatre for Youth",
    duration: "2 Acts | 90 minutes",
    description: "",
    cast: "6 characters (3M, 3F)",
    setting: "The Cosmos",
  },
];
</script>
