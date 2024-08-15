import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



$( "#enviarCorreo" ).on( "click", function() {
    alert( "Te estaremos contactando pronto. ¡Muchas gracias!" );
    setTimeout(function() {
        $('#enviarCorreo').tooltip('hide');
    }, 500);
});

