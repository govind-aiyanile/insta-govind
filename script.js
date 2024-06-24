document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      alert('Login successful');
      // Here you can add logic to handle the login process
    } else {
      alert('Please fill in both fields');
    }
  });
  
  function loginWithFacebook() {
    alert('Login with Facebook');
    // Here you can add logic to handle Facebook login
  }
  