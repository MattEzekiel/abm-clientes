const url = 'http://localhost:4000/clientes';

/**
 * Crear un cliente
 * @param cliente
 * @returns {Promise<void>}
 */
export const nuevoCliente =  async cliente => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        window.location.href = 'index.html'
    } catch (e) {
        console.error(e)
    }
}

/**
 * Obtiene los clientes
 * @returns {Promise<any>}
 */
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        return await resultado.json();
    } catch (e) {
        console.error(e)
    }
}

/**
 * Elimina un cliente
 * @param id
 * @returns {Promise<void>}
 */
export const eliminar = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
    } catch (e) {
        console.error(e)
    }
}

/**
 * Obtiene 1 Cliente
 * @param id
 * @returns {Promise<any>}
 */
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        return await resultado.json();
    } catch (e) {
        console.error(e)
    }
}

export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (e) {
        console.error(e);
    }
}