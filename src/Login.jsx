import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function login() {

    const[loginform,setLoginForm] = useState({
        email:"",password:""
    })
    const navigate = useNavigate()
   const handleChange = (e) =>{
    setLoginForm((prev)=> ({
        ...prev,
        [e.target.name]:e.target.value
    }))    
    }

    function handleLoginSubmit(e){
        e.preventDefault()
        console.log(loginform)
        axios.post(`${import.meta.env.VITE_API_URL}/Login`,{...loginForm})
        .then(res=>{
            if(res.status ==200){
                console.log(res.data.message)
                localStorage.setItem("token",res.data.patient.email)
                navigate("/")
            }
        })
        .catch(err=>{
            console.log(err?.response?.data.message)
        })
    }


  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-12 col-md-5'>
                <form onSubmit={handleLoginSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="">Patient Email ID</label>
                        <input type="email" className='form-control mt-1'
                        placeholder='Enter email' name = "email" onChange={handleChange} />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Patient Password</label>
                        <input type="password" className='form-control mt-1'
                        placeholder='Enter Password' name='password' onChange={handleChange} />
                    </div>
                    <div className='mb -3'>
                        <button className='btn btn-primary btn-lg'>Login</button>
                    </div>
                </form>
            </div>
            <div className='col -12 col-md-6'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pU3b2LJEhfMTtSp4Dg7NFuqMxgM3jTPPSqYMPejZ9w&s=10" alt="" />
            </div>
        </div>

    </div>
  )


}
