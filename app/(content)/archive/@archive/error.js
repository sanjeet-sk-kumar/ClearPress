"use client"
import React from 'react'

const Error = ({error}) => {
  return (
    <div>
        <h1>An Error Occurred</h1>
        <p>{error.message}</p>
    </div>
  )
}

export default Error