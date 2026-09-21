import { check, validationResult } from 'express-validator';
import express from 'express';
import connectDatabase from './config/db.js';

const app = express();

connectDatabase();

app.use(express.json());

app.get('/', (req, res) => res.send('API running'));

app.post(
  '/api/users',
  [
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);
  }
);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));