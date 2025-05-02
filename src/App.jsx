import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [nameValue,setNameValue] = useState("");
  const [costValue,setCostValue] = useState("");
  const [addExprence,setAddExprence] = useState([]);
  const [editAble,setEditAble] = useState();
  const [total,setTotal] = useState(0);

   function changeEditAble(newValue){
    if (newValue) {
      setEditAble(newValue); 
    };
   };

  function handleExprence(){
    if (costValue && nameValue) {
      setAddExprence(
        (prev)=>
        [...prev,
         {cost:costValue, name:nameValue},]);

      setNameValue("");
      setCostValue("");
      setTotal((prev)=>prev+parseFloat(costValue))
    };
  };
  
  return (
    <>
    <div>
      <Header changeEditAble={changeEditAble} editAble={editAble} costValue={costValue} total={total}></Header>
      <div className="px-10">
      <h2 className="text-3xl font-bold"Expenses></h2>
      <input type="text" placeholder="Type to search..." className=" w-full p-1 border-gray-500 border mt-4" />
      <div className="mt-7 font-bold">
        {addExprence.map((expense,index)=>(
          <div className="flex justify-between items-center border-gray-500 border py-2 px-4" key={index}>
          <p className="font-bold">{expense.name}</p>
          <div className="flex items-center gap-2 ">
            <p className="py-[.5px] px-1 rounded-lg bg-blue-700 text-white">${expense.cost}</p>
            <p>X</p>
          </div>
        </div>
        ))};
        
      </div>
      </div>
    </div>
    <Footer setNameValue={setNameValue} setCostValue={setCostValue} handleExprence={handleExprence} ></Footer>
    </>
  );
};

export default App
