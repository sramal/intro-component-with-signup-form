/*
    set the display on
*/
function displayOn(messageElement, imageElement) {
    messageElement.style.display = 'block';
    imageElement.style.display = 'inline';
}

/*
    set the display off
*/
function displayOff(messageElement, imageElement) {
    messageElement.style.display = 'none';
    imageElement.style.display = 'none';
}

/*
    Check to see if first name entered is empty.
    if empty then turn on the error message and
    the error icon image.
*/
function validateFirstName(firstName) {
    if (firstName === '') {
        displayOn(document.querySelector('p.error-fname'),
                       document.querySelector('.img-error-fname'));
    }        
}

/*
    Check to see if last name entered is empty.
    if empty then turn on the error message and
    the error icon image.
*/
function validateLastName(lastName) {
    if (lastName === '') {
        displayOn(document.querySelector('p.error-lname'),
                       document.querySelector('.img-error-lname'));
    }
}

/*
    when email is entered this will be called to check the format
*/
function validateEmailFormat(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

/*
    Check to see if email entered is empty or valid format
    if empty or valid formatthen turn on the error message
    and the error icon image.
*/
function validateEmail(email) {
    if (email === '') {
        displayOn(document.querySelector('p.error-email'),
                  document.querySelector('.img-error-email'));
                  
    } else if (!validateEmailFormat(email)) {
        /*
            Changing the error text before turning on the display
        */
        document.querySelector('p.error-email').innerText = "Looks like this is not an email";

        displayOn(document.querySelector('p.error-email'),
        document.querySelector('.img-error-email'));
    }
}

/*
    Check to see if password entered is empty.
    if empty then turn on the error message and
    the error icon image.
*/
function validatePassword(password) {
    if (password === '') {
        displayOn(document.querySelector('p.error-password'),
                  document.querySelector('.img-error-password'));
    }
}

/*
    clickHandler is called when "Claim your free trial" button is
    clicked. It calls all the input validation functions for each
    input field.
*/
function clickHandler() {
    const inputElements = [...document.querySelectorAll('input.item')];

    inputElements.forEach(element => {
        
        if (element.name === 'fname') {
            validateFirstName(element.value.trim());

        } else if (element.name === 'lname') {
            validateLastName(element.value.trim());
 
        } else if (element.name === 'email') {
            validateEmail(element.value.trim());

        } else if (element.name === 'password') {
            validatePassword(element.value.trim());
        }
    });
}

/*
    when this is called, this clear hides the error messages
    and the error icon for all the fields
*/ 
function clearErrorMessage(id) {
    if (id === 'fname')
        displayOff(document.querySelector('p.error-fname'), document.querySelector('.img-error-fname'));

    else if (id === 'lname')
        displayOff(document.querySelector('p.error-lname'), document.querySelector('.img-error-lname'));

    else if (id === 'email') {
        displayOff(document.querySelector('p.error-email'), document.querySelector('.img-error-email'));
        /* Also set the default error message for email back */
        document.querySelector('p.error-email').innerText = "Email cannot be empty";
    }

    else if (id === 'password')
        displayOff(document.querySelector('p.error-password'), document.querySelector('.img-error-password'));
}

