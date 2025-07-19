import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { Copy, Trash } from 'lucide-react'
import { useNavigate, useParams } from 'react-router'
import AlertDialog from '@/components/alert-dialog'
import { useClipboard } from '@/hooks/use-clipboard'

import { useCallback } from 'react'
import { toast } from 'sonner'
import { InfoPill } from '@/components/info-pill'
import { findCourseByCodeService } from '@/services/course/fint-course-by-code'

export function AdminCourseDetailsPage() {
  const navigate = useNavigate()
  const { copyToClipboard } = useClipboard()
  const { courseId } = useParams<{ courseId: string }>()

  const { data: course } = useQuery({
    queryKey: ['course', courseId],
    queryFn: () => findCourseByCodeService({ code: Number(courseId) }),
  })

  const handleDeleteCourse = useCallback(async () => {
    try {
      // await deleteCourseService(courseId!)

      navigate('/admin/courses')

      toast.success('Professor excluído com sucesso.')
    } catch (error) {
      toast.error('Erro ao excluir o professor.')
      console.error('Error deleting course:', error)
    }
  }, [navigate])

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-center">
          <span className="text-xs uppercase">Curso:</span>
          <h1 className="font-heading text-3xl font-bold">{course?.name}</h1>
          <div className="flex gap-1">
            {course?.department && (
              <InfoPill
                label="Departamento"
                value={course.department.name}
                icon={<Copy />}
                onClick={() => copyToClipboard(String(course.department.code))}
              />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AlertDialog
            actionText="Excluir"
            cancelText="Cancelar"
            title="Excluir professor"
            description="Você tem certeza que deseja excluir este professor? Esta ação não pode ser desfeita."
            onAction={handleDeleteCourse}
          >
            <Button variant="outline">
              <Trash className="text-destructive size-4" />
            </Button>
          </AlertDialog>
        </div>
      </div>
    </>
  )
}
