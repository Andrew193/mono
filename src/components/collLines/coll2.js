import s from '../style.module.css'
import {AiOutlineEuro} from "react-icons/ai"
export default function Left(props) {
    let counter=null
    props.start?counter=props.start:counter=props.start2
    let items=props.zonesCollor.map((value,index)=>{
        props.start?counter++:counter--
        let color=null;
        value===s.Red?color=0:value===s.Blue?color=1:color=2
        return  <div key={index} className={value+' '+s.Item} data-pay={props.pricePay[index]} data-itemcounter={counter} data-zonecolor={`${color}`} 
        data-itemcost={props.price[index]} data-double2={props.shouldDouble[index]} data-double1={props.shouldDouble[index]}>
            {!props.holder[counter]&&<h1>{props.zonesNames[index]} ціна <AiOutlineEuro/>{props.price[index]}</h1>}
            {props.holder[counter]&&<h1>{props.zonesNames[index]}</h1>}
            <p>Прибыль - <AiOutlineEuro/>{props.pricePay[index].toFixed(3)}</p>
            <p id="ovner">Владелец - </p>
        </div>
    })
    return(
        <div className={props.class+' '+s.CollInit}>
            {items}
        </div>
    )
}