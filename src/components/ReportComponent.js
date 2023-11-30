import { useContext } from 'react';
import DataContext from "../data/DataContext";
import './ReportComponent.css'

const ReportComponent = () =>{

      const {expense, income} = useContext(DataContext);

    return(
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿ {income + expense}</h1>
            <div className="report-container">
                <div>
                    <h4>รายรับ </h4>
                    <p className="report plus">฿ {income}</p>
                </div>
                <div>
                    <h4>รายจ่าย </h4>
                    <p className="report minus">฿ {expense}</p>
                </div>
            </div>
        </div>

    );

}

export default ReportComponent;