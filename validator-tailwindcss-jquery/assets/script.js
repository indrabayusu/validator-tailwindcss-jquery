$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirm-password').val();

    $(".error").remove();

    if (name.length < 1) {
      $('#name').after('<div class="error text-red-500">Nama harus diisi</div>');
      $('#name').addClass('border-red-500');
    } else {
      $('#name').removeClass('border-red-500');
    }

    if (email.length < 1) {
      $('#email').after('<div class="error text-red-500">Email harus diisi</div>');
      $('#email').addClass('border-red-500');
    } else if (!validateEmail(email)) {
      $('#email').after('<div class="error text-red-500">Email tidak valid</div>');
      $('#email').addClass('border-red-500');
    } else {
      $('#email').removeClass('border-red-500');
    }

    if (password.length < 6) {
      $('#password').after('<div class="error text-red-500">Kata sandi harus memiliki minimal 6 karakter</div>');
      $('#password').addClass('border-red-500');
    } else {
      $('#password').removeClass('border-red-500');
    }

    if (confirmPassword.length < 6) {
      $('#confirm-password').after('<div class="error text-red-500">Konfirmasi kata sandi harus memiliki minimal 6 karakter</div>');
      $('#confirm-password').addClass('border-red-500');
    } else if (password !== confirmPassword) {
      $('#confirm-password').after('<div class="error text-red-500">Konfirmasi kata sandi tidak cocok</div>');
      $('#confirm-password').addClass('border-red-500');
    } else {
      $('#confirm-password').removeClass('border-red-500');
    }
    
    if ($(".error").length === 0) {
      $('#success-alert').removeClass('hidden');

      setTimeout(function() {
        $('#success-alert').addClass('hidden');
      }, 3000);
    }
  });

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  $('#name').on('input', function() {
    $(".error").remove();
    $('#name').removeClass('border-red-500');
    var name = $('#name').val();
    if (name.length < 1) {
      $('#name').after('<div class="error text-red-500">Nama harus diisi</div>');
      $('#name').addClass('border-red-500');
    }
  });

  $('#email').on('input', function() {
    $(".error").remove();
    $('#email').removeClass('border-red-500');
    var email = $('#email').val();
    if (email.length < 1) {
      $('#email').after('<div class="error text-red-500">Email harus diisi</div>');
      $('#email').addClass('border-red-500');
    } else if (!validateEmail(email)) {
      $('#email').after('<div class="error text-red-500">Email tidak valid</div>');
      $('#email').addClass('border-red-500');
    }
  });

  $('#password').on('input', function() {
    $(".error").remove();
    $('#password').removeClass('border-red-500');
    var password = $('#password').val();
    if (password.length < 6) {
      $('#password').after('<div class="error text-red-500">Kata sandi harus memiliki minimal 6 karakter</div>');
      $('#password').addClass('border-red-500');
    }
  });

  $('#confirm-password').on('input', function() {
    $(".error").remove();
    $('#confirm-password').removeClass('border-red-500');
    var confirmPassword = $('#confirm-password').val();
    if (confirmPassword.length < 6) {
      $('#confirm-password').after('<div class="error text-red-500">Konfirmasi kata sandi harus memiliki minimal 6 karakter</div>');
      $('#confirm-password').addClass('border-red-500');
    } else if ($('#password').val() !== confirmPassword) {
      $('#confirm-password').after('<div class="error text-red-500">Konfirmasi kata sandi tidak cocok</div>');
      $('#confirm-password').addClass('border-red-500');
    }
  });
});