import { Card } from 'antd';
import {useNavigate} from "react-router-dom"
import "./subs.css"
const { Meta } = Card;

function Cards(props) {
  const navigate = useNavigate();
  return (<>
  
  <Card
    hoverable
    style={{
      width: 280,
      background:`${props.color}`
      
    }}
    cover={
      <img alt="example" className='cards' src={props.img} />
    }
  >
    <button onClick={()=>{navigate('/CartPage')}}>Subscribe to know more</button>
  </Card>
  </>
  );
};
export default Cards;