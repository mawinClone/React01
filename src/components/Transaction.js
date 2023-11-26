// import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

import "./Transaction.css";

const Transaction = (props) => {

  const { items } = props; 

  return (
    <ul className="item-list">
      {items.map((element) => { //วนลูปเพื่อสร้าง item (สามารถใช้ prop.items.map เเทน items ได้)
        return <Item {...element} key={element.id} />;
      })}
    </ul>
  );
};

export default Transaction;
