import { api } from '@/services/api'
import type { Student } from '@/types/students'

type FindAllStudentsResponse = {
  students: Student[]
}

export async function findAllStudentsService() {
  const { data } = await api.get<FindAllStudentsResponse>('/students')

  return data
}
