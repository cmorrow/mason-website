<template>
  <div>
    <div class="relative">
      <!-- Alternating background colors for visual interest -->
      <div
        v-if="index % 2 === 0"
        class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl -z-10"
      ></div>

      <div class="relative overflow-hidden rounded-2xl shadow-xl">
        <div
          class="grid md:grid-cols-2 gap-0 items-stretch"
          :class="index % 2 === 1 ? 'md:grid-flow-dense' : ''"
        >
          <!-- Photo Container (optional) -->
          <div
            v-if="play.photos && play.photos.length > 0"
            class="relative min-h-[400px] md:min-h-[500px] overflow-hidden group cursor-pointer"
            :class="index % 2 === 1 ? 'md:col-start-2' : ''"
            @click="openLightbox(0)"
          >
            <div class="relative w-full h-full">
              <img
                :src="getPhotoSrc(play.photos[0])"
                :alt="`${play.title} - Photo 1`"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              ></div>

              <!-- View Gallery Button -->
              <div class="absolute bottom-6 left-6 z-10">
                <button
                  @click.stop="openLightbox(0)"
                  class="bg-blue-900/95 hover:bg-blue-800 text-white px-8 py-4 rounded-lg shadow-xl transition-all backdrop-blur-sm font-semibold text-lg flex items-center gap-2 group/btn"
                  aria-label="View gallery"
                >
                  <span>View Gallery</span>
                  <svg
                    class="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
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

          <!-- Text Content -->
          <div
            class="p-12 md:p-16 flex flex-col justify-center"
            :class="
              index % 2 === 1 && play.photos && play.photos.length > 0
                ? 'md:col-start-1 md:row-start-1'
                : play.photos && play.photos.length > 0
                ? ''
                : 'md:col-span-2'
            "
          >
            <!-- Blue accent box for alternating items -->
            <div
              v-if="index % 2 === 0"
              class="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-10 rounded-bl-full"
            ></div>

            <div class="relative z-10">
              <h2
                class="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight"
              >
                {{ play.title }}
              </h2>

              <!-- Decorative line -->
              <div
                class="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"
              ></div>

              <!-- Genre and Duration -->
              <div class="mb-6 flex flex-wrap items-center gap-3">
                <span
                  v-if="play.genre"
                  class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ play.genre }}
                </span>
                <span v-if="play.duration" class="text-gray-600 text-sm">
                  {{ play.duration }}
                </span>
              </div>

              <!-- Description -->
              <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                {{ play.description }}
              </p>

              <!-- Additional info box (Cast and Setting) -->
              <div
                v-if="play.cast || play.setting"
                class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-600"
              >
                <div class="space-y-2">
                  <p v-if="play.cast" class="text-sm text-gray-700">
                    <strong class="text-blue-900">Cast:</strong> {{ play.cast }}
                  </p>
                  <p v-if="play.setting" class="text-sm text-gray-700">
                    <strong class="text-blue-900">Setting:</strong>
                    {{ play.setting }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Full Screen Lightbox (only if photos exist) -->
    <Teleport to="body" v-if="play.photos && play.photos.length > 0">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isLightboxOpen"
          class="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
          @click.self="isLightboxOpen = false"
        >
          <!-- Close Button -->
          <button
            @click="isLightboxOpen = false"
            class="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all"
            aria-label="Close lightbox"
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
                  :key="currentPhotoIndex"
                  :src="getPhotoSrc(play.photos[currentPhotoIndex])"
                  :alt="`${play.title} - Photo ${currentPhotoIndex + 1}`"
                  class="max-w-full max-h-full object-contain"
                />
              </Transition>

              <!-- Navigation Arrows -->
              <button
                v-if="play.photos.length > 1"
                @click.stop="previousPhoto"
                class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/95 text-gray-900 p-2 rounded-full shadow-md transition-all backdrop-blur-sm"
                aria-label="Previous photo"
              >
                <svg
                  class="w-4 h-4 md:w-5 md:h-5"
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
                v-if="play.photos.length > 1"
                @click.stop="nextPhoto"
                class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/95 text-gray-900 p-2 rounded-full shadow-md transition-all backdrop-blur-sm"
                aria-label="Next photo"
              >
                <svg
                  class="w-4 h-4 md:w-5 md:h-5"
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

            <!-- Caption with Play Title -->
            <div
              class="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 text-center max-w-4xl px-4"
            >
              <div
                class="bg-black/70 text-white px-6 py-4 rounded-lg backdrop-blur-sm"
              >
                <h3 class="text-xl md:text-2xl font-bold mb-2">
                  {{ play.title }}
                </h3>
                <p
                  v-if="currentPhotoCaption"
                  class="text-base md:text-lg text-white"
                >
                  {{ currentPhotoCaption }}
                </p>
              </div>
              <!-- Photo Counter -->
              <div
                v-if="play.photos.length > 1"
                class="mt-3 text-white/70 text-sm"
              >
                {{ currentPhotoIndex + 1 }} / {{ play.photos.length }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const props = defineProps({
  play: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});

const isLightboxOpen = ref(false);
const currentPhotoIndex = ref(0);

// Helper function to get photo source (supports both string and object formats)
const getPhotoSrc = (photo) => {
  if (typeof photo === "string") {
    return photo;
  }
  return photo?.src || photo;
};

// Helper function to get photo caption
const getPhotoCaption = (photo) => {
  if (typeof photo === "string") {
    return null;
  }
  return photo?.caption || null;
};

// Get current photo caption
const currentPhotoCaption = computed(() => {
  if (!props.play.photos || props.play.photos.length === 0) {
    return null;
  }
  return getPhotoCaption(props.play.photos[currentPhotoIndex.value]);
});

const openLightbox = (index) => {
  if (!props.play.photos || props.play.photos.length === 0) {
    return;
  }
  currentPhotoIndex.value = index;
  isLightboxOpen.value = true;
};

const nextPhoto = () => {
  if (!props.play.photos || props.play.photos.length === 0) {
    return;
  }
  currentPhotoIndex.value =
    (currentPhotoIndex.value + 1) % props.play.photos.length;
};

const previousPhoto = () => {
  if (!props.play.photos || props.play.photos.length === 0) {
    return;
  }
  currentPhotoIndex.value =
    (currentPhotoIndex.value - 1 + props.play.photos.length) %
    props.play.photos.length;
};

// Keyboard navigation for lightbox
onMounted(() => {
  const handleKeyPress = (e) => {
    if (!isLightboxOpen.value) return;

    if (e.key === "ArrowRight") {
      nextPhoto();
    } else if (e.key === "ArrowLeft") {
      previousPhoto();
    } else if (e.key === "Escape") {
      isLightboxOpen.value = false;
    }
  };

  window.addEventListener("keydown", handleKeyPress);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress);
  });
});
</script>
