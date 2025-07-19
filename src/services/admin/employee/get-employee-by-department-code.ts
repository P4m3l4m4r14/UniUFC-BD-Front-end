import { api } from '@/services/api'

type FindEmployeesByDepartmentCodeServiceRequest = {
  code: number
}

export async function findEmployeesByDepartmentCodeService({
  code,
}: FindEmployeesByDepartmentCodeServiceRequest) {
  const { data } = await api.get(`/api/departments/${code}/employees`)

  return data
}
