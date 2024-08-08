import React, { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([
    "Walk dog",
    "Buy groceries",
    "Study",
    "Clean house",
  ]);
  const [task, setTask] = useState("");
  let s={width:"800px",height:"800px"};
  const [chessTable, setchessTable] = useState([
    ["br","bkn","bb","bq","bk","bb","bkn","br"],
    ["bp","bp","bp","bp","bp","bp","bp","bp"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["wp","wp","wp","wp","wp","wp","wp","wp"],
    ["wr","wkn","wb","wq","wk","wb","wkn","wr"]
]);
  const renderChessTable=(table)=>
    {
        return table.map(renderChessRow);
    }
  const renderChessRow=(table,index)=>
    {
        return table.map(renderChessCase(index));
    }
  const renderChessCase=(index)=>
    {
        const renderChessCase1=(el,index)=>
        {
            if((index%2)===0)
            {
                return <div className="bg-white">{el===""? "empty":el}</div>
                //return "w";
            }
            //return "b";
            return <div className="bg-black">{el===""? "empty":el}</div>
        }
        const renderChessCase2=(el,index)=>
        {
            if((index%2)===0)
            {
                //return "b";
                return <div className="bg-black">{el===""? "empty":el}</div>
            }
            //return "w";
            return <div className="bg-white">{el===""? "empty":el}</div>
        }
        if((index%2)===0)
        {
            return renderChessCase1;
        }
        return renderChessCase2;
    }
    console.log(renderChessTable(chessTable))
  return (
    <div className="grid grid-cols-8" style={s}>
        {renderChessTable(chessTable)}
    </div>
  );
}