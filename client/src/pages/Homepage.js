// import React, {useState, useEffect} from 'react'
import Defaultlayout from '../components/Defaultlayout'
// import axios from 'axios';
import {Row, Col} from 'antd';
import ItemList from '../components/ItemList';


const item2 = [
  {
      "_id": "65f42d1a10412bfaa974c1e5",
      "name": "Tea",
      "category": "drinks",
      "price": 1,
      "image": "https://img.etimg.com/photo/msid-69212931,quality-100/chai-itself-was-once-a-trend-that-developed-this-way-.jpg",
      "__v": 0
  },
  {
      "_id": "65f42d1a10412bfaa974c1e6",
      "name": "coffee",
      "category": "drinks",
      "price": 2,
      "image": "https://i.cdn.newsbytesapp.com/images/l110_14211532861690.jpg",
      "__v": 0
  },
  {
      "_id": "65f42d1a10412bfaa974c1e7",
      "name": "Chicken Biryani",
      "category": "rice",
      "price": 10,
      "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
      "__v": 0
  },
  {
      "_id": "65f42d1a10412bfaa974c1e8",
      "name": "Veg Biryani",
      "category": "rice",
      "price": 5,
      "image": "https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot-featured.jpg",
      "__v": 0
  },
  {
      "_id": "65f42d1a10412bfaa974c1e9",
      "name": "Chicken Hakka",
      "category": "noodles",
      "price": 7,
      "image": "https://cravecookclick.com/wp-content/uploads/2012/07/IMG_4400.jpg",
      "__v": 0
  },
  {
      "_id": "65f42d1a10412bfaa974c1ea",
      "name": "Eggy",
      "category": "noodles",
      "price": 5,
      "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Egg-Noodles-min.jpg",
      "__v": 0
  }
];
const Homepage = () => {
  // const [itemsData, setItemsData] = useState([]);
  // //useEffect
  // useEffect(() => {
  //   const getAllItems = async () =>{
  //     try {
  //       const {data} = await axios.get('/api/items/get-item')
  //       setItemsData(data);
  //       // console.log(data)
  //     } catch (error) {
  //       // console.log(error)
  //     }
  //   }
  //   getAllItems();
  // }, []);

  
  return (
    <Defaultlayout>
      
      <Row>
        {
          
          item2.map((item) => (
            // console.log(item.name)
              <Col xs={24} lg={6} md={12} sm={6} key={item._id}>
                <ItemList item={item} />
              </Col>
              
          ))
        }
      </Row>
    </Defaultlayout>
  )
}

export default Homepage