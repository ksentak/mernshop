import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

// Connect to db
connectDB();

// Create express application
const app = express();

// Use morgan in development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Recognize incoming requests as JSON
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

// Sending PayPal API key to front-end when requested
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

// Uploads folder for new product images
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Production build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/front-end/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

// Custom middleware
app.use(notFound);
app.use(errorHandler);

// Assigning port
const PORT = process.env.PORT || 5000;

// App listen
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
