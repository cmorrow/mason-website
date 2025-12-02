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
            PLAYWRIGHT
          </h1>
          <div
            class="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
          >
            <p class="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Original theatrical works that explore human experiences and challenge perspectives
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Plays Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-6xl mx-auto space-y-12">
          <PlaywrightCard
            :play="plays[0]"
            :index="0"
          />
          <PlaywrightCard
            :play="plays[1]"
            :index="1"
          />
          <PlaywrightCard
            :play="plays[2]"
            :index="2"
          />
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
              Original Storytelling
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Each play represents a journey into the human experience, exploring themes of connection, 
              legacy, and the transformative power of theatre. Through original storytelling, these works 
              challenge perspectives and invite audiences to see the world through new eyes.
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
    title: "The Stage Between",
    genre: "Drama",
    duration: "2 Acts | 90 minutes",
    description:
      "A poignant exploration of the relationships between teachers and students, set against the backdrop of a high school theatre program. The play examines the transformative power of mentorship and the complex dynamics that emerge when personal boundaries blur in the pursuit of artistic excellence. Through a series of interconnected scenes, we witness how the stage becomes a space for both performance and genuine human connection.",
    cast: "6 characters (3M, 3F)",
    setting: "High school theatre",
  },
  {
    title: "Echoes in the Wings",
    genre: "Comedy-Drama",
    duration: "1 Act | 60 minutes",
    description:
      'A backstage comedy that follows a group of actors during opening night of a community theatre production. As mishaps and misunderstandings unfold, the play reveals the humanity behind the characters we see on stage. With sharp wit and heartfelt moments, "Echoes in the Wings" celebrates the chaos and camaraderie that define theatrical life, reminding us that sometimes the real drama happens when the curtain is down.',
    cast: "8 characters (4M, 4F)",
    setting: "Theatre backstage",
  },
  {
    title: "The Last Rehearsal",
    genre: "Drama",
    duration: "3 Acts | 120 minutes",
    description:
      "An intimate family drama that unfolds during the final rehearsal of a play written by a playwright facing a terminal diagnosis. As the cast gathers for what may be the last time, long-buried secrets surface, relationships are tested, and the line between art and life becomes increasingly blurred. This powerful work examines legacy, loss, and the enduring impact of storytelling, asking what we leave behind when the final curtain falls.",
    cast: "5 characters (2M, 3F)",
    setting: "Rehearsal space",
  },
];
</script>

