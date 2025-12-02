<template>
  <nav class="sticky top-0 z-50 bg-blue-900/95 backdrop-blur-sm border-b border-blue-800 shadow-sm">
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <NuxtLink 
          to="/" 
          class="text-2xl font-bold text-white hover:text-blue-200 transition-colors underline decoration-2 underline-offset-4"
        >
          Mason Morrow
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            :class="[
              'font-medium transition-colors px-3 py-2 rounded-md',
              isActive(link.path)
                ? 'text-blue-300 bg-blue-800/50 font-semibold' 
                : 'text-white hover:text-blue-200'
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-white hover:text-blue-200 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-blue-800 py-4"
      >
        <div class="flex flex-col gap-2">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            :class="[
              'font-medium transition-colors py-2 px-3 rounded-md',
              isActive(link.path)
                ? 'text-blue-300 bg-blue-800/50 font-semibold' 
                : 'text-white hover:text-blue-200'
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </nav>
</template>

<script setup>
const route = useRoute()
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Resume', path: '/resume' },
  { label: 'Performance', path: '/performance' },
  { label: 'Playwright', path: '/playwright' },
  { label: 'Contact', path: '/contact' }
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

