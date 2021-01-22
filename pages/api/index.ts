// route => /api/data
import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc<NextApiRequest, NextApiResponse>().get((req,res)=>{
  res.json({message: 'get'})
})
.post((req,res)=>{
  res.json({message: 'post'})
})
export default handler;
