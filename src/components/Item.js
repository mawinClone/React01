import './Item.css'

const Item = () => {
  let name = "ค่าใช้จ่ายเดินทาง";
  let price = 300;
  return (
    <li className='item'>
      {name} <span>-{price}</span>
    </li>
  );
};

export default Item;
