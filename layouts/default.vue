<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Component -->
    <AppNavigation />

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-blue-900 text-white mt-20">
      <UContainer>
        <div class="py-12 text-center">
          <p class="text-lg font-semibold mb-2">Mason Morrow</p>
          <p class="text-blue-200 mb-4">Theatre Educator, Performer, Playwright</p>
          <NuxtLink 
            to="/contact" 
            class="text-blue-300 hover:text-white transition-colors inline-block"
          >
            Contact
          </NuxtLink>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

