import s from "./style.module.css"
import StatMaker from "./statMaker"
import { useSelector } from "react-redux"
import { useEffect } from "react";
export default function Bottom(props) {
    const players=useSelector((state)=>state.players)
    useEffect(()=>{
      if(props.steps.length>0)
        document.body.querySelectorAll(`.${s.StepItem}`)[ document.body.querySelectorAll(`.${s.StepItem}`).length-1].scrollIntoView({ behavior: "smooth" })
    })
    return(
        <div className={s.Statistika}>
        <h1>Текущее положение дел</h1>
        <table>
          <tbody className={s.StatPlace} >
            <tr><td className="coll1">№</td><td className="coll2">Имя</td><td className="coll3">Сумма</td><td className="coll4">Позиция</td></tr>
            <StatMaker toMake={players}/>
          </tbody>
        </table>
        <div className={s.Steps}>
          {props.steps}
        </div>
      </div>
    )
}