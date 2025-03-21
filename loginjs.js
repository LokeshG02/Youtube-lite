document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform login validation (you can replace this with your own logic)
    if (username === 'youtubeclone' && password === 'youtube@123') {
        // Redirect to the front page
        window.location.href = 'sample.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
