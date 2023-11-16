const Title = () => <h1>โปรเเกรมบัญชี รายรับ รายจ่าย</h1>

const Description = () => <p>บันทึกข้อมูลเเต่ละวัน</p>

const Transaction = () => {
  return(
<ul>
        <li>ค่าเดินทาง <span>-200</span></li>
        <li>เงินเดือน <span>+20000</span></li>
        <li>ค่าอาหาร <span>-500</span></li>
      </ul>
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
