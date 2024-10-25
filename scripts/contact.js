document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submitted successfully!");
  document.getElementById("form").reset();
});
