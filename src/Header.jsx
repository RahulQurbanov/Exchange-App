export default function Header({ changeEditAble, editAble,total}) {
    const remaining = editAble-total;
    
    return (
      <>
        <h1 className="font-bold text-4xl align-center px-10 py-4">My Budget Planner</h1>
        <div className="text-xl text-white font-bold w-full flex justify-between items-center p-[40px] gap-10">
          <div className="h-[65px] w-[35%] flex justify-between px-5 py-3 bg-gray-500 items-center">
            <div className="flex items-center gap-2">
            <p className="w-[80px]">Budget: $</p>
            <input
              type="text"
              value={editAble}
              onChange={(e) => changeEditAble(e.target.value)}
              className="bg-transparent text-white border-none outline-none"
            />
            </div>
            <button
              className="py-1 px-3 bg-blue-500 rounded-lg mt-5"
              onClick={() => { changeEditAble(editAble); }}
            >
              Edit
            </button>
          </div>
          <div className="h-[65px] w-[30%] p-5 bg-green-400">
            <p>Remaining: ${remaining?remaining:0}</p>
          </div>
          <div className="h-[65px] w-[30%] p-5 bg-blue-300">
            <p>Spent so far: ${total}</p>
          </div>
        </div>
      </>
    );
  };
  
