self.addEventListener('install', (event) => {
    console.log('SW: Instalado')
})

// instalo y desinstalo cosas que ya no necesito en mi cache con activate
self.addEventListener('activate', (event) => {
    console.log('SW .. Activado c:')

    // const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log('Instalaciones finalizadas');
    //         resolve('ok')
    //     } , 4000);
    // })

    // // event.waitUntil(myPromise);
    // event.waitUntil(Promise.all([myPromise]));
});

self.addEventListener('fetch', (event) => {
    //console.log(event.request.url)
    

    if (event.request.url.includes('style.css')) {
        const respuesta = new Response(
            `body {
                color: red;
                background-color: #000;
            }`,
            {
                headers: {
                    'Content-Type': 'text/css'
                }
            }
        )
        event.respondWith(respuesta);   
    }

    if (event.request.url.includes('imagen1.jpg')) {
        const image = fetch('/images/imagen2.jpg');
        event.respondWith(image);
    }
})
