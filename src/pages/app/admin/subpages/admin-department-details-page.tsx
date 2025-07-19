import { Button } from '@/components/ui/button'
import { findDepartmentByCode } from '@/services/admin/departments/find-department-by-code'
import { useQuery } from '@tanstack/react-query'
import { Pencil, Trash } from 'lucide-react'
import { useNavigate, useParams } from 'react-router'
import { TeacherCard } from '../components/teacher-card'
import { CreateTeacherInDepartmentDialog } from '@/components/dialogs/create-teacher-in-department-dialog'
import AlertDialog from '@/components/alert-dialog'
import { useCallback } from 'react'
import { toast } from 'sonner'
import { deleteDepartmentService } from '@/services/admin/departments/delete-department-service'
import { CourseCard } from '../components/course-card'

export function AdminDepartmentDetailsPage() {
  const navigate = useNavigate()
  const { departmentId } = useParams<{ departmentId: string }>()

  const { data: department } = useQuery({
    queryKey: ['department', departmentId],
    queryFn: () => findDepartmentByCode({ code: Number(departmentId) }),
  })

  const handleDeleteDepartment = useCallback(async () => {
    try {
      await deleteDepartmentService(departmentId!)

      navigate('/admin/departments')

      toast.success('Departamento excluído com sucesso.')
    } catch (error) {
      toast.error('Erro ao excluir o departamento.')
      console.error('Error deleting department:', error)
    }
  }, [departmentId, navigate])

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
          <AlertDialog
            actionText="Excluir"
            cancelText="Cancelar"
            title="Excluir departamento"
            description="Você tem certeza que deseja excluir este departamento? Todos os professores e disciplinas associadas a ele serão removidos."
            onAction={handleDeleteDepartment}
          >
            <Button variant="outline">
              <Trash className="text-destructive size-4" />
            </Button>
          </AlertDialog>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-heading text-xl font-semibold">Professores</h2>
          {department && (
            <CreateTeacherInDepartmentDialog department={department} />
          )}
        </div>
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(8rem,18rem))] gap-4">
          {department?.teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-heading text-xl font-semibold">Cursos</h2>
          {department && (
            <CreateTeacherInDepartmentDialog department={department} />
          )}
        </div>
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(8rem,18rem))] gap-4">
          {department?.courses.map((course) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>
      </div>
    </>
  )
}
