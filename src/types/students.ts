import type { Phone } from './phone'

export type Student = {
  code: number
  name: string
  address: string
  admissionYear: string
  previousCourses: string[]
  advisorId: number
  advisorName: string
  courseName: string
  subjectsName: string[]
  phones: Phone[]
}

export type StudentCourse = Pick<Student, 'code' | 'name'>
