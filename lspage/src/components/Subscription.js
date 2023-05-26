import { Carousel } from 'antd';
import "./subs.css"
import c1 from "./images/crous1.jpg"
import c2 from "./images/crous2.jpg"
import c3 from "./images/crous3.jpg"
import c4 from "./images/crous4.jpg"
import Cards from './Cards';
import card1 from "./images/card1.png"
import card2 from "./images/Silver.png"
import card3 from "./images/golden.png"
import card4 from "./images/card4.png"
const contentStyle = {
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Subscription = () => {
  const content = [
    {
      img:`${card1}`,
      color: "linear-gradient(to right, #CD7F32, #8B4513)"

    },
    {
      img:`${card2}`,
      color: "linear-gradient(to right, #C0C0C0,#808080)"
    },
    {
      img:`${card3}`,
      color:"radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"
    }
  ]
  return (
    <div className='crous' style={{backgroundColor:'black'}}>
     <Carousel autoplay>
    <div>
      <h3 style={contentStyle} ><img  className='croussize' src={c1} /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='croussize'   src={c2} /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='croussize' src={c3} /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='croussize' src={c4} /></h3>
    </div>
  </Carousel>
  <div className='carddiv'>
   {/* <div className='c1 cd'><Cards ></Cards></div>
   <div className='c2 cd'><Cards></Cards></div>
   <div className='c3 cd'><Cards></Cards></div> */}
  { 
  content.map((i)=>{
    return <div className='cd'><Cards color = {i.color} img={i.img}></Cards></div>
   })
  }
  </div>
    </div>
  );
};
export default Subscription;