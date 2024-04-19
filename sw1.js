if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/45VBA/sw1.js').then(function(reg) {
      console.log('Yey!', reg);
    }).catch(function(err) {
      console.log('Boo!', err);
    });
  }