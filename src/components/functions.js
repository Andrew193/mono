import Actions from "../redux/actionCreator"
const toExport={
    Foo:(number,flag,dispatch,tonull,UsersToNull,setFlag)=>{
        switch (number) {
            case 0:{
                dispatch(Actions.addCreator(flag,150,number))
                break;
            }
            case 4:{
                dispatch(Actions.minusCreator(flag,50,tonull,UsersToNull,setFlag,number))
                break;
            }
            case 8:{
                dispatch(Actions.minusCreator(flag,250,tonull,UsersToNull,setFlag,number))
                break;
            }
            case 12:{
                dispatch(Actions.addCreator(flag,50,number))
                break;
            }
            default:
                break;
        }
    },
    Buy:(number,item,flag,setFlag,dispatch,users,Holder,main,setInline1Holder,UsersToNull)=>{
        if(window.confirm(`У вас ${users[flag].totalMoney}, а територия стоит ${item.dataset.itemcost}. Хотите стать её счастливым обладателем?`)){
            item.children[2].innerText+=users[flag].playerName;
            item.setAttribute("data-ovner",flag) 
            dispatch(Actions.minusCreator(flag,+item.dataset.itemcost,main,UsersToNull,setFlag,number))
            dispatch(Actions.addZoneCreator(+item.dataset.zonecolor,flag,+item.dataset.itemcounter))
            Holder[number]=true;
            setInline1Holder(Holder);
        }
    }
}
export default toExport