import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { Copy, Info, Trash } from 'lucide-react'
import { useNavigate, useParams } from 'react-router'
import AlertDialog from '@/components/alert-dialog'
import { useClipboard } from '@/hooks/use-clipboard'
import { findTeacherByCode } from '@/services/teacher/find-teacher-by-code'
import { deleteTeacherService } from '@/services/teacher/delete-teacher-service'
import { useCallback } from 'react'
import { toast } from 'sonner'
import { TeacherInformationDialog } from '@/components/dialogs/teacher-information-dialog'

export function AdminTeacherDetailsPage() {
  const navigate = useNavigate()
  const { copyToClipboard } = useClipboard()
  const { teacherId } = useParams<{ teacherId: string }>()

  const { data: teacher } = useQuery({
    queryKey: ['teacher', teacherId],
    queryFn: () => findTeacherByCode({ code: Number(teacherId) }),
  })

  const handleDeleteTeacher = useCallback(async () => {
    try {
      await deleteTeacherService(teacherId!)

      navigate('/admin/teachers')

      toast.success('Professor excluído com sucesso.')
    } catch (error) {
      toast.error('Erro ao excluir o professor.')
      console.error('Error deleting teacher:', error)
    }
  }, [teacherId, navigate])

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-center">
          <span className="text-xs uppercase">Professor:</span>
          <h1 className="font-heading text-3xl font-bold">{teacher?.name}</h1>
          <div className="flex gap-1">
            {teacher?.id && (
              <>
                <button
                  className="text-accent-foreground bg-accent border-border flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs leading-tight uppercase"
                  onClick={() => copyToClipboard(teacher.id.toString())}
                >
                  <span>Código: {teacher?.id}</span>

                  <Copy className="size-2.5" />
                </button>
                <TeacherInformationDialog teacher={teacher}>
                  <button className="text-accent-foreground bg-accent border-border flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs leading-tight uppercase">
                    <span>+ info</span>

                    <Info className="size-2.5" />
                  </button>
                </TeacherInformationDialog>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AlertDialog
            actionText="Excluir"
            cancelText="Cancelar"
            title="Excluir professor"
            description="Você tem certeza que deseja excluir este professor? Esta ação não pode ser desfeita."
            onAction={handleDeleteTeacher}
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
