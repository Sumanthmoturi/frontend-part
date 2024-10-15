// pages/api/todos.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const response = await axios.post('http://localhost:3001/todos', req.body);
    return res.status(200).json(response.data);
  } else if (req.method === 'GET') {
    const response = await axios.get('http://localhost:3001/todos');
    return res.status(200).json(response.data);
  }
}
