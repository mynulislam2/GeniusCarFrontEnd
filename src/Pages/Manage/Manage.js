import React, { useEffect, useState } from 'react';

const Manage = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    const HandleDelete=(id)=>{
const proceed=window.confirm("are you sure?")
if (proceed) {
    fetch(`http://localhost:5000/service/${id}`,{
        method:"DELETE"
    })
.then(res=>res.json())

.then(data=>{
    console.log(data);
    if (data.deletedCount>0) {
      const remainService =  services.filter((service)=>service._id!==id)
    setServices(remainService)
    }
})
}    
}
    return (
        <div>
{services.map(service=><div key={service._id}>
{service.name}<button onClick={()=>HandleDelete(service._id)}>X</button>
</div>)}

        </div>
    );
};

export default Manage;