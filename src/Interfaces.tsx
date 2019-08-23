export interface Lifter {
  name: string,
  age: number,
  // lifting_numbers: 
}

export interface Developer {
  name: string,
  stack: Array<string>,
  details: {
    interests?: Array<string>,
    exercise: boolean
  }
}