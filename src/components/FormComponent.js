import "./FormComponent.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) =>{

    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState(0);
    const [formValid,setFormValid] = useState(false);

    useEffect(()=>{
        console.log("Call useEffect");
        const checkData = title.trim().length >0 && amount!== 0;
        setFormValid(checkData);
        
    },[title, amount]);

    console.log("Render FormComponent");

    const inputTitle = (event)=>{
        setTitle(event.target.value);
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value);
        
    }

    const saveItem = (event)=>{
        event.preventDefault(); //กด subbmit เเล้วไม่รีเฟรชเว็บ
        const itemData = {
            title: title,
            amount: Number(amount) ,
            id: uuidv4()
        }
        console.log("save data");
        props.onAddItem(itemData); //ส่ง itemData กลับไป setState ที่ App

        setTitle("");
        setAmount(0);
    }


    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงินบาท" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button className="btn" type="submit" disabled = {!formValid} >เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    );

}
export default FormComponent;