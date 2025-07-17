export type Course = {
  name: string
  code: number
  minCredits: number
}

export type CourseDepartment = Pick<Course, 'name' | 'code'>
