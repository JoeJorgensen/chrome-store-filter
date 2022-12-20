navigator.serviceWorker.register('service-worker.js').then(function(registration) {
    console.log('Service worker registered with scope: ', registration.scope);
  }).catch(function(error) {
    console.log('Service worker registration failed: ', error);
  });
  
  // Retrieve the saved filters from storage
  chrome.storage.local.get(['filters'], result => {
    const filters = result.filters || {};
    console.log('Filters retrieved from storage: ', filters);
  });