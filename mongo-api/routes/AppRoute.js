import express from 'express'
import CategoryRoute from './CategoryRoute.js';

const AppRoute = express.Router();

AppRoute.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello MongoDB'})
});

// Other Route
AppRoute.use('/category', CategoryRoute);

AppRoute.get('*', (req, res) => {
    const error = new Error ('Not Found')
    return res.status(404).json({ message: error.message });
});

export default AppRoute;