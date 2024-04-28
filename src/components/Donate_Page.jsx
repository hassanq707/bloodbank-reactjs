import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from "firebase/database";

const Donate_Page = () => {
  
  const navigate = useNavigate()
  const [donorData,setDonorData] = useState({})
  
  const onSelectChange = (e) => {
   const {value,name} = e.target;
 
   setDonorData({
    ...donorData,
    [name] : value,
   })

   
  }

  const onDonateHandle = (e) => {
    e.preventDefault()
    alert("Thank you ....your blood has been donated 💓") 
    navigate('/dashboard')

    const db = getDatabase();
     set(ref(db, 'DonorsData/' + Date.now()), {

     fullname : donorData.fullname,
     gender : donorData.gender,
     age : donorData.age,
     address : donorData.address,
     group : donorData.group,

  });

  }


  return (
    <div className='donate_div'>
      <h1>Donate Now</h1>
      <form onSubmit={onDonateHandle}>
      <label >Fullname: </label>
       <input type="text" placeholder='Enter fullname' onChange={onSelectChange} name='fullname' required/>
       <label>Gender: </label>
       <select onChange={onSelectChange} name='gender' required>
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Helicopter">Helicopter</option>
       </select>
       <label >Age: </label>
       <input type="text" placeholder='Enter age' onChange={onSelectChange} name='age' required/>
       <label >Address: </label>
       <input type="text" placeholder='Enter address' onChange={onSelectChange} name='address' required/>
       <label >Blood Group: </label>
       <select onChange={onSelectChange} name='group' required>
        <option value="">Select Group</option>
        <option value="O">O</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="AB">AB</option>
       </select>
       <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export  {Donate_Page}



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getDatabase, ref, push } from 'firebase/database';

// const Donate_Page = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         fullname: '',
//         gender: '',
//         age: '',
//         address: '',
//         group: '',
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const db = getDatabase();
//         await push(ref(db, 'DonorsData'), formData);
//         alert('Thank you for your donation!');
//         navigate('/dashboard');
//     };

//     return (
//         <div>
//             <h1>Donate Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Full Name:
//                     <input type="text" name="fullname" value={formData.fullname} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Gender:
//                     <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Age:
//                     <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Address:
//                     <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Blood Group:
//                     <input type="text" name="group" value={formData.group} onChange={handleInputChange} />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export  {Donate_Page};
