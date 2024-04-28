// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function User_Cards(props) {
//     const {fullname,age,group,gender,address} = props.data
//   return (
//     <div className='user_div'>

//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 210 }}
//         image = {`https://source.unsplash.com/1600x900/?${gender}`}
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {fullname}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Gender: {gender}, <br />
//           Address : {address}, <br />
//           Age: {age}
//         </Typography>
//         <Typography gutterBottom variant="h5" component="div">
//           Blood Group: {group}
//         </Typography>
//         <button>Contact me</button>
//       </CardContent>
//     </Card>
//     </div>
//   );
// }


import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const User_Cards = (props) => {
    const { fullname, age, group, gender, address } = props.donor;

    return (
        <div className='user_div'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
         sx={{ height: 210 }}
         image = {`https://source.unsplash.com/1600x900/?${gender}`}
         title="green iguana"
          />
                <CardContent className='description'>
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign : 'left'}}>
                        {fullname || "Unknown"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{textAlign : 'left' , margin : '5px 0px'}}>
                        Gender: {gender || "Unknown"}, <br />
                        Address: {address || "Unknown"}, <br />
                        Age: {age || "Unknown"}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Blood Group: {group || "Unknown"}
                    </Typography>
                    <button>Contact me</button>
                </CardContent>
            </Card>
        </div>
    );
};

export default User_Cards;
