if (navigator.serviceWorker) {
    const enviroment = window.location.href;
    const pathInit = enviroment.includes('localhost') ? '/sw.js' : 'https://molina26.github.io/aldana-molina-pwa-pr2/sw.js'
    navigator.serviceWorker.register(pathInit);
}

