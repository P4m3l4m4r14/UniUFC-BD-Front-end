import {
  Backpack,
  Bolt,
  GraduationCap,
  School,
  type LucideProps,
} from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import { useNavigate } from 'react-router'

const options = [
  {
    icon: Backpack,
    label: 'Estudante',
  },
  {
    icon: GraduationCap,
    label: 'Professor',
  },
  {
    icon: School,
    label: 'Empregado',
  },
  {
    icon: Bolt,
    label: 'Admin',
  },
]

type OptionButtonProps = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  label: string
}

function OptionButton({ icon: Icon, label }: OptionButtonProps) {
  const navigate = useNavigate()

  return (
    <button
      className="border-border bg-muted hover:bg-accent hover:text-accent-foreground flex h-32 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border transition-all"
      onClick={() => navigate(`/registrar/${label.toLowerCase()}`)}
    >
      <Icon className="size-8" />
      <span className="font-semibold">{label}</span>
    </button>
  )
}

export function HomeSignUp() {
  return (
    <section className="flex w-full flex-col gap-8">
      <h1 className="font-heading text-4xl font-semibold">Qual sua atuação?</h1>

      <div className="grid w-full grid-cols-2 grid-rows-2 gap-4">
        {options.map((option) => (
          <OptionButton
            key={option.label}
            icon={option.icon}
            label={option.label}
          />
        ))}
      </div>
    </section>
  )
}
