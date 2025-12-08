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
            HEADSHOTS
          </h1>
          <HeroTagline
            text="Professional headshot photography for casting and auditions."
          />
        </div>
      </UContainer>
    </section>

    <!-- Photo Gallery Grid Section -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="max-w-7xl mx-auto">
          <!-- Grid Layout -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            <!-- Photo Card -->
            <div
              v-for="(photo, index) in photos"
              :key="index"
              class="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <!-- Photo with hover effect -->
              <div
                class="w-full aspect-[3/4] bg-gray-100 overflow-hidden relative cursor-pointer group"
                @click="openFullscreen(index)"
              >
                <img
                  :src="photo.image"
                  :alt="photo.alt || `Headshot ${index + 1}`"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <!-- Fullscreen indicator overlay -->
                <div
                  class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"
                >
                  <!-- Top-left corner indicator -->
                  <div
                    class="absolute top-2 left-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-white drop-shadow-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 8V4m0 0h4M4 4l5 5"
                      />
                    </svg>
                  </div>
                  <!-- Top-right corner indicator -->
                  <div
                    class="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-white drop-shadow-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20 8V4m0 0h-4m4 0l-5 5"
                      />
                    </svg>
                  </div>
                  <!-- Bottom-left corner indicator -->
                  <div
                    class="absolute bottom-2 left-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-white drop-shadow-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 16v4m0 0h4m-4 0l5-5"
                      />
                    </svg>
                  </div>
                  <!-- Bottom-right corner indicator -->
                  <div
                    class="absolute bottom-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-white drop-shadow-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20 16v4m0 0h-4m4 0l-5-5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Download Link -->
              <div class="p-4 bg-white">
                <a
                  :href="photo.image"
                  :download="photo.filename || `headshot-${index + 1}.jpg`"
                  class="inline-flex items-center gap-2 text-blue-950 hover:text-blue-900 font-semibold transition-colors w-full justify-center py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>

          <!-- Empty State (when no photos provided yet) -->
          <div
            v-if="photos.length === 0"
            class="text-center py-16 text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 mx-auto mb-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p class="text-lg">Headshot photos will be added here.</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Fullscreen Modal -->
    <Teleport to="body">
      <div
        v-if="fullscreenIndex !== null"
        class="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
        @click.self="closeFullscreen"
        tabindex="-1"
      >
        <!-- Close Button -->
        <button
          @click="closeFullscreen"
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Close fullscreen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Fullscreen Image Container -->
        <div class="relative max-w-7xl max-h-full flex flex-col items-center">
          <img
            :src="currentPhoto?.image"
            :alt="currentPhoto?.alt"
            class="max-w-full max-h-[85vh] object-contain"
          />

          <!-- Download Link -->
          <div class="mt-6">
            <a
              :href="currentPhoto?.image"
              :download="currentPhoto?.filename"
              class="inline-flex items-center gap-2 bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              @click.stop
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Image
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// Photo data array
const photos = [
  {
    image: "/images/headshots/Mason-Morrow-headshot-01.jpg",
    alt: "Mason Morrow professional headshot 1",
    filename: "Mason-Morrow-headshot-01.jpg",
  },
  {
    image: "/images/headshots/Mason-Morrow-headshot-02.jpg",
    alt: "Mason Morrow professional headshot 2",
    filename: "Mason-Morrow-headshot-02.jpg",
  },
  {
    image: "/images/headshots/Mason-Morrow-headshot-03.jpg",
    alt: "Mason Morrow professional headshot 3",
    filename: "Mason-Morrow-headshot-03.jpg",
  },
];

// Fullscreen modal state
const fullscreenIndex = ref(null);

// Computed property for current photo in fullscreen
const currentPhoto = computed(() => {
  if (fullscreenIndex.value === null) return null;
  return photos[fullscreenIndex.value];
});

// Open fullscreen modal
const openFullscreen = (index) => {
  fullscreenIndex.value = index;
  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden";
};

// Close fullscreen modal
const closeFullscreen = () => {
  fullscreenIndex.value = null;
  // Restore body scroll
  document.body.style.overflow = "";
};

// Handle ESC key to close modal
const handleKeyDown = (event) => {
  if (event.key === "Escape" && fullscreenIndex.value !== null) {
    closeFullscreen();
  }
};

// Add keyboard event listener when component mounts
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

// Remove keyboard event listener when component unmounts
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  // Ensure body scroll is restored if component unmounts while modal is open
  document.body.style.overflow = "";
});
</script>
