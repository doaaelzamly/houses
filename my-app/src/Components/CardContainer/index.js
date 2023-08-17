import React from 'react'; 
import Card from '../Cards'



const CardContainer = ({houses})=> {

    

return <>
{
    houses.length && houses.map((house)=> <Card house={house} />)
}

</>

}



export default CardContainer







//import {useEffect, useState}  from 'react'; 
// const CardContainer = () => {

// const [houses, setHouses] = useState([]);

// const fetchData = async () => {
//     const response = await fetch("https://my-json-server.typicode.com/doaaelzamly/mock-api/houses")
//     const data = await response.json()
//     setHouses(data)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div className="card-container">
//       {houses.map((house) => <Card key={house.id} house={house} />)}
//     </div>
//   );
// }

// import React from 'react';
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Card from '../Cards';
// function CardContainer({ houses }) {
//   return (
//     <Container>
//       {houses.length ? (
//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//           {houses.map(house => (
//             <Grid item key={house.id} xs={12} sm={6} md={4} lg={4}>
//               <Card house={house} />
//             </Grid>
//           ))}
//         </Grid>
//       ) :[]}
//     </Container>
//   );
// }
// export default CardContainer;