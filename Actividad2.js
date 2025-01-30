document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ejecutar todas las validaciones
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isCURPValid = validateCURP();
    const isRFCValid = validateRFC();
    const isIPValid = validateIP();
    const isBirthdateValid = validateBirthdate();
    const isPasswordValid = validatePassword();

    // Verificar si todas las validaciones son exitosas
    if (isPhoneValid && isEmailValid && isCURPValid && isRFCValid && isIPValid && isBirthdateValid && isPasswordValid) {
        // Mostrar mensaje de éxito
        alert("¡Todas las validaciones fueron exitosas!");
        // También puedes mostrar un mensaje en la página en lugar de un alert
        // document.getElementById('successMessage').textContent = "¡Todas las validaciones fueron exitosas!";
    }
});

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const regex = /^\d{10}$/;
    const errorElement = document.getElementById('phoneError');
    if (regex.test(phone)) {
        errorElement.textContent = '';
        return true; // Validacion exitosa
    } else {
        errorElement.textContent = 'Telefono invalido. Debe tener 10 digitos.';
        return false; // Validacion fallida
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById('emailError');
    if (regex.test(email)) {
        errorElement.textContent = '';
        return true; // Validacion exitosa
    } else {
        errorElement.textContent = 'Correo electronico invalido.';
        return false; // Validacion fallida
    }
}

function validateCURP() {
    const curp = document.getElementById('curp').value;
    const regex = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]{2}$/;
    const errorElement = document.getElementById('curpError');
    if (regex.test(curp)) {
        errorElement.textContent = '';
        return true; // Validacion exitosa
    } else {
        errorElement.textContent = 'CURP invalido.';
        return false; // Validacion fallida
    }
}

function validateRFC() {
    const rfc = document.getElementById('rfc').value;
    const regex = /^[A-Z]{4}\d{6}[A-Z\d]{3}$/;
    const errorElement = document.getElementById('rfcError');
    if (regex.test(rfc)) {
        errorElement.textContent = '';
        return true; // Validacion exitosa
    } else {
        errorElement.textContent = 'RFC invalido.';
        return false; // Validacion fallida
    }
}

function validateIP() {
    const ip = document.getElementById('ip').value;
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const errorElement = document.getElementById('ipError');
    if (regex.test(ip)) {
        errorElement.textContent = '';
        return true; // Validacion exitosa
    } else {
        errorElement.textContent = 'Direccion IP invalida.';
        return false; // Validacion fallida
    }
}

function validateBirthdate() {
    const birthdate = document.getElementById('birthdate').value;
    const regex = /^\d{2}\/\d{2}\/\d{2}$/;
    const errorElement = document.getElementById('birthdateError');
    if (regex.test(birthdate)) {
        errorElement.textContent = '';
        return true; // Validacion exitosa
    } else {
        errorElement.textContent = 'Fecha de cumpleaños invalida. Formato: DD/MM/AA.';
        return false; // Validacion fallida
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const errorElement = document.getElementById('passwordError');
    if (regex.test(password)) {
        errorElement.textContent = '';
        return true; // Validacion exitosa
    } else {
        errorElement.textContent = 'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial.';
        return false; // Validacion fallida
    }
}