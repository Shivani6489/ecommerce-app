const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // You can choose any port number you like

app.use(cors());
app.use(express.json());

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Route to get products (sample data)
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 100, color: 'red' },
    { id: 2, name: 'Product 2', price: 200, color: 'blue' },
    // Add more products as needed
  ];
  res.json(products);
});

// Route to get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = { id: productId, name: `Product ${productId}`, price: productId * 100, color: 'red' };
  res.json(product);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
