"use client"
import React from 'react'

import Countdown from 'react-countdown'

const endingTime = new Date("2025-12-04")

const CountDown = () => {
  return (
    <Countdown date={endingTime}  className="font-bold text-5xl text-yellow-500"/>
  )
}

export default CountDown