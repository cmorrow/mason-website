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
          <!-- <HeroTagline
            text="A gallery of theatrical performances showcasing diverse roles, creative challenges, and artistic growth."
          /> -->
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
                  class="relative w-full h-full max-h-[80vh] flex items-center justify-center group"
                  @mouseenter="hoveredImageIndex = index"
                  @mouseleave="hoveredImageIndex = null"
                >
                  <!-- Image with cross-dissolve transition -->
                  <div
                    class="relative w-full h-full flex items-center justify-center"
                  >
                    <Transition
                      enter-active-class="transition-opacity duration-500 ease-in-out"
                      enter-from-class="opacity-0"
                      enter-to-class="opacity-100"
                      leave-active-class="transition-opacity duration-500 ease-in-out"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <img
                        :key="getCurrentImageSrc(performance, index)"
                        :src="getCurrentImageSrc(performance, index)"
                        :alt="performance.title"
                        class="absolute inset-0 m-auto max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </Transition>
                  </div>

                  <!-- Navigation Controls (only show if gallery exists and has multiple images) -->
                  <Transition
                    enter-active-class="transition-opacity duration-300"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-opacity duration-300"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <div
                      v-if="
                        performance.gallery &&
                        performance.gallery.length > 1 &&
                        hoveredImageIndex === index
                      "
                      class="absolute inset-0 flex items-center justify-between px-4 pointer-events-none"
                    >
                      <!-- Previous Button -->
                      <button
                        @click.stop="previousInlineImage(index)"
                        class="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all backdrop-blur-sm pointer-events-auto"
                        aria-label="Previous image"
                      >
                        <svg
                          class="w-5 h-5 md:w-6 md:h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      <!-- Next Button -->
                      <button
                        @click.stop="nextInlineImage(index)"
                        class="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all backdrop-blur-sm pointer-events-auto"
                        aria-label="Next image"
                      >
                        <svg
                          class="w-5 h-5 md:w-6 md:h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition>
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
                <!-- Gallery Button for Lucky Stiff -->
                <div
                  v-if="performance.gallery && performance.gallery.length > 0"
                  class="mt-8"
                >
                  <button
                    @click="openGallery(index)"
                    class="bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-lg shadow-lg transition-all font-semibold text-lg flex items-center gap-2 group"
                    aria-label="View gallery"
                  >
                    <span>View Gallery</span>
                    <svg
                      class="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Full Screen Gallery Slideshow -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isGalleryOpen"
          class="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
          @click.self="closeGallery"
        >
          <!-- Close Button -->
          <button
            @click="closeGallery"
            class="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all"
            aria-label="Close gallery"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Full Screen Image Container -->
          <div
            class="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 pb-24 md:pb-32"
          >
            <div
              class="relative w-full h-full flex items-center justify-center"
            >
              <Transition
                enter-active-class="transition-opacity duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-300"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                mode="out-in"
              >
                <img
                  :key="currentImageIndex"
                  :src="currentGallery[currentImageIndex]"
                  :alt="`${currentPerformanceTitle} - Photo ${
                    currentImageIndex + 1
                  }`"
                  class="max-w-full max-h-full object-contain"
                />
              </Transition>

              <!-- Navigation Arrows -->
              <button
                v-if="currentGallery.length > 1"
                @click.stop="previousImage"
                class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/95 text-gray-900 p-3 md:p-4 rounded-full shadow-md transition-all backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg
                  class="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                v-if="currentGallery.length > 1"
                @click.stop="nextImage"
                class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/95 text-gray-900 p-3 md:p-4 rounded-full shadow-md transition-all backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg
                  class="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <!-- Caption with Performance Name and Role -->
            <div
              class="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 text-center max-w-4xl px-4"
            >
              <div
                class="bg-black/70 text-white px-6 py-4 rounded-lg backdrop-blur-sm"
              >
                <h3 class="text-xl md:text-2xl font-bold mb-2">
                  {{ currentPerformanceTitle }}
                </h3>
                <p
                  v-if="currentPerformanceRole"
                  class="text-sm md:text-base text-gray-200"
                >
                  {{ currentPerformanceRole }}
                </p>
              </div>
              <!-- Image Counter -->
              <div
                v-if="currentGallery.length > 1"
                class="mt-3 text-white/70 text-sm"
              >
                {{ currentImageIndex + 1 }} / {{ currentGallery.length }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const isGalleryOpen = ref(false);
const currentImageIndex = ref(0);
const currentGallery = ref([]);
const currentPerformanceTitle = ref("");
const currentPerformanceRole = ref("");
const hoveredImageIndex = ref(null);
const inlineImageIndices = ref({});

// Get current image source for inline slideshow
const getCurrentImageSrc = (performance, index) => {
  // If performance has a gallery and we're tracking its index, use gallery image
  if (performance.gallery && performance.gallery.length > 0) {
    const imageIndex = inlineImageIndices.value[index] || 0;
    return performance.gallery[imageIndex];
  }
  // Otherwise use the default image
  return performance.image;
};

// Navigate to next image in inline slideshow
const nextInlineImage = (performanceIndex) => {
  const performance = performances[performanceIndex];
  if (performance.gallery && performance.gallery.length > 0) {
    const currentIndex = inlineImageIndices.value[performanceIndex] || 0;
    inlineImageIndices.value[performanceIndex] =
      (currentIndex + 1) % performance.gallery.length;
  }
};

// Navigate to previous image in inline slideshow
const previousInlineImage = (performanceIndex) => {
  const performance = performances[performanceIndex];
  if (performance.gallery && performance.gallery.length > 0) {
    const currentIndex = inlineImageIndices.value[performanceIndex] || 0;
    inlineImageIndices.value[performanceIndex] =
      (currentIndex - 1 + performance.gallery.length) %
      performance.gallery.length;
  }
};

const openGallery = (performanceIndex) => {
  const performance = performances[performanceIndex];
  if (performance.gallery && performance.gallery.length > 0) {
    currentGallery.value = performance.gallery;
    currentPerformanceTitle.value = performance.title;
    currentPerformanceRole.value = performance.role;
    // Start from the current inline image index if available
    currentImageIndex.value = inlineImageIndices.value[performanceIndex] || 0;
    isGalleryOpen.value = true;
    // Prevent body scroll when gallery is open
    document.body.style.overflow = "hidden";
  }
};

const closeGallery = () => {
  isGalleryOpen.value = false;
  // Restore body scroll
  document.body.style.overflow = "";
};

const nextImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % currentGallery.value.length;
};

const previousImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + currentGallery.value.length) %
    currentGallery.value.length;
};

// Keyboard navigation for gallery
onMounted(() => {
  const handleKeyPress = (e) => {
    if (!isGalleryOpen.value) return;

    if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      previousImage();
    } else if (e.key === "Escape") {
      closeGallery();
    }
  };

  window.addEventListener("keydown", handleKeyPress);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress);
    // Restore body scroll on unmount
    document.body.style.overflow = "";
  });
});

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
    gallery: [
      "/images/performance/lucky-stiff-01.jpg",
      "/images/performance/lucky-stiff-02.jpg",
      "/images/performance/lucky-stiff-03.jpg",
      "/images/performance/lucky-stiff-04.jpg",
    ],
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
