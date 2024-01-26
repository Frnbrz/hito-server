import Nest from './nest'
import React from './react'

export interface LogosProps {
  width?: number | string
  height?: number | string
  className?: string
}

const Logos = {
  React,
  Nest,
}

export default Logos
