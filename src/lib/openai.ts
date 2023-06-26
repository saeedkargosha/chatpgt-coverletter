import { coverLetter, coverLetterTemplate } from '@/data/cover-letter'
import { cv } from '@/data/cv'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

async function getCompletion(prompt: string, model: string = 'gpt-3.5-turbo') {
  try {
    const p = `
    Your task is to create a cover letter based on my cv and job description.

    Write a cover latter based on the information provided in the my cv delimited by triple single quotation marks and job description delimited by double single quotation marks.

    Write a cover letter like a example cover letter delimited by double underscores.
    
    Don't write about my educations and Languages.

    Don't write more about familir skills just write important skills that compnay needs .

    Don't mention my previous experience and my previous compnay.
    
    Don't write about commitment, passion, and the company is working on it and what it wants to do.
    
    Format everything as HTML that can be used in a website without html, head, title, body tags based on the template cover letter provided by triple underscores just [] is dynamic.

    Use at most 100 words "in one parageraph".

    my cv: '''${cv}'''

    job description: ''${prompt}''
    
    template cover letter: ___${coverLetterTemplate}___
    
    example cover letter: __${coverLetter}__
    `

    const chatCompletion = await openai.createChatCompletion({
      model,
      messages: [{ role: 'user', content: p }],
    })

    return chatCompletion.data.choices[0].message?.content
  } catch (error: any) {
    let msg = 'Error in getCompletion'
    if (error.response) {
      console.log(error.response.status)
      msg = error.response.data
    } else {
      msg = error.message
    }
    throw new Error(msg)
  }
}

export { getCompletion }
