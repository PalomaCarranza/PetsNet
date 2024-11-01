document. addEventListener('DOMContentLoaded', function() {
    const inputBusqueda = document.getElementById('search');
    const botonesVet = document.querySelectorAll('[data-Localidad]');

    inputBusqueda.addEventListener('input', function(){
        filtroVetLocalidad();
    });

    function filtroVetLocalidad() {
        const texto = inputBusqueda.value.toLowerCase();
        botonesVet.forEach(boton => {
            const localidad = boton.getAttribute('data-Localidad').toLowerCase();
            if (localidad.includes(texto)) {
                boton.style.display = '';
            } else {
                boton.style.display = 'none';
            }
        });
    }
});