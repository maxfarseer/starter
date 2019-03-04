import * as React from 'react'

export interface IntroProps {
  name: string;
  age: number;
}

const Intro = ({ name, age }: IntroProps) => {
  return (
    <p>
      hey {name}, {age}
    </p>
  )
}

export { Intro }
