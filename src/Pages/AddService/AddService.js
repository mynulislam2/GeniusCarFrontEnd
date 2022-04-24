import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        const url=`http://localhost:5000/service`
        fetch(url,{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(data=>console.log(data))
};
    return (
        <div className='w-25 mx-auto mt-5'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='mt-2' {...register("description")} />
                <input placeholder='Photo Url' className='mt-2' {...register("img")} />
                <input placeholder='Price' className='mt-2' type="number" {...register("price")} />
                <input value='Add User' className='mt-2' type="submit" />
            </form>
        </div>
    );
};

export default AddService;