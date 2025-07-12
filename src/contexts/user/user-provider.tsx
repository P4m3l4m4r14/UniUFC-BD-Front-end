import { useCallback, useMemo, type ReactNode } from 'react'
import { UserContext } from './user-context'
import {
  signInService,
  type SignInServiceRequest,
} from '@/services/auth/sign-in-service'

export type UserContextProps = {
  signIn: (data: SignInServiceRequest) => Promise<void>
}

export function UserProvider({ children }: { children: ReactNode }) {
  const signIn = useCallback(
    async ({ code, password }: SignInServiceRequest) => {
      const { data } = await signInService({ code, password })

      console.log('User signed in:', data)
    },
    [],
  )

  const value = useMemo(
    () => ({
      signIn,
    }),
    [signIn],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
