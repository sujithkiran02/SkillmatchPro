fetch('http://localhost:3000/api/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Abhishek', email: 'abhi@gmail.com', password: 'password123' })
}).then(res => res.text()).then(text => console.log('Response:', text)).catch(err => console.error('Fetch Error:', err));
