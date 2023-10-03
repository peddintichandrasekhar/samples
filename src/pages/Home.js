import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import blue from './blue.jpg'
import docor from './decor_1110-1.jpg'
import de from './decor_nice-1.jpg'
import ch from './portrait.jpg'
import po from './prop3-1.jpg'
import re from './rental2-1.jpg'
import { BiSolidHeartCircle } from 'react-icons/bi'
import {AiOutlineHome}from 'react-icons/ai'
import {GrLocation}from 'react-icons/gr'
const productList = [

  {
    id: 1,
    imageUrl: blue,
    price: '$45 night',
    title: 'Modern Villa with Pool',
    location: 'East Side, New York',
    address: 'Villa / Entire home',
    rating: 'RATING 5',
    icon: 'BiSolidHeartCircle'
  },
  {

    id: 2,
    imageUrl: docor,
    price: '$65 night',
    title: 'Victorian Bed & Breakfast',
    location: ' Mattapan,Boston',
    address: 'B & B / Shared room',
    rating: 'RATING 5',
  },
  {
    id: 3,
    imageUrl: de,
    price: '$225 night',
    title: 'Charming Private Room',
    location: 'Glover Park, Washington',
    address: 'House / Private room',
    rating: 'RATING 5',
  },
  {
    id: 4,
    imageUrl: ch,
    price: '$30 night',
    title: 'Charm Villa to Rent',
    location: 'Brightwood, Baltimore',
    address: 'Villa / Entire home',
    rating: 'RATING 5',
  },
  {
    id: 5,
    imageUrl: po,
    price: '$23 night',
    title: 'Modern Condo with lake view',
    location: 'Arlington, Baltimore',
    address: 'Dorm / Shared room',
    rating: 'RATING 5',
  },
  {
    id: 6,
    imageUrl: re,
    price: '$500 night',
    title: 'Private Cozy Apartment',
    location: 'Glover Park, Washington',
    address: 'Bungalow / Entire home',
    rating: 'RATING  5'
  }
]


function Home() {
  const [list, setList] = useState([])
  useEffect(() => {
    setList([...productList])
  }, [])

  return (
    <div className='container-fluid'>
      <div className='w-100'>
        <Carousel>
          <Carousel.Item>
            <img className=' img d-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book_wide3-1920x790.jpg' alt='First-slide' />
            <Carousel.Caption>
              <h4>$ 68/per night</h4>
              <h3>Family Friendly Condo</h3>
              <p>Located in the heart of greenWich Village,This building is Wonderfully situated on a quiet tree-lined street between West 4th Street and Bleecker Street,Close to all West Village eateries,Shops and clubs,this building is just a Short Walk from Soho,Tribeca,Little ltaly and chinatown.The subway is only one block away.Newly renovated... </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=' img d-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book_wide_webp_1920x790.webp' alt='Second-slide' />
            <Carousel.Caption>
              <h4>$59/per night </h4>
              <h3>Perfect Holiday Cabin</h3>
              <p>Spectacular Condo in Summerlin! View of Spring Mountains  and Charleston Peak!!! 1 Bedrooms,Private Bathroom and a Queen Size Vertical Wall Bed.Fireplace, Kitchen,Dishwasher and Microwave, Open And Spacious Floorplan! Great Summerlin Location!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>webp
            <img className='img d-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/white_booking_versionwebp_-1920x790-1.webp' alt='Third-slide' />
            <Carousel.Caption>
              <h4>$64/per night</h4>
              <h3>Beautiful Cabin to Rent </h3>
              <p>
                Cozy home in Summerlin only 1.5 miles to Red Rock Resort and Downtown Summerlin With ample shopping, dining and entertainment.Red Rock Canyon State Park is located less than 10 miles away to enjoy hiking and rock climbing. More shopping ,dining and entertainment located in Tivoli Village and Boca Park Which is 2.5 miles away....
              </p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
      <h3>Featured listings to rent</h3>
      <h5>The most trendy accommodations available​</h5>
      <div>
      <ul className='cardslist p-0 d-flex row'>
        {list.map((eachProduct) => {
          return (
            <li key={eachProduct.id} className='cards col-xl-4 '>
              <img className='img-img-img' src={eachProduct.imageUrl} alt='img' />
              <div className='p-3'>
              <h3 className='color'>{eachProduct.title}</h3>
              <p><GrLocation/>{eachProduct.location}</p>
              <p><AiOutlineHome/>{eachProduct.address}</p>
              <h5>{eachProduct.rating}</h5>
              <div className='text-end'>
              <BiSolidHeartCircle className='icon'/>
              </div>
              <h4 className='doller'>{eachProduct.price}</h4>
              </div>
            </li>
          )
        }
        )}
      </ul>
      </div>

    </div>
  )
}

export default Home