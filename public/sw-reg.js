navigator.serviceWorker
  .register('./service-worker.js')
  .then((registration) => {
    console.log('SW registered succesful: ', registration)
  })
  .catch((registrationError) => {
    console.log('SW registration failed: ', registrationError)
  })
