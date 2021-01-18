export function debounce(func, timeout) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
     func.apply(this, arguments) 
    }, timeout)
  }
}
