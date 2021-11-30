import express from 'express';
import users from './users.json';

const router = express.Router();

router.get('/api/users', (_, res) => {
  res.json(users);
});

export default router;
