import React, { useState } from "react";

export function TodoList() {
  //let s={width:"800px",height:"800px"};
  let handw=Math.min(window.innerHeight,window.innerWidth)
  //let s={width:Math.floor((window.innerHeight/8)*8)+"px",height:Math.floor((window.innerHeight/8)*8)};
  let s={width:Math.floor((handw/8)*8)+"px",height:Math.floor((handw/8)*8)};
  let caseSize=Math.floor(handw/8);
  //(window.innerHeight/8)
  const [clicked,setClicked]=useState(false);
  const [clickedx,setClickedx]=useState();
  const [clickedy,setClickedy]=useState();
  const [turn,setTurn]=useState("white");
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
const getColor=(x,y)=>
{
  let color="empty";
	if((chessTable[y][x].match("^w")!==null))
	{
		color="white"
	}
	else if((chessTable[y][x].match("^b")!==null))
	{
		color="black"
	}
	if(color!==turn)
	{
		
	}
  return color;
}





const blackPawn=()=>
  {
    let position=[];
    if(chessTable[clickedy-1][clickedx]==="")
    {
      position.push([clickedx,clickedy-1]);
    }
    if(clickedx<7)
    {
      if((getColor(clickedx+1,clickedy+1)!==turn)&&(getColor(clickedx+1,clickedy+1)!=="empty"))
      {
        position.push([clickedy+1,clickedx+1]);
      }
    }
    if(clickedx>0)
    {
      if((getColor(clickedx-1,clickedy+1)!==turn)&&(getColor(clickedx-1,clickedy+1)!=="empty"))
      {
        position.push([clickedy+1,clickedx-1]);
      }
    }
    return position;
  }
  const whitePawn=()=>
  {
    let position=[];
    if(chessTable[clickedy-1][clickedx]==="")
    {
      position.push([clickedy-1,clickedx]);
    }
    if((clickedx)<7)
    {
      if((getColor(clickedx+1,clickedy-1)!==turn)&&(getColor(clickedx+1,clickedy-1)!=="empty"))
      {
        position.push([clickedy-1,clickedx+1]);
      }
    }
    if((clickedx)>0)
    {
      if((getColor(clickedx-1,clickedy-1)!==turn)&&(getColor(clickedx-1,clickedy-1)!=="empty"))
      {
        position.push([clickedy-1,clickedx-1]);
      }
    }
    return position;
  }
  const bishop=()=>
  {
    let position=[];
    for(let i=1;((clickedx+i)<8)&&((clickedy+i)<8);i=i+1)
    {
      if(chessTable[clickedy+i][clickedx+i]==="")
      {
        position.push([clickedy+i,clickedx+i]);
      }
      else if(getColor(clickedx+i,clickedy+i)!==turn)
      {
        position.push([clickedy+i,clickedx+i]);
        break;
      }
      else
      {
        break;
      }
    }
    for(let i=1;((clickedx+i)<8)&&((clickedy-i)>=0);i=i+1)
    {
      if(chessTable[clickedy-i][clickedx+i]==="")
      {
        position.push([clickedy-i,clickedx+i]);
      }
      else if(getColor(clickedx+i,clickedy-i)!==turn)
      {
        position.push([clickedy-i,clickedx+i]);
        break;
      }
      else
      {
        break;
      }
    }
    for(let i=1;((clickedx-i)>=0)&&((clickedy-i)>=0);i=i+1)
    {
      if(chessTable[clickedy-i][clickedx-i]==="")
      {
        position.push([clickedy-i,clickedx-i]);
      }
      else if(getColor(clickedx-i,clickedy-i)!==turn)
      {
        position.push([clickedy-i,clickedx-i]);
        break;
      }
      else
      {
        break;
      }
    }
    for(let i=1;((clickedx-i)>=0)&&((clickedy+i)<8);i=i+1)
    {
      if(chessTable[clickedy+i][clickedx-i]==="")
      {
        position.push([clickedy+i,clickedx-i]);
      }
      else if(getColor(clickedx-i,clickedy+i)!==turn)
      {
        position.push([clickedy+i,clickedx-i]);
        break;
      }
      else
      {
        break;
      }
    }
    return position;
  }
  const rook=()=>
  {
    let position=[];
    console.log("rook")
    for(let i=1;(clickedx-i)>-1;i=i+1)
    {
      if(chessTable[clickedy][clickedx-i]==="")
      {
        position.push([clickedy,clickedx-i]);
      }
      else if(getColor(clickedx-i,clickedy)!==turn)
      {
        position.push([clickedy,clickedx-i]);
        break;
      }
      else
      {
        break;
      }
    }
    for(let i=1;(clickedx+i)<8;i=i+1)
    {
      if(chessTable[clickedy][clickedx+i]==="")
      {
        position.push([clickedy,clickedx+i]);
      }
      else if(getColor(clickedx+i,clickedy)!==turn)
      {
        position.push([clickedy,clickedx+i]);
        break;
      }
      else
      {
        break;
      }
    }
    for(let i=1;(clickedy+i)<8;i=i+1)
    {
      if(chessTable[clickedy+i][clickedx]==="")
      {
        position.push([clickedy+i,clickedx]);
      }
      else if(getColor(clickedx,clickedy+i)!==turn)
      {
        position.push([clickedy+i,clickedx]);
        break;
      }
      else
      {
        break;
      }
    }
    for(let i=1;(clickedy-i)>-1;i=i+1)
    {
      if(chessTable[clickedy-i][clickedx]==="")
      {
        position.push([clickedy-i,clickedx]);
      }
      else if(getColor(clickedx,clickedy-i)!==turn)
      {
        position.push([clickedy-i,clickedx]);
        break;
      }
      else
      {
        break;
      }
    }
    return position;
  }
  const knigth=()=>
  {
    let position=[];
    if(clickedx<6&&clickedy<7)
    {
      if((chessTable[clickedy+1][clickedx+2]==="")||(getColor(clickedx+2,clickedy+1)!==turn))
      {
        position.push([clickedy+1,clickedx+2]);
      }
    }
    if(clickedx<6&&clickedy>0)
    {
      if((chessTable[clickedy-1][clickedx+2]==="")||(getColor(clickedx+2,clickedy-1)!==turn))
      {
        position.push([clickedy-1,clickedx+2]);
      }
    }
    if(clickedx>1&&clickedy>0)
    {
      if((chessTable[clickedy-1][clickedx-2]==="")||(getColor(clickedx-2,clickedy-1)!==turn))
      {
        position.push([clickedy-1,clickedx-2]);
      }
    }
    if(clickedx>1&&clickedy<7)
    {
      if((chessTable[clickedy+1][clickedx-2]==="")||(getColor(clickedx-2,clickedy+1)!==turn))
      {
        position.push([clickedy+1,clickedx-2]);
      }
    }
    if(clickedx<7&&clickedy<6)
    {
      if((chessTable[clickedy+2][clickedx+1]==="")||(getColor(clickedx+1,clickedy+2)!==turn))
      {
        position.push([clickedy+2,clickedx+1]);
      }
    }
    if(clickedx>0&&clickedy<6)
    {
      if((chessTable[clickedy+2][clickedx-1]==="")||(getColor(clickedx-1,clickedy+2)!==turn))
      {
        position.push([clickedy+2,clickedx-1]);
      }
    }
    if(clickedx>0&&clickedy>1)
    {
      if((chessTable[clickedy-2][clickedx-1]==="")||(getColor(clickedx-1,clickedy-2)!==turn))
      {
        position.push([clickedy-2,clickedx-1]);
      }
    }
    if(clickedx<7&&clickedy>1)
    {
      if((chessTable[clickedy-2][clickedx+1]==="")||(getColor(clickedx+1,clickedy-2)!==turn))
      {
        position.push([clickedy-2,clickedx+1]);
      }
    }
    return position;
  }
  
  const queen=()=>
  {
    let position1=rook();
    let position2=bishop();
    return position1.concat(position2);
  }

  const king=()=>
  {
    let position1=[];
    //if(clickedx>0)
  }


const whereCanItMove=
{
wp:whitePawn,
bp:blackPawn,
wkn:knigth,
bkn:knigth,
wb:bishop,
bb:bishop,
wr:rook,
br:rook,
wq:queen,
bq:queen,
wk:"",
bk:"",
}





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


  const handleClick=(e)=>
  {
    let c=document.querySelector("div.grid");
    let bcr=c.getBoundingClientRect();
    let left=bcr["x"];
    let top=bcr["y"];
    let x=Math.floor((e.clientX-left)/caseSize);
    let y=Math.floor((e.clientY-top)/caseSize);
    if(clicked)
    {
      setClicked(false);
      console.log(clicked);
      let color=getColor(x,y)
      //move(clikedx,clickedy,x,y)
      console.log("whereCanItMove")
      console.log(whereCanItMove[chessTable[clickedy][clickedx]]())
      if(chessTable[y][x]=="")
      {
        let ct=chessTable.slice();
        ct[y][x]=chessTable[clickedy][clickedx];
        ct[clickedy][clickedx]="";
        setchessTable(ct);
      }
      //turn === "white" ? setTurn("black"):setTurn("white")
      //console.log(turn);
    }
    else if(chessTable[y][x]!=="")
    {
      let color=getColor(x,y)
      if(color===turn)
      {
        setClicked(true);
        setClickedx(x);
        setClickedy(y);
        console.log({clicked:clicked,color:color});
      }
    }
    console.log({x:x,y:y,caseSize:caseSize,clicked:clicked,clickedx:clickedx,clickedy:clickedy,handw:handw});
  }

    //console.log(renderChessTable(chessTable))
  return (
    <div className="grid grid-cols-8 gap-0" style={s} onClick={handleClick}>
        {renderChessTable(chessTable)}
    </div>
  );
}