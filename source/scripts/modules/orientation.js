export function deviceOrientation () {
  return window.matchMedia('(orientation:landscape)').matches ? 'landscape' : 'portrait'
}
