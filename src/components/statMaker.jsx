import {AiOutlineEuro} from "react-icons/ai"
import {GiCowled} from "react-icons/gi"
export default function statMaker(props) {
    let toMake=JSON.parse(JSON.stringify(props.toMake))
    toMake.sort((a,b)=>{return b.totalMoney-a.totalMoney})
    const items=toMake.map((value,index)=>{
       return <tr key={"num"+index}><td className="coll1">{index+1}</td><td className="coll2"><GiCowled/>{value.playerName}</td>
       <td className="coll3"><AiOutlineEuro />{value.totalMoney.toFixed(3)}</td><td className="coll4">{value.position}</td></tr>
    })
    return(
        items
    )
}