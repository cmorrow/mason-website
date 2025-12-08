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
            text="A gallery of theatrical performances showcasing diverse roles, creative challenges, and artistic growth."
          />
        </div>
      </UContainer>
    </section>

    <!-- Art Gallery Style Section -->
    <section class="bg-white">
      <div class="w-full">
        <!-- Gallery Layout - Stacked Cards -->
        <div class="flex flex-col">
          <!-- Each performance gets its own row -->
          <article
            v-for="(performance, index) in performances"
            :key="`performance-${index}`"
            class="w-full bg-white border-b border-gray-200"
          >
            <div class="flex flex-col lg:flex-row w-full">
              <!-- Image Side - Up to half screen width, showing full image -->
              <!-- Odd rows (index 0, 2, 4...) have image on left, even rows (index 1, 3, 5...) have image on right -->
              <div
                v-if="performance.image"
                :class="[
                  'w-full lg:w-1/2 flex-shrink-0 flex items-center justify-center bg-gray-50',
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2',
                ]"
              >
                <div
                  class="w-full h-full max-h-[80vh] flex items-center justify-center"
                >
                  <img
                    :src="performance.image"
                    :alt="performance.title"
                    class="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
              </div>

              <!-- Content Side -->
              <div
                :class="[
                  'w-full lg:w-1/2 p-12 md:p-16 lg:p-20 flex flex-col justify-center bg-white',
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1',
                ]"
              >
                <div class="mb-6">
                  <span
                    class="inline-block bg-blue-950 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider mb-4"
                  >
                    {{ performance.badge }}
                  </span>
                  <h2
                    class="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 mb-6 leading-tight"
                  >
                    {{ performance.title }}
                  </h2>
                  <p class="text-lg font-semibold text-blue-900 mb-8 italic">
                    {{ performance.role }}
                  </p>
                </div>
                <div
                  class="prose prose-lg max-w-none text-gray-900 leading-relaxed"
                >
                  <p
                    v-for="(paragraph, idx) in performance.description"
                    :key="idx"
                    class="mb-4"
                  >
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const performances = [
  {
    title: "Die Fledermaus",
    role: "Ivan",
    description: [
      "This was my first opera performance, which taught me that I enjoy performing opera, and that aside from the heavier emphasis on music and grandeur, it's not all that different from performing in a musical!",
      "I performed the comedic role of Ivan, Prince Orlofsky's stoic majordomo, and sang with the ensemble. I credit my vocal professor, Dr. Sharon L. Lawhon, for teaching me efficient vocal technique that allowed me to sing convincingly and sustainably from auditions to closing—even while I was sick during the opening performance.",
    ],
    image: "/images/performance/die-fledermaus-01.jpg",
    layout: "large-feature",
    badge: "Educational Opera",
    initials: "DF",
  },
  {
    title: '"You Are Light" DR Mission Trip',
    role: "Performer & Teacher",
    description: [
      "Under the leadership of my TFY professor, Laura Byland, and my peer, Elise Samlowski, I and several other Theatre for Youth majors performed and taught creative drama lessons for a weeklong mission trip in the Dominican Republic.",
      "Using biblical scripture and the children's book You Are Light as source material, we collaborated to prepare three pieces: a devised non-verbal movement piece, a spoken-word piece, and a short play which I wrote and helped translate. We performed 11 shows for over 250 children.",
      "My Christian faith is incredibly important to me, which made it rewarding to use my artistry as a means for ministry. I was able to draw on my Spanish skills for this project during performance, teaching, and interacting with children afterwards.",
    ],
    image: "/images/performance/you-are-light-01.jpg",
    layout: "split-dark-left",
    badge: "Mission Trip",
    initials: "YAL",
  },
  {
    title: "Lilly's Purple Plastic Purse",
    role: "Father",
    description: [
      "This was the first touring show I've worked on, and quite a fun introduction! This show called for a very fast tempo to keep the show engaging and within a short run-time, and was a great exercise in acting truthfully while operating at a fast pace.",
    ],
    image: "/images/performance/lillys-plastic-purse-01.jpg",
    layout: "grid-group-start",
    badge: "Touring Show",
    initials: "LP",
  },
  {
    title: "Lucky Stiff",
    role: "The Body",
    description: [
      'This is one of my favorite roles to date. When approaching the role of The Body, I had to throw all of my acting technique out the window for this role and start from the ground up—it doesn\'t really make sense to attempt "living truthfully under imaginary circumstances" when your character is not living.',
      "As opposed to almost every role I've ever done, my approach onstage was to disassociate as much as possible in order to not break at the shenanigans of my wildly funny castmates. The costume was able to cover my long, shallow breaths so I could appear sufficiently lifeless to the audience.",
      "One of the audience members commented that they thought I was a prop until I got up to lead a kickline during the nightmare sequence in Act 2. I credit the American actor Chuck Lamb as my inspiration for the role.",
    ],
    image: "/images/performance/lucky-stiff-01.jpg",
    layout: "grid-group-end",
    badge: "Favorite Role",
    initials: "LS",
  },
  {
    title: "The Lion, The Witch, & The Wardrobe",
    role: "Centaur",
    description: [
      'This is the most physically demanding roles I\'ve played to date. To operate my puppet, I strapped into the "horse" half like a backpack (which weighed about 25 pounds), and used sticks to control the back legs and stabilize while walking on painter stilts.',
      "There wasn't a time during the show where it made logistical sense to \"get out of puppet,\" meaning once I got into the puppet, I stayed in it for the hour-long run of the show until getting out for bows. Additionally, I had to have a swordfight during the show's lengthy final battle sequence, which was frankly epic.",
      "We had school performances in the morning, meaning back-to-back three show days. This production certainly taught me the difficult physical demands of TYA performance, and made me appreciate the stamina I'd built up through running and rock climbing!",
      "That being said, hearing our afternoon audience of middle schoolers cheer when Aslan took down the White Witch was one of the most rewarding moments as a performer I've ever had.",
    ],
    image: "/images/performance/lion-witch-wardrobe-01.jpg",
    layout: "large-feature-light",
    badge: "Physically Demanding",
    initials: "LWW",
  },
  {
    title: "Peter Pan: The Musical",
    role: "Ensemble",
    description: [
      "Peter Pan at Virginia Samford Theatre was my first professional show. My track consisted of a Neverlander (our production's interpretation of the Indians) and a Pirate, calling for dance, lifts, and stage combat.",
      "One of my favorite moments from the run was some quick problem solving: we got the word 10 minutes before Act 2 that one of our Neverlanders who had been sick wouldn't be able to make the show, so as an ensemble we worked together to restage our choreography minutes before going on.",
    ],
    image: "/images/performance/peter-pan-01.jpg",
    layout: "split-dark-left",
    badge: "First Professional Show",
    initials: "PP",
  },
];
</script>
