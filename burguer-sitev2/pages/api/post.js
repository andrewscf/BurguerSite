
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  
  if(req.method === 'POST'){
    console.log(req.body)
    
    try {
      const dados = await kv.hgetall('pedidos')
      const novoDados = [...dados.pedido, req.body]
      await kv.hset('pedidos', {pedido: novoDados});
      
      res.status(201).json({ message: 'Meetup inserted!' })
    } catch (error) {
      return response.status(500).json({ error })
    }
  }
}