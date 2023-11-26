import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };

  // const initData = [
  //   { id: 1, title: "ค่าเติมเกม", amount: 500 },
  //   { id: 2, title: "ค่ากาชา", amount: 2000 },
  //   { id: 3, title: "ค่าโมเดล", amount: 1700 },
  // ];
  const [items, setItems] = useState([]); //useState

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]; //เอาข้อมูลใหม่ที่ส่งมาจาก FormComponent มาต่อด้านหน้า
    });
  };

  return (
    <div className="container">
      <h1 style={design}>โปรเเกรมบัญชี รายรับ รายจ่าย</h1>

      <FormComponent onAddItem={onAddNewItem} />
      {/* ส่งฟังก์ชันให้ FormComponent ในการเรียกย้อนกลับมายัง App */}

      <Transaction items={items} />
    </div>
  );
}

export default App;
