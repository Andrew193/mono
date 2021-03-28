const Actions={
    minusCreator:(playerNumber,moneyToMinus,OBNAL,toNull,setFlag,position)=>(
    {type:"MINUS_MONEY",playerNumber:playerNumber,moneyToMinus:moneyToMinus,OBNAL:OBNAL,toNull:toNull,setFlag:setFlag,position:position}
    )
    ,addCreator:(playerNumber,moneyToAdd,position=null)=>({type:"ADD_MONEY",playerNumber:playerNumber,moneyToAdd:moneyToAdd,position:position})
    ,changePosition:(position,playerNumber)=>({type:"CHANGE_POSITION",playerNumber:playerNumber,position:position})
    ,addZoneCreator:(zoneColor,playerNumber,zoneToPush)=>({type:"ADD_ZONE",zoneColor:zoneColor,playerNumber:playerNumber,zoneToPush:zoneToPush})
    ,initCreator:(state)=>({type:"INIT_STATE",state:state})
    ,wasCreator:(playerNumber,set,index)=>({type:"WAS",playerNumber:playerNumber,set:set,index:index})
}
export default Actions