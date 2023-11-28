import PropTypes from 'prop-types';
import './Item.css'
// import DataContext from "../data/DataContext";
// import { useContext } from 'react';

const Item = (props) => {
  const { title, amount } = props;

  const status =  amount>0 ? "income": "expense";

  // const context = useContext(DataContext);
  // const {name, nickName} = useContext(DataContext);

  return (
    <li className={status}>
      {title} <span>{Math.abs(amount)}</span>

      {/* <span>{context.nickName}</span> */} 
      {/* <span>{nickName}</span> */}
      {/* การเรียกใช้ context */}
      
    </li>
  );
};

Item.propTypes={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired,
}

export default Item;
