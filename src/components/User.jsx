import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const lodeduser = useLoaderData();
    const [user, setUser] = useState(lodeduser)
const handleDelet = (_id) => {
console.log("delet", _id);
  fetch(`http://localhost:5000/users/${_id}`,{
   method:'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.deletedCount !== 0){
    alert('deleted success full')
    const remaining = user?.filter(man => man._id !== _id);
    setUser(remaining);
    }
  })
}

    return (
        <div>
            <h1>{user.length}</h1>
            {
                user?.map(man => <h5 key={man?._id}>{man?.name} {man?.email} {man?._id}
                 <Link to={`/update/${man?._id}`}><button>update</button></Link>
                 <button onClick={() => handleDelet(man?._id)}>x</button></h5>)
            }
        </div>
    );
};

export default User;