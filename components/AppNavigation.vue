<template>
  <nav
    class="sticky top-0 z-50 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 backdrop-blur-md border-b-4 border-blue-700 shadow-2xl"
  >
    <UContainer>
      <div class="flex items-center justify-between h-20">
        <NuxtLink to="/" class="nav-logo group relative">
          <div class="flex items-center gap-3">
            <!-- Decorative accent bar -->
            <div
              class="w-1 h-12 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-400 rounded-full transform transition-transform duration-300"
            ></div>
            <!-- Name text -->
            <div class="flex flex-col">
              <span
                class="text-3xl font-black text-white tracking-tighter uppercase leading-none transition-colors duration-300"
              >
                MASON
              </span>
              <span
                class="text-2xl font-black text-blue-300 tracking-tighter uppercase leading-tight transition-colors duration-300"
              >
                MORROW
              </span>
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link relative group font-semibold text-white hover:text-blue-200 transition-colors duration-300 py-2"
          >
            {{ link.label }}
            <!-- Underline animation -->
            <span
              :class="[
                'absolute bottom-0 left-0 h-0.5 bg-blue-300 transition-all duration-300',
                isActive(link.path) ? 'w-full' : 'w-0',
              ]"
            ></span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-3 text-white hover:text-blue-200 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t-2 border-blue-700 py-4 bg-blue-900/95 backdrop-blur-sm"
      >
        <div class="flex flex-col gap-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="nav-link-mobile relative group font-semibold py-3 px-6 text-white hover:text-blue-200 transition-colors duration-300"
          >
            {{ link.label }}
            <!-- Underline animation -->
            <span
              :class="[
                'absolute bottom-0 left-6 right-6 h-0.5 bg-blue-300 transition-all duration-300 origin-left',
                isActive(link.path)
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100',
              ]"
            ></span>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </nav>
</template>

<script setup>
const route = useRoute();
const mobileMenuOpen = ref(false);

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Theater Education", path: "/theater-education" },
  { label: "Performance", path: "/performance" },
  { label: "Playwriting", path: "/playwriting" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

const isActive = (path) => {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(path);
};
</script>
