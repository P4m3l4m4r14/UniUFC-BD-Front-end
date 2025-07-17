type SubjectType = 'OBLIGATORY' | 'OPTIONAL'

export type SubjectBasic = {
  code: number
  name: string
  credits: number
  syllabus: string
  typeSubject: SubjectType
}

export type SubjectCourse = Pick<
  SubjectBasic,
  'code' | 'name' | 'credits' | 'typeSubject'
>

export type Subject = SubjectBasic & {
  prerequisites: SubjectCourse[]
  dependentSubjects: SubjectCourse[]
}
