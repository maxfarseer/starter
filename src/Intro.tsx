import * as React from 'react'

export interface IntroProps {
  name: string;
  age: number;
}

const Intro = ({ name, age, bage }: IntroProps) => {
  return (
    <p>
      hey {name}, {age}. Test husky
    </p>
  )
}

export { Intro }
