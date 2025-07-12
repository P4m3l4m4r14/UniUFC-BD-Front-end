import { api } from '../api'

export type SignInServiceRequest = {
  code: string
  password: string
}

export async function signInService({ code, password }: SignInServiceRequest) {
  const response = await api.post('/login', {
    code,
    password,
  })
  return response.data
}
