import { TOKEN_STORAGE_KEY } from '@/constants/token-storage-key'

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_STORAGE_KEY)
}
