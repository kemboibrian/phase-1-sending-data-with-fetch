// Add your code here
function submitData(name, email) {
    // Create an object containing user's name and email
    const formData = {
      name: name,
      email: email
    };
  
    // Create configuration object for fetch() request
    const configObject= {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    // Send POST request to server
    return fetch('http://localhost:3000/users', configObject)
      // Handle response from server
      .then(response => response.json())
      .then(data => {
        // Append the new id to the DOM
        document.body.innerHTML += data.id;
      })
      // Handle errors
      .catch(error => {
        // Append error message to the DOM
        document.body.innerHTML += error.message;
      });
  }
  
