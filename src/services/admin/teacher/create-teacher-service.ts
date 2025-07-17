import { api } from '@/services/api'
import type { Phone } from '@/types/phone'

type CreateTeacherServiceRequest = {
  name: string
  email: string[]
  birthDate: string
  hireDate: string
  cpf: string
  phones: Pick<Phone, 'number'>[]
  departmentId: number
}

export async function createTeacherService({
  name,
  email,
  birthDate,
  hireDate,
  cpf,
  phones,
  departmentId,
}: CreateTeacherServiceRequest) {
  const { data } = await api.post('/teachers', {
    name,
    email,
    birthDate,
    hireDate,
    cpf,
    phones,
    departmentId,
  })

  return data
}
