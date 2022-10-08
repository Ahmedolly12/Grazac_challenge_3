import React, { useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Product.css"
import nike from "../../images/rednike.png"
import nike2 from "../../images/nike2.png"
import nike3 from "../../images/nike3.png"
import nike4 from "../../images/nike4.png"
import nike6 from "../../images/nike6.png"
import rate from "../../images/rate.png"
import wallet from "../../images/wallet.png"
import wallet2 from "../../images/wallet2.png"
import bluenike from "../../images/bluenike.png"
import star from "../../images/star.png"
import star2 from "../../images/star2.png"
import cart2 from "../../images/cart2.png"
import hearts from "../../images/hearts.png"
import nike7 from "../../images/nike7.PNG"
import nike8 from "../../images/nike8.PNG"
import whitefacebook from "../../images/whitefacebook.png"
import whitetwitter from "../../images/whitetwitter.png"
import Shoecard from "../../Component/Shoecard/Shoecard"
 



const Product = () => {
  //Quantity increment and decrement start
const [quantity, setQuantity]= useState(1);

  const handleDecrement=()=>{
    if (quantity > 1){
      setQuantity(prevCount=> prevCount-1);
    }
    
  }
  const handleIncrement=()=>{
    if (quantity < 10){
      setQuantity(prevCount=> prevCount+1);
    }
    
  }
  //Quantity increment and decrement ends

  //image slider start
  const imgs=[
    {id:0, value: nike3},
    {id:1, value:nike4},
    {id:2, value:nike},
    {id:3, value:nike6},
  ]
  const [sliderData, setSliderData]= useState(imgs[0])
  const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setSliderData(slider);
  }
  //image slider ends

  //card component
    const [data]= useState ([{
        image: nike2,
        heading: ' Nike Air Max 270 React',
        star: rate,
        prices:'  $299,43'
    },
      {
        image: wallet,
        heading: ' Nike Air Max 270 React',
        star: rate,
        prices:'$299,43'

      },
      {
        image: wallet2,
        heading: ' Nike Air Max 270 React',
        star: rate,
        prices:' $299,43'
      },
      {
        image: bluenike,
        heading: ' Nike Air Max 270 React',
        star: rate,
        prices:' $299,43'
      }
  ])
  return (
    <div>
        <div className="product-container">
          <div className="nike">
            <img src={sliderData.value} height="300" width="300" alt=""/>
            <div className='flex-row'>
            {
              imgs.map((data, i)=>
              <div className='thumbnails'>
              <img className={sliderData.id===i?"clicked":""} key={data.id}src={data.value} alt=""onClick={()=>handleClick(i)} height="80" width="80"/>
              </div>
              )
            } 
            </div>
            </div>
            <div className="product-desc">
              <p>Nike Airmax 270 React</p>
              <div className="review">
                <div className="star">
                  <img src={star}alt=""/> 
                  <img src={star}alt=""/> 
                  <img src={star}alt=""/> 
                  <img src={star}alt=""/>
                  <img src={star2}alt=""/>
                </div>
                <div className="submitted">
                  <p className='review'>0 reviews</p>
                  <p className="submit">Submit a review</p>
                </div>
              </div>
              <hr className="thin" />
              <p className="dollars">$299,43 <small>$534,33 </small> <small className="off">24% Off</small></p>
              <small className="object">
                Availability:   In stock <br></br>
                Categories:     Accessories <br></br>
                Free shipping <br></br>
                <hr className="thin" />
                Select colors: <input type="radio" id ='blue' name='colors' value='blue'/> <input type="radio" name='colors' id= 'red' value="red"/> <input type="radio" id='black' name='colors' value="black"/> <input type="radio" name='colors' id= 'yellow' value="yellow"/>
                <br></br>
                Size:<select className="size" name="lang" id="lang">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                      </select>
                    <br></br>

                    <div className="cart">
                      <div className="input-group">
                        <button type='button' onClick={handleDecrement}className='input-group-text'>-</button>
                        <div className='form-control text-center'>{quantity}</div>
                        <button type='button'onClick={handleIncrement} className='input-group-text'>+</button>
                      </div>
                      <div className="cart2">
                      <small className='to'><img src={cart2} alt=''/>   Add To Cart</small>
                      <small className='love'><img src={hearts} alt=''/></small>
                      </div>
                    </div>
                   
              </small> 
               <hr className="thin"></hr>
              <div className="social-media">
                <button className="facebook"><img src={whitefacebook} alt=''/> Share on Facebook</button>
                 <button className="twitter"><img src={whitetwitter} alt=''/> Share on Twitter</button>
              </div>
          </div>
        <div className="right">
          <p>BEST SELLERS </p>
              <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nike2}
          alt="First slide"
          
        />
        <Carousel.Caption>
           
        </Carousel.Caption>
        <div className="desc">
            <div className="star">
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/>
          <img src={star2}alt=""/>
        </div>
        <p className='price'>$499 <small className='price'>$599</small></p>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nike7}
          width='1%'
          alt="Second slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
        <div className="desc">
            <div className="star">
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/>
          <img src={star2}alt=""/>
        </div>
        <p className='price'>$599 <small className='price'>$699</small></p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {nike8}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
         <div className="desc">
            <div className="star">
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/>
          <img src={star2}alt=""/>
        </div>
        <p className='price'>$699 <small className='price'>$799</small></p>
        </div>
      </Carousel.Item>
    
    </Carousel>

        </div>
        </div>
      <div className="tab-container">
              <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><span>Product Infomation</span></button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Review <small className='zero'>0</small></button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Another Tab</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <p className="content">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched 
    the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
    <p className="content">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched 
    the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
    <p className="content">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched 
    the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    <p className="content">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched 
    the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
    <p className="content">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched 
    the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    <p className="content">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched 
    the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
  </div>
</div>
      </div>
    <div className='related'>
      <h2> RELATED PRODUCTS</h2>
      <div className="related-container">
        {data.map((item) =>(
        <Shoecard image={item.image} heading={item.heading} star={item.star} prices={item.prices}/>
     )
     )}
     <button className='hot'>HOT</button>
     </div>
    </div>
    </div>
  )
}

export default Product