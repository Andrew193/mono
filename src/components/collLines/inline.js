import s from "../style.module.css"
import {AiOutlineEuro} from "react-icons/ai"
export default function inline(props) {
    let counter=null;
    props.start===0?counter=props.start:counter=props.start2
    let items=props.zonesCollor.map((value,index)=>{
        props.start===0?counter++:counter--
        let color=null;
        value===s.Red?color=0:value===s.Blue?color=1:color=2
        return  <div key={index} className={value+' '+s.Item} data-pay={props.pricePay[index]} data-itemcounter={counter} 
        data-zonecolor={`${color}`} data-double1={props.shouldDouble[index]} data-double2={props.shouldDouble[index]}
        data-itemcost={props.price[index]}>
            {!props.holder[counter]&&<h1>{props.zonesNames[index]} ціна <AiOutlineEuro/>{props.price[index]}</h1>}
            {props.holder[counter]&&<h1>{props.zonesNames[index]}</h1>}
            <p>Прибыль -<AiOutlineEuro/> {props.pricePay[index].toFixed(3)}</p>
            <p id="ovner">Владелец - </p>
        </div>
    })
    let r=null;
    props.start===0?r=counter-3:r=counter+3
    let r2=null
    props.start===0?r2=counter+1:r2=counter-1
    return(
        <div className={props.class+' '+s.RowInit}>
        <div className={s.SpecialItem+' '+s.Item} data-itemcounter={r}>{!props.start2?<h2>Старт +<AiOutlineEuro/>150</h2>:
        <h2>Бонус +<AiOutlineEuro/>50</h2>}</div>
        {items}
        <div className={s.SpecialItem+' '+s.Item} data-itemcounter={r2}>{!props.start2?<h2>Штраф -<AiOutlineEuro/>50</h2>:
        <h2>Штраф -<AiOutlineEuro/>250</h2>}</div>
        </div>
    )
}