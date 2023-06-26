'use client'

import { chat } from '@/lib/api'
import { useState } from 'react'
import parse from 'html-react-parser'

const OpenAI = () => {
  const [message, setMessage] = useState('')
  const [res, setRes] = useState('')
  const [loading, setLoading] = useState(false)

  const onChat = async () => {
    setLoading(true)
    const res = await chat({ message })
    setRes(res.message)
    setMessage('')
    setLoading(false)
  }

  return (
    <div className='w-full'>
      <div className='flex gap-10 w-full items-end'>
        <div className='w-full'>
          <label htmlFor='email' className='label-input'>
            {'Job Description'}
          </label>
          <div className='w-full h-40'>
            <textarea
              className='input h-full'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>
        <button onClick={onChat} className='btn btn-primary h-10'>
          {'Send'}
        </button>
      </div>
      <div className='mt-8 text-neutral-900 text-lg'>
        {loading ? 'Loading...' : ''}
        {parse(res)}
      </div>
    </div>
  )
}

export default OpenAI
