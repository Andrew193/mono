import './App.css';
import Modal from "react-modal"
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import MainContent from "./components/mainContent"
import { ToastContainer , toast } from  "react-toastify" ;
import  "react-toastify/dist/ReactToastify.css" ;
import Actions from "./redux/actionCreator"
Modal.setAppElement("#root")
function App() {
  const [isShown,setIsShown]=useState(true),dispatch=useDispatch(),notify=(message)=>{toast(message,{position:toast.POSITION.TOP_CENTER,className:"Toast",bodyClassName:"ToastContent",
  hideProgressBar:true,autoClose:1000})}
  let [initPlayers,setInitPlayers]=useState([]),inputElement=null,[flag,setFlag]=useState(false)
  function addPlayer(props) {
    if(props.value.length<5)
    notify(`Пользователь ${props.value} не зарегистрирован`)
    else{
    setInitPlayers([...initPlayers,{playerName:props.value,totalMoney:500,zones:[[],[],[]],position:0,double:[false,false,false],
      was:[[false,false],[false,false],[false,false]]}])
    notify(`Пользователь ${props.value} успешно зарегистрирован`)
    setFlag(true);
    }
  }
  
  return (
    <div className="App">
      <Modal isOpen={isShown}>
        <h1>Введите имена игроков</h1>
        <div className="Ml">
          <input type="text" ref={(element)=>{inputElement=element}}></input>
          <button onClick={()=>addPlayer(inputElement)}>Зарегистрировать пользователя</button>
        </div>
       {flag &&<button style={{padding:"5px 15px",marginLeft:"5%"}} onClick={()=>{
          dispatch(Actions.initCreator(initPlayers));
          setIsShown(!isShown);
        }}>All Done</button>}
      </Modal>
      {!isShown && <MainContent notify={notify} main={setIsShown} setFlag={setFlag} UsersToNull={setInitPlayers}> <ToastContainer /></MainContent>}
      <ToastContainer />
    </div>
  );
}

export default App;
