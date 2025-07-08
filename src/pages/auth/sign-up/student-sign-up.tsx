import { DatePicker } from '@/components/date-picker'
import { FormSelect } from '@/components/form-select'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const studentSignUpSchema = z.object({
  name: z.string(),
  typeStudent: z.enum(['UNDERGRADUATE', 'POSTGRADUATE']), // Example types
  admissionYear: z.string(),
  address: z.string(),
  courseCode: z.number(),
  previousCourses: z.array(z.string()).optional(),
  phones: z
    .array(
      z.object({
        description: z.string().min(2).max(2),
        number: z.string().min(8).max(8),
      }),
    )
    .optional(),
})

type StudentSignUpFormData = z.infer<typeof studentSignUpSchema>

export function StudentSignUp() {
  const form = useForm<StudentSignUpFormData>({
    resolver: zodResolver(studentSignUpSchema),
    defaultValues: {
      name: '',
      typeStudent: 'UNDERGRADUATE',
      admissionYear: '',
      address: '',
      courseCode: 0,
      previousCourses: [],
      phones: [],
    },
  })

  return (
    <section className="flex w-full flex-col gap-8">
      <h1 className="font-heading text-4xl font-semibold">
        Cadastro de Estudante
      </h1>
      <p className="text-muted-foreground">
        Preencha os campos abaixo para se cadastrar como estudante.
      </p>
      <Form {...form}>
        <form className="mt-4 flex w-full flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="typeStudent"
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormLabel>Tipo de Estudante</FormLabel>
                <FormControl>
                  <FormSelect
                    placeholder="Selecione o tipo de estudante"
                    value={value}
                    onValueChange={onChange}
                    options={[
                      { value: 'UNDERGRADUATE', label: 'Graduação' },
                      { value: 'POSTGRADUATE', label: 'Pós-Graduação' },
                    ]}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="admissionYear"
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormLabel>Ano de Admissão</FormLabel>
                <FormControl>
                  <DatePicker date={value} onDateChange={onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <fieldset className="flex w-full flex-col gap-1">
            <Button className="w-full">Registrar</Button>
            <Button className="w-full" variant="ghost" type="button">
              Já possui uma conta? Faça login
            </Button>
          </fieldset>
        </form>
      </Form>
    </section>
  )
}
