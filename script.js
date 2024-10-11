const primeDisplay = document.getElementById('prime-number');
let primes = [2];
let currentIndex = 0;

// Función para solicitar pantalla completa
function requestFullscreen() {
    const elem = document.documentElement; // El elemento raíz de la página
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari y Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}

// Función para verificar si un número es primo
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Función para obtener el siguiente número primo
function getNextPrime(lastPrime) {
    let next = lastPrime + 1;
    while (!isPrime(next)) {
        next++;
    }
    return next;
}

// Evento para el clic izquierdo (siguiente primo)
document.addEventListener('click', (event) => {
    if (event.button === 0) {  // 0 es para el clic izquierdo
        currentIndex++;
        if (currentIndex >= primes.length) {
            const nextPrime = getNextPrime(primes[primes.length - 1]);
            primes.push(nextPrime);
        }
        primeDisplay.textContent = primes[currentIndex];
    }
});

// Evento para el clic derecho (primo anterior)
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();  // Prevenir el menú contextual del navegador
    if (event.button === 2) {  // 2 es para el clic derecho
        if (currentIndex > 0) {
            currentIndex--;
            primeDisplay.textContent = primes[currentIndex];
        }
    }
});
