"use client"
import React from 'react'

const page = ({params}) => {
  return (
    <div>
      Details about product {params.productId}
    </div>
  )
}

export default page