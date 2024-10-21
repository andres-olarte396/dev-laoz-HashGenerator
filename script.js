document.getElementById('generateHashBtn').addEventListener('click', async function() {
    const textInput = document.getElementById('textInput').value;
    const algorithm = document.getElementById('algorithmSelect').value;
    const hashOutput = document.getElementById('hashOutput');

    if (textInput.trim() === '') {
        alert('Por favor, introduce un texto para generar el hash.');
        return;
    }

    try {
        let hash;
        if (algorithm === 'MD5') {
            hash = await generateMD5Hash(textInput);
        } else {
            hash = await generateHash(textInput, algorithm);
        }

        hashOutput.value = hash;
    } catch (error) {
        console.error('Error generando el hash:', error);
    }
});

// Función para generar hash con SHA-1, SHA-256 usando SubtleCrypto
async function generateHash(text, algorithm) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    return bufferToHex(hashBuffer);
}

// Función especial para generar hash MD5 (SubtleCrypto no soporta MD5, por lo que usamos un CDN)
async function generateMD5Hash(text) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/blueimp-md5/js/md5.min.js';
        script.onload = () => {
            resolve(md5(text));
        };
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

// Convertir el array buffer en una cadena hexadecimal
function bufferToHex(buffer) {
    return [...new Uint8Array(buffer)].map(b => b.toString(16).padStart(2, '0')).join('');
}
