import React from 'react'

const NewsLayoutPage = ({children, modal}) => {
  return (
    <>
        {modal}
        {children}
    </>
  )
}

export default NewsLayoutPage