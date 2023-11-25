import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
  const data = [
    {title: "ค่าเติมเกม", amount: 500 },
    {title: "ค่ากาชา", amount: 2000 },
    {title: "ค่าโมเดล", amount: 1700 },
  ];

  return (
    <ul className="item-list">
      {data.map((element) => {
        return <Item {...element} key ={uuidv4()}/>;
      })}
    </ul>
  );
};

export default Transaction;
