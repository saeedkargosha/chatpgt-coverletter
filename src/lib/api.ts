const fetcher = async ({ url, method, body, json = true }: any) => {
  try {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      throw new Error('API Error')
    }
    if (json) {
      const data = await res.json()
      return data
    }
  } catch (e) {
    console.log(e, 'e')
  }
}

export const chat = async (message: { message: string }) => {
  return fetcher({
    url: '/api/openai',
    method: 'POST',
    body: message,
    json: true,
  })
}
