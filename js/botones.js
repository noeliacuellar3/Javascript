function showForm(formName) {
    // Ocultar todos los formularios
    var forms = document.querySelectorAll('.form-container');
    forms.forEach(function(form) {
      form.style.display = 'none';
    });

    // Mostrar solo el formulario seleccionado
    var selectedForm = document.getElementById('form-' + formName);
    selectedForm.style.display = 'block';
  }