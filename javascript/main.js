function submitForm() {
  //vinculo los elementos id para trabajar el script
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let telephone = document.getElementById("telephone").value;
  let age = document.getElementById("age").value;
  let web = document.getElementById("web").value;

  //Almacena los errores
  let errors = [];

  //Valida el nombre
  if (name.trim() === "") {
    errors.push("Please enter your name.");
  }

  // valida email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (password === "") {
    errors.push("Please enter a valid password");
  }

  // Valida contraseña y confirmación
  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  // Valida número de teléfono
  let telephoneRegex = /^\d{4}\d{4}$/;
  if (!telephoneRegex.test(telephone)) {
    errors.push(
      "Please enter a valid telephone number in the format XXXX-XXXX."
    );
  }

  // Valida edad
  if (isNaN(age) || age === "") {
    errors.push("Please enter a valid age.");
  }

  // Valida sitio web
  let urlRegex = /^(http|https):\/\/[^\s]+$/;
  if (!urlRegex.test(web)) {
    errors.push("Please enter a valid URL for the website.");
  }

  // si no hay errores envia el formulario
  if (errors.length > 0) {
    // Muestra la lista de errores al usuario
    alert("Error(s):\n" + errors.join("\n"));
    return false; // si hay errores el formulario no se enviará
  } else {
    // muestra la información válida en la consola
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Telephone:", telephone);
    console.log("Age:", age);
    console.log("Web page:", web);

    return true; // Permite que el formulario se envíe
  }
}
