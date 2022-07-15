export function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if (!alerta) {
        const alerta = document.createElement('p');
        alerta.className = 'bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center';

        alerta.innerHTML = `
            <b class="font-bold">¡Error!</b>
            <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
          alerta.remove();
        },5000);
    }
}

export function validar(obj) {
    return !Object.values(obj).every(input => input !== '');
}