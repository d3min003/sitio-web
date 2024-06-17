document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    // Función para enviar el formulario de contacto
    function submitContactForm(event) {
        event.preventDefault();

        // Obtener datos del formulario
        const formData = new FormData(contactForm);

        // Simular envío del formulario (aquí puedes agregar el código para enviar los datos a un servidor)
        setTimeout(() => {
            responseMessage.innerHTML = '¡Mensaje enviado con éxito!';
            responseMessage.style.backgroundColor = '#dff0d8'; // Color de fondo verde claro
            contactForm.reset();
        }, 1000);
    }

    // Event listener para enviar el formulario de contacto
    contactForm.addEventListener('submit', submitContactForm);
});
