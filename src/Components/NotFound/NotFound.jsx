import React, { useEffect } from 'react'

export default function NotFound() {
  // To Write Title page 
  useEffect(() => {
        document.title = "404";
      }, []);
  return (
    // Not Found Tags
    <div className='cc ww container alert alert-danger d-flex justify-content-center align-items-center text-black '>
      <h1>Not Found Works </h1>
    </div>
  )
}
