// import React, { useState } from 'react'
// import '../App.css'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import User_Cards from './User_Cards'
// import Categories from './Categories'

// const Dashboard_Home = () => {

//   const store = useSelector((store) => store.Donors_data)

//   const[items,setItems] = useState(store)

//   const Ogroup = store.filter((elem) => {
//     return elem.group == 'O'
//   })

//   const Agroup = store.filter((elem) => {
//     return elem.group == 'A'
//   })

//   const Bgroup = store.filter((elem) => {
//     return elem.group == 'B'
//   })

//   const ABgroup = store.filter((elem) => {
//     return elem.group == 'AB'
//   })


//   const navigate = useNavigate()
//   const goToDonatePage = () => {
//     navigate('donate')
//   }

//   const filterItem = (cat) => {
//     if(cat == 'All'){
//      setItems(store)
//     }
//     else{
//       setItems(
//         store.filter((elem) => {
//           return elem.group == cat ;
//         })
//         )
//       }
//     }

//   return (
//     <>
//     <div className="dashboard_nav">
//       <div className="total">
//         <h1>Total Donors <span>{store.length}</span></h1>
//       </div>
//       <div className="specific">
//         <h2>O<span>{Ogroup.length}</span></h2>
//         <h2>A<span>{Agroup.length}</span></h2>
//         <h2>B<span>{Bgroup.length}</span></h2>
//         <h2>AB<span>{ABgroup.length}</span></h2>
//       </div>
//       <button onClick={goToDonatePage}>DONATE NOW</button>
//     </div>
//      {
//       store.length <= 0 ? <h2 style={{textAlign : 'center',margin:'20px 0px'}}>No Data Found</h2>
//       :(

//     <div className='all_users_data'>
//         <h1>All Donors Data</h1>
//          <Categories filterItem={filterItem} items={items}/>
//         <div className="users_row">
//           {
//             items.map((elem,index) => {
//                return <User_Cards data={elem} key={index}/>
//             })
//           }
//         </div>
//     </div>
//        )
//       }
//     </>

//   )
// }

// export default Dashboard_Home

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import User_Cards from './User_Cards';
import Categories from './Categories';
import { getDatabase, ref, onValue } from 'firebase/database';

const Dashboard_Home = () => {
  const [donorData, setDonorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const donorsRef = ref(db, 'DonorsData');
      onValue(donorsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.values(data);
          setDonorData(dataArray);
          setFilteredData(dataArray); 
        } else {
          setDonorData([]);
          setFilteredData([]);
        }
      });
    };

    fetchData();

    return () => {
    };
  }, []);

  const goToDonatePage = () => {
    navigate('donate')
  };

  const filterItem = (cat) => {
    if (cat === 'All') {
      setFilteredData(donorData); 
    } else {
      const filtered = donorData.filter((elem) => elem.group === cat);
      setFilteredData(filtered);
    }
  };

  const countDonorsByGroup = (group) => {
    return donorData.filter((donor) => donor.group === group).length;
  };

  return (
    <div>
      <div className="dashboard_nav">
        <div className="total">
          <h1>Total Donors <span>{donorData.length}</span></h1>
        </div>
        <div className="specific">
          <h2>O<span>{countDonorsByGroup('O')}</span></h2>
          <h2>A<span>{countDonorsByGroup('A')}</span></h2>
          <h2>B<span>{countDonorsByGroup('B')}</span></h2>
          <h2>AB<span>{countDonorsByGroup('AB')}</span></h2>
        </div>
        <button onClick={goToDonatePage}>DONATE NOW</button>
      </div>

      <div className='all_users_data'>
        <h1>All Donors Data</h1>
        <Categories filterItem={filterItem} />
        <div className="users_row">
          {filteredData.length > 0 ? (
            filteredData.map((donor, index) => (
              <User_Cards key={index} donor={donor} />
            ))
          ) : (
            <h3>No donor data available.</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Home;



