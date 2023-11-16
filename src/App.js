const Title = () => <h1>โปรเเกรมบัญชี รายรับ รายจ่าย</h1>

const Description = () => <p>บันทึกข้อมูลเเต่ละวัน</p>

const Item = () => <li>ค่าเดินทาง <span>-200</span></li>

const Transaction = () => {
  return(
    <Item />
  );
}





function App() {
  return (
    <div>
      <Title/>
      <Description/>
      <Transaction/>
    </div>
  );
}

export default App;
