import s from "./style.module.css"
import Inline from "./collLines/inline"
import Statistika from "./statistika"
import CollLine from "./collLines/coll2"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Functions from "./functions"
import Actions from "../redux/actionCreator"
function Double(v,v2,pred,mult) {
    if(+v.dataset.itemcounter===v2 && v.dataset[pred]==="false"){
        v.setAttribute("data-"+pred,"true")
        let pay=+v.dataset.pay*mult
        v.setAttribute("data-pay",pay.toFixed(3))
        v.children[1].innerHTML=`<div>Прибыль - $${pay.toFixed(3)}</div>`
      }
   }
function DoubleImid(v,v2,mult) {
    if(+v.dataset.itemcounter===v2){
    let pay=+v.dataset.pay*mult
    v.setAttribute("data-pay",pay.toFixed(3))
    v.children[1].innerHTML=`<div>Прибыль - $${pay.toFixed(3)}</div>`
   }
}
export default function MainContent(props) {
const [Holder,setInline1Holder]=useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]),
users=useSelector(state=>state.players),dispatch=useDispatch(),[items,setItems]=useState([]);
let [flag,setFlag]=useState(0),[steps,setSteps]=useState([]),number=null,info=null
useEffect(()=>{setItems(document.body.querySelectorAll(`.${s.Item}`))},[])
function shouldDouble(RealNumber) {
    users[flag].zones.forEach((value,index)=>{
        let f=true;
        if(value.length===4){
            items.forEach((v,i)=>{
                if(!users[flag].was[index][1]){
                users[flag].zones[index].forEach((v2)=>{
                    Double(v,v2,"double2",4)
                })} else if(f && users[flag].totalMoney>5000){
                    f=false
                    if(window.confirm(`Хотите повысить доходность в зонах ${users[flag].zones[index].join('-')} на 25%? За это нужно заплатить $5000`)){
                        dispatch(Actions.minusCreator(flag,5000,props.main,props.UsersToNull,props.setFlag,RealNumber))
                        items.forEach((v,i)=>{
                        users[flag].zones[index].forEach((v2)=>{
                        DoubleImid(v,v2,1.25)
                        })
                    })}
                }
            })
            if(!users[flag].was[index][1])
            props.notify(`Игрок ${users[flag].playerName} занял зоны номер ${users[flag].zones[index].join('-')} и будет получать с них доходность Х4`)
            dispatch(Actions.wasCreator(flag,index,1))
            return
        }
        if(value.length===2){
            items.forEach((v,i)=>{
                if(!users[flag].was[index][0]){
                users[flag].zones[index].forEach((v2)=>{
                    Double(v,v2,"double1",2)
                })}
                else if(f && users[flag].totalMoney>500){
                    f=false
                    if(window.confirm(`Хотите повысить доходность в зонах ${users[flag].zones[index].join('-')} на 10%? За это нужно заплатить $500`)){
                        dispatch(Actions.minusCreator(flag,500,props.main,props.UsersToNull,props.setFlag,RealNumber))
                        items.forEach((v,i)=>{
                        users[flag].zones[index].forEach((v2)=>{
                        DoubleImid(v,v2,1.1)
                        })
                    })}
                }
            })
            if(!users[flag].was[index][0])
            props.notify(`Игрок ${users[flag].playerName} занял зоны номер ${users[flag].zones[index].join('-')} и будет получать с них двойную доходность`)
            dispatch(Actions.wasCreator(flag,index,0))
        }
    })
}
    return(<>
    <div className={s.Desk}>
    <Inline class={s.top} zonesCollor={[s.Red,s.Green,s.Blue]} zonesNames={["Абуджа","Багдад","Валлетта"]}
    price={[150,195,180]} pricePay={[15,20,12]} holder={Holder} start={0} shouldDouble={[false,false,false]}/>
    <CollLine class={s.right} zonesCollor={[s.Green,s.Blue,s.Red]} zonesNames={["Вашингтон","Дублин","Каїр"]}
    price={[225,195,255]} pricePay={[28,22,23]} holder={Holder} start={4} shouldDouble={[false,false,false]}/>
    <div className={s.main}>
        <h1>Сейчас ходит: {users[flag].playerName}</h1>
        <button  onClick={()=>{
            let RealNumber=null
            number=Math.round(2 + Math.random() * (12 - 2))
            RealNumber=+users[flag].position+number>16?(Number(users[flag].position)+number)-16:number+Number(users[flag].position)
            if(RealNumber<+users[flag].position)  dispatch(Actions.addCreator(flag,150,RealNumber))
            info.innerText=`Вам выпало ${number}`
            setSteps([...steps,<div key={steps.length} className={s.StepItem}><h2>{users[flag].playerName}
            </h2><p>Выбил {number} и попал на поле номер {RealNumber}</p></div>])
            if(RealNumber===16){RealNumber=0}

            shouldDouble(RealNumber)
            dispatch(Actions.changePosition(RealNumber,flag))
            let item=null
            items.forEach((value)=>{
                if(+value.dataset.itemcounter===RealNumber){
                item=value;
                return
                }
            })
        if(RealNumber===0 || RealNumber%4===0) { Functions.Foo(RealNumber,flag,dispatch,props.main,props.UsersToNull,props.setFlag) } 
        else{
            if(item.children[2].innerText==="Владелец -" && users[flag].totalMoney>=+item.dataset.itemcost) 
            Functions.Buy(RealNumber,item,flag,props.setFlag,dispatch,users,Holder,props.main,setInline1Holder,props.UsersToNull);
            else if(item.dataset.ovner && +item.dataset.ovner!==flag){
                dispatch(Actions.minusCreator(flag,+item.dataset.pay,props.main,props.UsersToNull,props.setFlag,RealNumber))
                dispatch(Actions.addCreator(+item.dataset.ovner,+item.dataset.pay))
           }
        }info.innerText=""
        flag<users.length-1?setFlag(flag+=1):setFlag(0)
        }}>Сделать ход</button>
        <p ref={(el)=>info=el}></p>
    </div>
    <CollLine class={s.left} zonesCollor={[s.Blue,s.Red,s.Green]} zonesNames={["Берлин","Ватикан","Гельсинки"]}
     price={[195,285,245]} pricePay={[16,32,40]} holder={Holder} start2={16} shouldDouble={[false,false,false]}/>
    <Inline class={s.bottom} zonesCollor={[s.Red,s.Green,s.Blue]} zonesNames={["Киев","Лондон","Мадрид"]}
     price={[290,305,325]} pricePay={[28,30,33]} holder={Holder} start2={12} shouldDouble={[false,false,false]}/>
</div>
<Statistika  steps={steps}/>
</>)
}