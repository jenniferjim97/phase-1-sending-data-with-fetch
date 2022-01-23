

function submitData (name, email) {
  const formData = {
    "name": name, 
    "email": email,
  }
  
  const configurationObject = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
        'Accept': 'application/json',
  },
  body: JSON.stringify(formData)
  }
  return fetch('http://localhost:3000/users', configurationObject)
 
  .then(res => res.json())
  .then(object => document.body.innerHTML = object['id'])
  .catch(error => document.body.innerHTML = error.message)
  }

  submitData("jennifer", "jennifer@email.com");