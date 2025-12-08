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
            PERFORMANCE RESUME
          </h1>
          <HeroTagline
            text="A comprehensive overview of theatrical performances, training, and skills."
          />
          <div class="mt-8">
            <a
              href="/resume/Mason-Morrow-Performance-Resume.pdf"
              download
              class="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
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
              Download PDF Resume
            </a>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Resume Content Section -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div
          class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <!-- Header -->
          <div class="text-center mb-8 border-b-2 border-blue-900 pb-6">
            <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Mason J. Morrow
            </h2>
            <div class="text-lg text-gray-700 space-y-1">
              <p>678-237-3589 | themasonmorrow@gmail.com</p>
              <p>Height: 5"8 | Hair: brown | Eyes: blue | Range: Tenor</p>
            </div>
          </div>

          <!-- Regional Theatre -->
          <div class="mb-8">
            <h3
              class="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide"
            >
              Regional Theatre
            </h3>
            <div class="space-y-3 text-gray-800">
              <div>
                <p class="font-semibold">
                  <em>Peter Pan the Musical</em>, Ensemble
                </p>
                <p class="text-sm text-gray-600">
                  Virginia Samford Theatre, Dir. Henry Scott
                </p>
              </div>
              <div>
                <p class="font-semibold">
                  <em>*Our Town</em>, Joe Crowell / Ensemble
                </p>
                <p class="text-sm text-gray-600">Dir. David McMahon</p>
              </div>
            </div>
          </div>

          <!-- Educational Opera -->
          <div class="mb-8">
            <h3
              class="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide"
            >
              Educational Opera
            </h3>
            <div class="space-y-3 text-gray-800">
              <div>
                <p class="font-semibold"><em>Die Fledermaus</em>, Ivan</p>
                <p class="text-sm text-gray-600">
                  Samford University, Dir. Kristen Kenning
                </p>
              </div>
            </div>
          </div>

          <!-- Educational & Community Theatre -->
          <div class="mb-8">
            <h3
              class="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide"
            >
              Educational & Community Theatre
            </h3>
            <div class="space-y-3 text-gray-800">
              <div>
                <p class="font-semibold">
                  <em>The Lion...Wardrobe</em>, Centaur
                </p>
                <p class="text-sm text-gray-600">
                  Samford University, Dir. Laura Byland
                </p>
              </div>
              <div>
                <p class="font-semibold">
                  <em>Lilly's Purple Plastic Purse</em>, Father
                </p>
                <p class="text-sm text-gray-600">Dir. Jordan Rehm</p>
              </div>
              <div>
                <p class="font-semibold"><em>Lucky Stiff</em>, The Body</p>
                <p class="text-sm text-gray-600">Dir. Mark Castle</p>
              </div>
              <div>
                <p class="font-semibold">
                  <em>The SpongeBob Musical</em>, SpongeBob
                </p>
                <p class="text-sm text-gray-600">
                  The Grand Theatre, Dir. Erin Karstensen
                </p>
              </div>
              <div>
                <p class="font-semibold">
                  <em>The Little Mermaid</em>, Scuttle
                </p>
                <p class="text-sm text-gray-600">
                  North Cobb...School, Dir. Matthew Hendrix
                </p>
              </div>
              <div>
                <p class="font-semibold"><em>Bright Star</em>, Darryl</p>
                <p class="text-sm text-gray-600">
                  Act I Inc, Dir. Chris Milligan
                </p>
              </div>
              <div>
                <p class="font-semibold">
                  <em>As You Like It</em>, Charles / Sylvius
                </p>
                <p class="text-sm text-gray-600">Dir. Moritz Arnold</p>
              </div>
            </div>
            <p class="text-sm text-gray-600 italic mt-4">
              (* denotes upcoming performance)
            </p>
          </div>

          <!-- Training -->
          <div class="mb-8">
            <h3
              class="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide"
            >
              Training
            </h3>
            <div class="space-y-2 text-gray-800">
              <p>
                BFA Theatre for Youth (expected graduation spring
                2026)...Samford University
              </p>
              <p class="text-sm">* Voice: Dr. Sharon L. Lawhon</p>
            </div>
          </div>

          <!-- Skills -->
          <div class="mb-8">
            <h3
              class="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide"
            >
              Skills
            </h3>
            <p class="text-gray-800">
              GA driver's license, British RP, tap dance (3 yrs.) ballet (2
              yrs.) stage combat (one-handed sword), stilt experience, puppetry,
              Spanish conversant, rock climbing
            </p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
// No script needed for this page
</script>
