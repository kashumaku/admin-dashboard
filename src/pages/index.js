import React, { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const Index = () => {
    const navigate  = useNavigate()
    useEffect(()=>{
        navigate('/admin/login')
    },[])
  return (
    <div>index</div>
  )
}

export default Index