import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const lodededUser = useLoaderData();
   
     const handleUpdateUser = event => {

         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const email = form.email.value;
         const updatedUser ={name,email};
        

         fetch(`http://localhost:5000/users/${lodededUser?._id}`,{
             method: 'PUT',
             headers: {
                "content-Type": "application/json",
             },
             body: JSON.stringify(updatedUser)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
         })
     }


    return (
        <div>
         <h1>{lodededUser?.name}</h1>
         <form onSubmit={handleUpdateUser}>
            <input type="text" name="name" defaultValue={lodededUser?.name} id="" />
            <input type="email" name="email" defaultValue={lodededUser?.email} id="" />
            <input type="submit" value="update" />
         </form>
        </div>
    );
};

export default Update;