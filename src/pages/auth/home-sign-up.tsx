import { Backpack, GraduationCap } from 'lucide-react'

export function HomeSignUp() {
  return (
    <section className="flex w-full flex-col gap-8">
      <h1 className="font-heading text-4xl font-semibold">Qual sua atuação?</h1>

      <div className="grid w-full grid-cols-2 grid-rows-2 gap-4">
        <button className="border-border hover:bg-accent hover:text-accent-foreground flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg border">
          <Backpack className="size-8" />
          <span>Estudante</span>
        </button>
        <button className="border-border hover:bg-accent hover:text-accent-foreground flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg border">
          <GraduationCap className="size-8" />
          <span>Professor</span>
        </button>
        <button className="border-border hover:bg-accent hover:text-accent-foreground flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg border">
          <GraduationCap className="size-8" />
          <span>Estudante</span>
        </button>
        <button className="border-border hover:bg-accent hover:text-accent-foreground flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg border">
          <GraduationCap className="size-8" />
          <span>Estudante</span>
        </button>
      </div>
    </section>
  )
}
