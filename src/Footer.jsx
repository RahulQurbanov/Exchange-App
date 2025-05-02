import { useState } from "react";

export default function Footer({setNameValue,setCostValue,handleExprence}){
    const [name,setName] = useState('');
    const [cost,setCost] = useState('');
    
  function onclick(event){
  setNameValue(name);
  setCostValue(cost);
  handleExprence();
  setName('');
  setCost('');
  };
    
    return(
        <div className="px-10 mt-[35px] ">
            <h1 className="font-bold text-2xl mb-[10px]">Add Expense :</h1>
            <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="Name">Name :</label>
                    <input type="text" className="border border-gray-500 w-[300px] rounded-sm p-1" value={name}  onChange={(e)=>{setName(e.target.value)}} />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="Cost">Cost :</label>
                    <input type="text" className="border border-gray-500 w-[300px] rounded-sm p-1" value={cost} onChange={(e)=>{setCost(e.target.value)}} />
                </div>
            </div>
            <button className="py-2 px-3 font-bold bg-blue-500 text-white mt-[15px] rounded-lg" onClick={onclick}>Save</button>
        </div>
    );
};
