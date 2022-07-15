import {editarCliente, obtenerCliente} from "./API.js";
import {mostrarAlerta, validar} from "./funciones.js";

(function () {
    const nombreInput = document.querySelector('#nombre');
    const empresaInput = document.querySelector('#empresa');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametroURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametroURL.get('id'));
        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit',validarCliente);
    });

    function mostrarCliente(cliente) {
        const { nombre, empresa, email, telefono, id } = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        if (validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios')
        }

        editarCliente(cliente);
    }
})();