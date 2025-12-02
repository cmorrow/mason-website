<template>
  <div>
    <!-- Hero Section with Dark Blue Background -->
    <section
      class="relative min-h-screen flex items-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 overflow-hidden"
    >
      <UContainer class="relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center py-20">
          <!-- Text on left -->
          <div class="space-y-8 text-white">
            <h1
              class="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <span class="block">Mason</span>
              <span class="block">Morrow</span>
            </h1>
            <p
              class="text-2xl md:text-3xl text-blue-100 font-light leading-relaxed"
            >
              Theatre Educator,<br />
              Performer,<br />
              Playwright
            </p>
            <div class="pt-4">
              <p
                class="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl"
              >
                Bringing stories to life on stage and inspiring the next
                generation of theatre artists through education, performance,
                and original playwriting.
              </p>
            </div>
            <div class="pt-4">
              <UButton
                to="/contact"
                size="xl"
                color="blue"
                class="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-lg shadow-lg"
              >
                Work With Me
              </UButton>
            </div>
          </div>

          <!-- Image on right with glow effect -->
          <div class="relative">
            <div class="relative">
              <img
                src="/mason-56.jpg"
                alt="Mason Morrow"
                class="w-full h-[700px] object-cover rounded-lg shadow-2xl"
                style="
                  filter: drop-shadow(0 0 60px rgba(59, 130, 246, 0.4));
                  box-shadow: 0 0 80px rgba(59, 130, 246, 0.2);
                "
              />
              <!-- Annotation -->
              <div
                class="absolute -bottom-4 -left-8 transform rotate-[-5deg] z-10"
              >
                <div class="relative">
                  <svg
                    class="w-32 h-32 text-yellow-400"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 80 Q40 60 60 70 T100 50"
                      stroke="currentColor"
                      stroke-width="3"
                      fill="none"
                      stroke-linecap="round"
                    />
                    <path
                      d="M95 45 L100 50 L95 55"
                      stroke="currentColor"
                      stroke-width="3"
                      fill="none"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p
                    class="absolute top-2 left-4 text-white font-bold text-xl handwritten"
                  >
                    Hi! I'm Mason
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Trusted Section -->
    <section class="py-12 bg-gray-50">
      <UContainer>
        <p class="text-center text-gray-600 text-lg">
          Dedicated to excellence in theatre education, performance, and
          creative storytelling
        </p>
      </UContainer>
    </section>

    <!-- Feature List -->
    <section class="py-20 bg-white">
      <UContainer>
        <h2 class="text-4xl font-bold text-blue-900 text-center mb-12">
          What I Do
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <UCard
            class="text-center p-8 hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div class="text-5xl mb-4">🎭</div>
            <h3 class="text-2xl font-bold text-blue-900 mb-4">
              Theatre Education
            </h3>
            <p class="text-gray-700">
              Inspiring and mentoring students in the art of theatre, helping
              them discover their creative potential and develop their craft.
            </p>
          </UCard>

          <UCard
            class="text-center p-8 hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div class="text-5xl mb-4">🎬</div>
            <h3 class="text-2xl font-bold text-blue-900 mb-4">Performance</h3>
            <p class="text-gray-700">
              Bringing characters to life on stage with passion, dedication, and
              a commitment to authentic storytelling.
            </p>
          </UCard>

          <UCard
            class="text-center p-8 hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div class="text-5xl mb-4">✍️</div>
            <h3 class="text-2xl font-bold text-blue-900 mb-4">Playwriting</h3>
            <p class="text-gray-700">
              Creating original theatrical works that explore human experiences,
              challenge perspectives, and engage audiences in meaningful
              dialogue.
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>
  </div>
</template>
