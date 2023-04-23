import './App.css';
import Header from './MyComponents/Header';
import TextForm from './MyComponents/TextForm';
import React, { useState } from 'react';
import Alert from './MyComponents/Alert';



function App() {
  const [alert, setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const [myStyle, setMystyle]=useState({
    color: "black",
    backgroundColor: "white"
  })
  const [btnText, setBtntext]=useState("Enable Dark Mode");

  const toggleMode=()=>{
    if(myStyle.color==="black"){
        setMystyle({
            color: "white",
    backgroundColor: "black",
        })
       document.body.style.backgroundColor = "#0e2e5e";
       setBtntext("Enable Light Mode");
       showAlert("Dark mode has been enabled", "success");

    }
    else{

        setMystyle({
            color: "black",
    backgroundColor: "white"
        })
        document.body.style.backgroundColor = "white";
        setBtntext("Enable Dark Mode");
        showAlert("Light mode has been enabled", "success");

    }
  }
  
  
  return (
    
<>
    <Header title="TextUtils" mode={myStyle} toggleMode={toggleMode} btnText={btnText}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
          <TextForm key="home" heading="Try TextUtils-word counter, character counter, remove extra spaces" mode={myStyle} btnText={btnText}/>
          </div>
          </>
  );
}
export default App;
