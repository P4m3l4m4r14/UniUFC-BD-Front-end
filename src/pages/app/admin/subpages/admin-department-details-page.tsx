import { Button } from '@/components/ui/button'
import { findDepartmentByCode } from '@/services/admin/departments/find-department-by-code'
import { useQuery } from '@tanstack/react-query'
import { Pencil, Trash } from 'lucide-react'
import { useParams } from 'react-router'

export function AdminDepartmentDetailsPage() {
  const { departmentId } = useParams<{ departmentId: string }>()

  const { data: department } = useQuery({
    queryKey: ['department', departmentId],
    queryFn: () => findDepartmentByCode({ code: Number(departmentId) }),
  })

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-center">
          <span className="text-xs uppercase">Departamento:</span>
          <h1 className="font-heading text-3xl font-bold">
            {department?.name}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Pencil className="text-muted-foreground size-4" />
            Editar
          </Button>
          <Button variant="outline">
            <Trash className="text-destructive size-4" />
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h2 className="font-heading text-xl font-semibold">Professores</h2>
      </div>
    </>
  )
}
