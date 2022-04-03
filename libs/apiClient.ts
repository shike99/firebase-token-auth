type ErrorResponse = {
  error: unknown
}

export async function fetchJson<T>(
  input: Parameters<typeof fetch>[0],
  init: Parameters<typeof fetch>[1]
): Promise<T | ErrorResponse> {
  try {
    const response = await fetch(input, init)
    return response.json() as Promise<T>
  } catch (error) {
    console.error(error)
    return { error }
  }
}
