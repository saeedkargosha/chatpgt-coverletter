import { getCompletion } from '@/lib/openai'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function openaiPrompt(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const message = await getCompletion(req.body.message)
    res.status(200)
    res.json({ message })
  } catch (error: any) {
    res.status(500)
    res.json({ message: error.message })
  }
}
