import React from 'react'
import scrambleGenerator from 'rubiks-cube-scramble';

export default function Scrambles() {
  return (
    <div>{scrambleGenerator()}</div>
  )
}
