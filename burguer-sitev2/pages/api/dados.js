import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const result1 =
      await sql`SELECT * FROM burguer`;
    const burguer = result1.rows

    const result2 =
      await sql`SELECT * FROM dogs`;
    const dogs = result2.rows

    const result3 =
      await sql`SELECT * FROM bebidas`;
    const bebidas = result3.rows

    const result4 =
      await sql`SELECT * FROM porçao`;
    const porcao = result4.rows

    const result5 =
      await sql`SELECT * FROM Imagens`;
    const imagens = result5.rows
    
    return response.status(200).json({ burguer: burguer, dogs:dogs, bebidas: bebidas, porcao: porcao, imagens: imagens});
  } catch (error) {
    return response.status(500).json({ error });
  }
}