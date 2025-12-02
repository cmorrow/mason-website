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
              class="font-bold leading-tight"
            >
              <span class="block text-[5.25rem] md:text-[6.3rem] lg:text-[8.4rem] bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent drop-shadow-lg">Mason</span>
              <span class="block text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">Morrow</span>
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
    <section class="py-24 bg-blue-50 w-full">
      <UContainer>
        <h2
          class="text-4xl md:text-5xl font-bold text-blue-900 mb-16 text-center"
        >
          What I Do
        </h2>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Theatre Education -->
            <div class="relative group">
              <div
                class="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-blue-200"
              >
                <div class="mb-6">
                  <div
                    class="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"
                  ></div>
                  <h3
                    class="text-2xl md:text-3xl font-bold text-blue-900 mb-4"
                  >
                    Theatre Education
                  </h3>
                </div>
                <p class="text-gray-700 leading-relaxed flex-grow">
                  Inspiring and mentoring students in the art of theatre,
                  helping them discover their creative potential and develop
                  their craft.
                </p>
              </div>
            </div>

            <!-- Performance -->
            <div class="relative group">
              <div
                class="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-blue-200"
              >
                <div class="mb-6">
                  <div
                    class="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"
                  ></div>
                  <h3
                    class="text-2xl md:text-3xl font-bold text-blue-900 mb-4"
                  >
                    Performance
                  </h3>
                </div>
                <p class="text-gray-700 leading-relaxed flex-grow">
                  Bringing characters to life on stage with passion,
                  dedication, and a commitment to authentic storytelling.
                </p>
              </div>
            </div>

            <!-- Playwriting -->
            <div class="relative group">
              <div
                class="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-blue-200"
              >
                <div class="mb-6">
                  <div
                    class="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"
                  ></div>
                  <h3
                    class="text-2xl md:text-3xl font-bold text-blue-900 mb-4"
                  >
                    Playwriting
                  </h3>
                </div>
                <p class="text-gray-700 leading-relaxed flex-grow">
                  Creating original theatrical works that explore human
                  experiences, challenge perspectives, and engage audiences
                  in meaningful dialogue.
                </p>
              </div>
            </div>
          </div>
      </UContainer>
    </section>
  </div>
</template>
