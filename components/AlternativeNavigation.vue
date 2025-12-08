<template>
  <nav
    class="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-md border-b border-blue-700/30 shadow-lg"
  >
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <NuxtLink
          to="/"
          class="nav-logo text-2xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 bg-clip-text text-transparent hover:from-blue-200 hover:via-white hover:to-blue-200 transition-all duration-300 tracking-tight"
        >
          Mason Morrow
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[
              'nav-link relative font-semibold px-5 py-2 rounded-full transition-all duration-300',
              isActive(link.path)
                ? 'text-slate-900 bg-white shadow-lg scale-105'
                : 'text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/10 hover:scale-110 hover:shadow-xl',
            ]"
          >
            <span class="relative z-10">{{ link.label }}</span>
            <span
              v-if="isActive(link.path)"
              class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 via-white to-blue-200 opacity-20 animate-pulse"
            ></span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-white hover:text-blue-200 transition-all duration-300 hover:rotate-90 rounded-lg hover:bg-white/10"
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
              stroke-width="2"
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
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-blue-700/30 py-4"
      >
        <div class="flex flex-col gap-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            :class="[
              'nav-link-mobile font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center',
              isActive(link.path)
                ? 'text-slate-900 bg-white shadow-lg scale-105'
                : 'text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/10 hover:scale-105',
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
const route = useRoute();
const mobileMenuOpen = ref(false);

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Resume", path: "/resume" },
  { label: "Performance", path: "/performance" },
  { label: "Playwriting", path: "/playwriting" },
  { label: "Contact", path: "/contact" },
];

const isActive = (path) => {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(path);
};
</script>
