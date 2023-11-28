// import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

import "./Transaction.css";
import DataContext from "../data/DataContext";

const Transaction = (props) => {
  const { items } = props;

  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          //วนลูปเพื่อสร้าง item (สามารถใช้ prop.items.map เเทน items ได้)
          return <Item {...element} key={element.id} />;
        })}
      </ul>

      <DataContext.Consumer>
        {x=><p style={{textAlign:'end', marginRight:'5px'}}>playerName : {x.name}</p>}
      </DataContext.Consumer>
    </div>
  );
};

export default Transaction;
