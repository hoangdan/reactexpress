const express = require('express');
const app = express();

app.get('/api/customers',(req,res) => {
  const customers = [
    {id: 1, firstname: 'dandi', lastname: 'major'},
    {id: 2, firstname: 'PGL', lastname: 'super'},
    {id: 3, firstname: 'server', lastname: 'on'},
    {id: 4, firstname: 'start', lastname: 'close'} 
  ];
  res.json(customers);
});

app.get('/api/hello',(req,res) => {
  const lists = [
    {id: 1, age: '12', mmr: '5325'},
    {id: 2, age: '32', mmr: '4123'},
  ];
  res.json(lists);
});

const port = 5000;

app.listen(port, ()=> console.log('server start on port', port));
