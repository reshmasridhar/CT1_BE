// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000; // Set the port to a value of your choice

// Replace 'your-mongodb-uri' with your actual MongoDB Atlas URI
const mongoURI = 'mongodb+srv://reshmas21it:Reshma@cluster0.t6xawj3.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB schema and model for user data
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  contactNumber: String,
});

const User = mongoose.model('User', UserSchema);

app.use(express.json());

// Create a route to handle user signup
app.post('/PatientSignup', async (req, res) => {
  const { username, email, password, contactNumber } = req.body;

  try {
    const user = new User({
      username,
      email,
      password,
      contactNumber,
    });

    await user.save();// server.js

    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const port = 5000; // Set the port for your backend server
    
    // Replace 'your-mongodb-uri' with your actual MongoDB Atlas URI
    const mongoURI = 'mongodb+srv://reshmas21it:Reshma@cluster0.t6xawj3.mongodb.net/?retryWrites=true&w=majority';
    
    // Connect to MongoDB
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // Define a MongoDB schema and model for user data
    const UserSchema = new mongoose.Schema({
      username: String,
      email: String,
      password: String,
      contactNumber: String,
    });
    
    const User = mongoose.model('User', UserSchema);
    
    app.use(express.json());
    
    // Create a route to handle user signup
    app.post('/PatientSignup', async (req, res) => {
      const { username, email, password, contactNumber } = req.body;
    
      try {
        const user = new User({
          username,
          email,
          password,
          contactNumber,
        });
    
        await user.save();
        res.json({ message: 'Signup successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during signup' });
      }
    });
    
    // Create a route to handle user login
    app.post('/PatientLogin', async (req, res) => { // Corrected route path
      const { email, password } = req.body;
    
      try {
        const user = await User.findOne({ email, password });
    
        if (user) {
          // You can generate a JWT token and send it back for authentication
          // For now, sending a simple response
          res.json({ token: 'your-jwt-token' });
        } else {
          res.status(401).json({ error: 'Invalid email or password' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during login' });
      }
    });
    
    // Start the server on a different port (e.g., 5001 for the backend)
    const backendPort = 5001; // Set a different port for the backend
    app.listen(backendPort, () => {
      console.log(`Server is running on port ${backendPort}`);
    });
    
    res.json({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during signup' });
  }
});

// Create a route to handle user login
app.post('//Patientlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      // You can generate a JWT token and send it back for authentication
      // For now, sending a simple response
      res.json({ token: 'your-jwt-token' });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
