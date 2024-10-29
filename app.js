import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'
import passport from 'passport';
dotenv.config()

const app = express();
app.use(passport.initialize())

app.use("/api/auth",authRoutes)

app.get('/', (req, res) => res.send('Welcome to the OAuth 2.0 Role-Based Access App'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
