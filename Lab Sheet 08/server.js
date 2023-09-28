const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Question 1
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});


//Question 2
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/regform.html');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    res.send(`
      <h2>Registration Successful</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
    `);
});


//Question 3
const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' }
];
  
app.get('/api/books', (req, res) => {
    res.json(books);
});


//Question 4
const validUsername = 'user';
const validPassword = 'password';

app.get('/auth', (req, res) => {
  const { username, password } = req.query;

  if (username === validUsername && password === validPassword) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.status(401).send('Authentication failed');
  }
});

//Question 5
app.use((req, res, next) => {
    res.status(404).send('Your page cannot be found');
});
  

//Question 6
app.get('/calculate', (req, res) => {
    const { num1, num2, operation } = req.query;
  
    if (!num1 || !num2 || !operation) {
      return res.status(400).send('Missing parameters');
    }
  
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
  
    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      return res.status(400).send('Invalid numbers');
    }
  
    let result;
  
    switch (operation) {
      case 'add':
        result = parsedNum1 + parsedNum2;
        break;
      case 'subtract':
        result = parsedNum1 - parsedNum2;
        break;
      case 'multiply':
        result = parsedNum1 * parsedNum2;
        break;
      case 'divide':
        result = parsedNum1 / parsedNum2;
        break;
      default:
        return res.status(400).send('Invalid operation');
    }
  
    res.send(`Result: ${result}`);
  });
  



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
