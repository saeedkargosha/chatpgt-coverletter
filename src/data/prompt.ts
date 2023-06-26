import { coverLetter, coverLetterTemplate } from './cover-letter'
import { cv } from './cv'

export const prompt = `
Your task is to create a cover letter based on my cv and job description.

Write a cover latter based on the information provided in the my cv delimited by triple single quotation marks and job description delimited by double single quotation marks.

Write a cover letter like a example cover letter delimited by double underscores.

Don't write about my educations and Languages.

Don't write more about familir skills just write important skills that compnay needs .

Don't mention my previous experience and my previous compnay.

Don't write about commitment, passion. and the company is working on it and what it wants to do.

Format everything as HTML that can be used in a website without html, head, title, body tags based on the template cover letter provided by triple underscores just [] is dynamic.

my cv: '''${cv}'''

template cover letter: ___${coverLetterTemplate}___

example cover letter: __${coverLetter}__
`
