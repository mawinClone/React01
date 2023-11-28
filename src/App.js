import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
// import { element } from "prop-types";
// import { element } from "prop-types";

function App() {
  const design = { color: "darkcyan", textAlign: "center", fontSize: "1.5rem" };

  // const initData = [
  //   { id: 1, title: "ค่าเติมเกม", amount: -500 },
  //   { id: 2, title: "ค่ากาชา", amount: -2000 },
  //   { id: 3, title: "ค่าโมเดล", amount: -1700 },
  //   { id: 4, title: "ถูกหวย", amount: 5000 },
  // ];
  const [items, setItems] = useState([]); //useState
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
        <h1 style={design}>โปรเเกรมบัญชี รายรับ รายจ่าย</h1>
        <ReportComponent />
        <FormComponent onAddItem={onAddNewItem} />
        {/* ส่งฟังก์ชันให้ FormComponent ในการเรียกย้อนกลับมายัง App */}

        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
