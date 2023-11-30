import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useState, useEffect, useReducer } from "react";
// import { v4 as uuidv4 } from "uuid";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { type } from "@testing-library/user-event/dist/type";
// import { element } from "prop-types";
// import { element } from "prop-types";

function App() {
  const design = { color: "darkcyan", textAlign: "center", fontSize: "1.5rem" };
  const initData = [
    { id: 1, title: "ค่าเติมเกม", amount: -500 },
    { id: 2, title: "ถูกหวย", amount: 5000 },
  ];
  const [items, setItems] = useState(initData); //useState
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]; //เอาข้อมูลใหม่ที่ส่งมาจาก FormComponent มาต่อด้านหน้า
    });
  };

  useEffect(
    () => {
      const amounts = items.map((element) => element.amount);
      // console.log("amounts is ", amounts);
      const income = amounts.filter((element) => element > 0).reduce((total, element) => (total += element), 0);
      const expense = amounts.filter((element) => element < 0).reduce((total, element) => (total += element), 0);
      setReportIncome(income);
      setReportExpense(expense);
      // console.log("รายได้ ", income);
      // console.log("รายจ่าย ", expense);
    },
    [items],
    reportIncome,
    reportExpense
  );

  const [showReport, setShowReport] = useState(true);
  const reducer = (state, action) =>{
    switch (action.type) {
      case "Show":
        return setShowReport(true);
      case "Hide":
        return setShowReport(false); 
  
    }
  }

  const [result, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        name: "Martiny",
        nickName: "Mawin",
        expense: reportExpense,
        income: reportIncome,
      }}
    >
      <div className="container">
        <h1 style={design}>โปรเเกรมบัญชี รายรับ รายจ่าย </h1>
        {showReport && <ReportComponent />}
        <FormComponent onAddItem={onAddNewItem} />
        {/* ส่งฟังก์ชันให้ FormComponent ในการเรียกย้อนกลับมายัง App */}

        <Transaction items={items} />

        <button onClick={()=>{dispatch({type: "Show"})}}>เเสดง</button>
        <button onClick={()=>{dispatch({type: "Hide"})}}>ซ่อน</button>
      </div>
    </DataContext.Provider>
  );
}

export default App;
