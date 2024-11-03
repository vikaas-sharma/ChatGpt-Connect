const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const chatRoutes = require('./routes/chatRoutes');
app.use('/api', chatRoutes);  // Adjusted route path

// Serve static files
app.use(express.static('public'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
