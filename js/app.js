if (navigator.serviceWorker) {
    const enviroment = window.location.href;
    const pathInit = enviroment.includes('localhost') ? '/sw.js/'
    navigator.serviceWorker.register('/sw.js');
}

