import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import blue from './blue.jpg'
import docor from './decor_1110-1.jpg'
import de from './decor_nice-1.jpg'
import ch from './portrait.jpg'
import po from './prop3-1.jpg'
import re from './rental2-1.jpg'
import { BiSolidHeartCircle } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { FcRating } from 'react-icons/fc'
import rental from './rental2-1.jpg'
import white from './white_booking_versionwebp_-1920x790-1.webp'
import img1 from './14.jpeg'
import img2 from './5.jpeg'
import img3 from './8.jpeg'
import img4 from './category-webp.webp'
import img5 from './interior_july_2019-1170x921-webp.webp'
const productList = [

  {
    id: 1,
    imageUrl: blue,
    price1: '$45 night',
    title: 'Modern Villa with Pool',
    location: 'East Side, New York',
    address: 'Villa / Entire home',
    rating: '',
    icon: 'BiSolidHeartCircle'
  },
  {

    id: 2,
    imageUrl: docor,
    price1: '$65 night',
    title: 'Victorian Bed & Breakfast',
    location: ' Mattapan,Boston',
    address: 'B & B / Shared room',
    rating: '',
  },
  {
    id: 3,
    imageUrl: de,
    price1: '$225 night',
    title: 'Charming Private Room',
    location: 'Glover Park, Washington',
    address: 'House / Private room',
    rating: '',
  },
  {
    id: 4,
    imageUrl: ch,
    price2: '$30 night',
    title: 'Charm Villa to Rent',
    location: 'Brightwood, Baltimore',
    address: 'Villa / Entire home',
    rating: '',
  },
  {
    id: 5,
    imageUrl: po,
    price2: '$23 night',
    title: 'Modern Condo with lake view',
    location: 'Arlington, Baltimore',
    address: 'Dorm / Shared room',
    rating: '',
  },
  {
    id: 6,
    imageUrl: re,
    price2: '$500 night',
    title: 'Private Cozy Apartment',
    location: 'Glover Park, Washington',
    address: 'Bungalow / Entire home',
    rating: ''
  }
]

const propertiesList = [
  {
    imageurl: rental,
    rating: "",
    title: 'Nice Condo in Penn Station',
    location: 'Manhattan, New York',
    price: '$200/night'

  },
  {
    imageurl: white,
    rating: '',
    title: 'Victorian Bed & Breakfast',
    location: 'Mattapan, Boston',
    price: "$65/night"
  }
]

const bestPlaceList = [
  {
    imageurl: img1,
    home: "Engtire home",
    listing: '8 Listings'
  },
  {
    imageurl: img2,
    home: 'Shared Room',
    listing: '3 Listings'
  },
  {
    imageurl: img3,
    home: 'Apartment',
    listing: '3 Listings'
  },
  {
    imageurl: img4,
    home: 'B&B',
    listing: '1 Listings'
  },
  {
    imageurl: img5,
    home: 'Cabin',
    listing: '2 Listings'
  },
]
function Home() {
  const [list, setList] = useState([])
  useEffect(() => {
    setList([...productList])
  }, [])

  const [properties, setProperties] = useState([])
  useEffect(() => {
    setProperties([...propertiesList])
  }, [])

  const [bestPlace, setBestPlace] = useState([])
  useEffect(() => {
    setBestPlace([...bestPlaceList])
  }, [])

  return (
    <div className='container-fluid'>
      <div className='w-100'>
        <Carousel>
          <Carousel.Item >
            <img className=' img d-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book_wide3-1920x790.jpg' alt='First-slide' />
            <Carousel.Caption className='carousel-text text-start'>
              <h4>$ 68/per night</h4>
              <h3 className='home-text'>Family Friendly Condo</h3>
              <p className='para'>Located in the heart of greenWich Village,This building is Wonderfully situated on a quiet tree-lined street between West 4th Street and Bleecker Street,Close to all West Village eateries,Shops and clubs,this building is just a Short Walk from Soho,Tribeca,Little ltaly and chinatown.The subway is only one block away.Newly renovated... </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item  >
            <img className=' img d-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book_wide_webp_1920x790.webp' alt='Second-slide' />
            <Carousel.Caption className='carousel-text text-start'>
              <h4>$59/per night </h4>
              <h3 className='home-text'>Perfect Holiday Cabin</h3>
              <p className='para'>Spectacular Condo in Summerlin! View of Spring Mountains  and Charleston Peak!!! 1 Bedrooms,Private Bathroom and a Queen Size Vertical Wall Bed.Fireplace, Kitchen,Dishwasher and Microwave, Open And Spacious Floorplan! Great Summerlin Location!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item  >
            <img className='img d-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/white_booking_versionwebp_-1920x790-1.webp' alt='Third-slide' />
            <Carousel.Caption className='carousel-text text-start'>
              <h4>$64/per night</h4>
              <h3 className='home-text'>Beautiful Cabin to Rent </h3>
              <p className='para'>
                Cozy home in Summerlin only 1.5 miles to Red Rock Resort and Downtown Summerlin With ample shopping, dining and entertainment.Red Rock Canyon State Park is located less than 10 miles away to enjoy hiking and rock climbing. More shopping ,dining and entertainment located in Tivoli Village and Boca Park Which is 2.5 miles away....
              </p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
      <div className='rent-list'>
        <h3 className='pt-5'>Featured listings to rent</h3>
        <h5 className='pb-5'>The most trendy accommodations available​</h5>
        <ul className='cardslist p-0 d-flex row'>
          {list.map((eachProduct) => {
            return (
              <li key={eachProduct.id} className='cards col-xl-4 '>
                <img className='img-img-img' src={eachProduct.imageUrl} alt='img' />
                <div className='p-3'>
                  <h3 className='title'>{eachProduct.title}</h3>
                  <p><GrLocation />{eachProduct.location}</p>
                  <p><AiOutlineHome />{eachProduct.address}</p>
                  <h5><FcRating /><FcRating /><FcRating /><FcRating /><FcRating />{eachProduct.rating}</h5>
                  <div className='text-end'>
                    <BiSolidHeartCircle className='icon' />
                  </div>
                  <h4 className='doller'>{eachProduct.price1}</h4>
                  <h4 className='doller-1'>{eachProduct.price2}</h4>
                </div>
              </li>
            )
          }
          )}
        </ul>

      </div>
      {/* <Carousel>
        <h3>Best places to visit​</h3>
        <p>The most trendy cities and areas in the world</p>
      <Carousel.Item>
        <img className='A-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2023/03/cat3-1.jpeg' alt='First-slide'/>
        <Carousel.Caption>
          <h3>Mattapan</h3>
          <p>1 listings</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='A-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2023/03/philly-1.jpg' alt='Second-slide'/>
        <Carousel.Caption>
          <h3>Philadelphia</h3>
          <p>2 listings</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img className='A-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2019/08/outside-e1570017015819.jpg'alt='Third-slide'/>
        <Carousel.Caption>
          <h3>Washington</h3>
          <p>5 listings</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='A-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2019/08/italy2-e1570017095890.jpg'alt='Fourth-slide'/>
        <Carousel.Caption>
          <h3>Wesley Heights</h3>
          <p>2 listings </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='A-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2019/08/austria-e1570017201422.jpg'alt='Fiveth-slide'/>
        <Carousel.Caption>
          <h3>West Said</h3>
          <p>1 listings</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
      <div>
        <h3>Featured properties</h3>
        <p>The most trendy listings on our website</p>
        <ul className="d-flex p-0">
          {properties.map((eachProduct) => {
            return (
              <li className='cards-list col-xl-6 ' key={eachProduct.id} >
                <img className='img-id w-100' src={eachProduct.imageurl} alt='img' />
                <h3 className='title'>{eachProduct.title}</h3>
                <p>{eachProduct.location}</p>
                <h5><FcRating /><FcRating /><FcRating /><FcRating /><FcRating />{eachProduct.rating}</h5>
                <h5 className='rs'>{eachProduct.price}</h5>
              </li>
            )
          }
          )}

        </ul>
      </div>
      <div className=' '>
        <h3>Best places to rent</h3>
        <p>How to travel on a budget around the world</p>
        <ul className='p-0 d-flex row'>
          {bestPlace.map((eachProduct) => {
            return (
              <li className='best-item col-xl-6' key={eachProduct.id}>
                <img className=' img-item w-100 ' src={eachProduct.imageurl} alt='img' />
                <h3>{eachProduct.home}</h3>
                <p>{eachProduct.listings}</p>

              </li>

            )
          })}
        </ul>
      </div>




    </div>
  )
}

export default Home