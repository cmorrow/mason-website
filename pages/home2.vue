<template>
  <div>
    <!-- Alternative Navigation -->
    <AlternativeNavigation />

    <!-- Hero Section with Split Layout -->
    <section class="relative min-h-screen flex flex-col md:flex-row pt-16">
      <!-- Left Section - Blue Background -->
      <div
        class="w-full md:w-1/2 bg-blue-600 flex flex-col justify-between p-8 md:p-12 lg:p-16 md:min-h-screen"
      >
        <!-- Main Content -->
        <div class="flex-1 flex flex-col justify-center space-y-6">
          <!-- Greeting -->
          <p
            class="text-blue-200 text-sm md:text-base font-light tracking-wider uppercase"
          >
            HELLO
          </p>

          <!-- Name -->
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            I'm Mason
          </h1>

          <!-- Profession and Location -->
          <p
            class="text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
          >
            A Theatre Educator, Performer, and Playwright From Los Angeles.
          </p>

          <!-- CTA Button -->
          <div class="pt-4">
            <UButton
              to="/contact"
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-none transition-all"
            >
              HIRE ME
            </UButton>
          </div>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-4 mt-8">
          <!-- Website/Portfolio Icon -->
          <a
            href="/"
            class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all"
            aria-label="Website"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </a>

          <!-- Instagram Icon -->
          <a
            href="#"
            class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all"
            aria-label="Instagram"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>

          <!-- Behance Icon -->
          <a
            href="#"
            class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all"
            aria-label="Behance"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.092h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.767h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
              />
            </svg>
          </a>

          <!-- Twitter/X Icon -->
          <a
            href="#"
            class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all"
            aria-label="Twitter"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Right Section - White Background with Image -->
      <div class="w-full md:w-1/2 bg-white flex flex-col md:min-h-screen">
        <!-- Large Photo - Full Width -->
        <div class="w-full">
          <img
            src="/images/mason-56.jpg"
            alt="Mason Morrow"
            class="w-full h-auto object-cover"
          />
        </div>

        <!-- About Text -->
        <div class="p-8 md:p-12 lg:p-16 mb-8">
          <p
            class="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            I work to create innovative theatrical experiences that inspire, and
            foster memorable connections between stories and their audiences.
            With a focus on education, performance, and playwriting, I strive to
            create meaningful and impactful productions through passionate and
            deliberate artistry.
          </p>
        </div>

        <!-- CTA Button -->
        <div class="px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16">
          <UButton
            to="/resume"
            size="lg"
            class="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-none transition-all"
          >
            VIEW RESUME
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: "Mason Morrow - Theatre Educator, Performer, Playwright",
  meta: [
    {
      name: "description",
      content:
        "Theatre Educator, Performer, and Playwright from Los Angeles. Bringing stories to life on stage and inspiring the next generation of theatre artists.",
    },
  ],
});
</script>

<style scoped>
/* Ensure section extends full height and columns match */
section {
  min-height: 100vh;
}

@media (min-width: 768px) {
  /* Make both columns match height and extend full height */
  section > div:first-child,
  section > div:last-child {
    min-height: 100vh;
  }
}
</style>
