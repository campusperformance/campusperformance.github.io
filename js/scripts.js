/*!
* Start Bootstrap - Coming Soon v6.0.6 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(function() {
    $('#contactForm').submit(function(){
        $.ajax({
            url: 'https://app.99inbound.com/api/e/0EWYJTga',
            type: 'POST',
            data: $('#contactForm').serialize(),
            success: function(){
                document.getElementById("submitSuccessMessage").classList.remove("d-none");
            },
            error: function() {
                document.getElementById("submitErrorMessage").classList.remove("d-none");
            }
        });
        return false;
    });
});

document.getElementById("email").addEventListener("input", function() {
    if (this.value !== "") {
        document.getElementById("submitButton").classList.remove("disabled");
    }
});
