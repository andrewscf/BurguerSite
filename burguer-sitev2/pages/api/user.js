import { kv } from '@vercel/kv';
 
export default async function handler(request, response) {
  console.log('entrou2')
  const user = await kv.hgetall('pedidos');
  console.log(user.pedido.length)
  let pedidos = []
  for (let i=0; i < user.pedido.length; i++){
    pedidos.push(JSON.parse(user.pedido[i]))
  }

  return response.status(200).json({pedido: pedidos});
}
