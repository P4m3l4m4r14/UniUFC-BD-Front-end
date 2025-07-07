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
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const signInFormSchema = z.object({
  register: z
    .string({
      required_error: 'A matrícula é obrigatória',
    })
    .min(1, {
      message: 'A matrícula não pode estar vazia',
    }),
  password: z
    .string({
      required_error: 'A senha é obrigatória',
    })
    .min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignIn() {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  })

  const handleSignIn = (data: SignInFormData) => {
    console.log('Form Data:', data)
  }

  return (
    <section className="w-full">
      <h1 className="font-heading text-4xl font-bold">Entrar</h1>
      <p className="text-muted-foreground w-4/5 text-sm">
        Entre com sua matrícula e senha para acessar sua conta.
      </p>
      <Form {...form}>
        <form
          className="mt-4 flex w-full flex-col gap-4"
          onSubmit={form.handleSubmit(handleSignIn)}
        >
          <FormField
            control={form.control}
            name="register"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Matrícula</FormLabel>
                <FormControl>
                  <Input placeholder="Digite sua matrícula" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Digite sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <fieldset className="flex w-full flex-col gap-1">
            <Button className="w-full">Entrar</Button>
            <Button className="w-full" variant="ghost" type="button">
              Não possui uma conta? Cadastre-se
            </Button>
          </fieldset>
        </form>
      </Form>
    </section>
  )
}
