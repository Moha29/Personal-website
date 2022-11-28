// Add your code here
let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var radioNo = document.getElementById("no");
  var radioYes = document.getElementById("yes");
  if (
    !form.elements.username.value &&
    !form.elements.date.value &&
    !form.elements.email.value &&
    !form.elements.password.value &&
    !radioNo.checked &&
    !radioYes.checked
  ) {
    console.warn("You must eneter some data to submit this form");
  } else {
    console.log("========= Form Submission =========");
    if (form.elements.username.value)
      console.log("Username:", form.elements.username.value);
    else console.log("Username: no submission");
    if (form.elements.email.value)
      console.log("Email:", form.elements.email.value);
    else console.log("Email: no submission");
    if (radioYes.checked || radioNo.checked) {
      if (radioYes.checked) console.log("Newsletter: Yes");
      if (radioNo.checked) console.log("Newsletter: No");
    } else console.log("Newsletter: no submission");
    if (form.elements.date.value)
      console.log("Date:", form.elements.date.value);
    else console.log("Date: no submission");
  }
}
