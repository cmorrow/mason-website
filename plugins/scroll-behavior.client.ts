export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = () => {
    window.scrollTo(0, 0)
    return { x: 0, y: 0 }
  }
})

