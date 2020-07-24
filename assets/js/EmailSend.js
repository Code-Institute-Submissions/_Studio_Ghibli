function sendMail(contactForm) {
  emailjs
    .send("gmail", "jihane", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      information_request: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log("Your mail was sent successfully", response);
      },
      function (error) {
        console.log("Sorry try again later", error);
      }
    );
  return false;
}