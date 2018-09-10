(function() {
  var nameField = document.querySelector("#name-field");
  var positionField = document.querySelector("#position-field");
  var phoneField = document.querySelector("#phone-field");
  var emailField = document.querySelector("#email-field");

  // Storage
  if (store.get('user') !== undefined) {
    nameField.innerHTML = store.get('user').name;
    positionField.innerHTML = store.get('user').position;
    phoneField.innerHTML = store.get('user').phone;
    emailField.innerHTML = store.get('user').email;
    emailField.setAttribute('href', 'mailto:' + store.get('user').email);
  }

  // Copy entered email to mailto link
  emailField.addEventListener("input", function () {
    emailField.setAttribute('href', 'mailto:' + emailField.innerHTML);
  }, false);

  // Copy to Clipboard
  var markupContainer = document.querySelector('.signature');
  var copyRawButton = document.querySelector('#copy-raw-button');
  var copyHtmlButton = document.querySelector('#copy-html-button');
  copyRawButton
    .addEventListener('click', function () {
      var sigHtml = markupContainer.innerHTML;
      // Copy to clipboard
      copyToClipboard(sigHtml, {
        asHtml: false
      });
      // Store values
      store.set('user', {
        name: nameField.innerHTML,
        position: positionField.innerHTML,
        phone: phoneField.innerHTML,
        email: emailField.innerHTML
      });
      // Change button label
      var copyRawButtonLabel = copyRawButton.innerHTML;
      copyRawButton.innerHTML = "Copied!";
      setTimeout(function() {
        copyRawButton.innerHTML = copyRawButtonLabel;
      }, 2000);
    });
  copyHtmlButton
    .addEventListener('click', function () {
      var sigHtml = markupContainer.innerHTML;
      // Copy to clipboard
      copyToClipboard(sigHtml, {
        asHtml: true
      });
      // Store values
      store.set('user', {
        name: nameField.innerHTML,
        position: positionField.innerHTML,
        phone: phoneField.innerHTML,
        email: emailField.innerHTML
      });
      // Change button label
      var copyHtmlButtonLabel = copyHtmlButton.innerHTML;
      copyHtmlButton.innerHTML = "Copied!";
      setTimeout(function() {
        copyHtmlButton.innerHTML = copyHtmlButtonLabel;
      }, 2000);
    });

})();
