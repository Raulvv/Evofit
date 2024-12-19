document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    
    // Recolecta los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Construye el cuerpo del email
    const emailBody = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;

    // Usa EmailJS para enviar el email (requiere configuración previa de EmailJS)
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: nombre,
        from_email: email,
        message: mensaje
    }).then(function(response) {
        alert('Mensaje enviado exitosamente!');
    }, function(error) {
        alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    });
});

(function(){
    emailjs.init('YOUR_USER_ID');
})();