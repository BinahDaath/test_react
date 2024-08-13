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
  const [chessTable, setChessTable] = useState([
    ["br","bkn","bb","bq","bk","bb","bkn","br"],
    ["bp","bp","bp","bp","bp","bp","bp","bp"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["wp","wp","wp","wp","wp","wp","wp","wp"],
    ["wr","wkn","wb","wq","wk","wb","wkn","wr"]
]);
const getPiece=(el)=>
{
  if(el==="wp")
    {
      return <i className="fas fa-chess-pawn text-white text-7xl"></i>
    }
    if(el==="wkn")
    {
      return <i className="fas fa-chess-knight text-white text-7xl"></i>
    }
    if(el==="wb")
    {
      return <i className="fas fa-chess-bishop text-white text-7xl"></i>
    }
    if(el==="wr")
    {
      return <i className="fas fa-chess-rook text-white text-7xl"></i>
    }
    if(el==="wq")
    {
      return <i className="fas fa-chess-queen text-white text-7xl"></i>
    }
    if(el==="wk")
    {
      return <i className="fas fa-chess-king text-white text-7xl"></i>
    }

  if(el==="bp")
  {
    return <i className="fas fa-chess-pawn text-black text-7xl"></i>
  }
  if(el==="bkn")
  {
    return <i className="fas fa-chess-knight text-black text-7xl"></i>
  }
  if(el==="bb")
  {
    return <i className="fas fa-chess-bishop text-black text-7xl"></i>
  }
  if(el==="br")
  {
    return <i className="fas fa-chess-rook text-black text-7xl"></i>
  }
  if(el==="bq")
  {
    return <i className="fas fa-chess-queen text-black text-7xl"></i>
  }
  if(el==="bk")
  {
    return <i className="fas fa-chess-king text-black text-7xl"></i>
  }
}
const getColor=(chessTable,x,y)=>
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


const blackPawn=(chessTable,clickedx,clickedy)=>
  {
    let position=[];
    let turn=getColor(chessTable,clickedx,clickedy);
    if(chessTable[clickedy+1][clickedx]==="")
    {
      position.push({y:clickedy+1,x:clickedx});
      if((chessTable[clickedy+2][clickedx]==="")&&(clickedy===1))
      {
        position.push({y:clickedy+2,x:clickedx})
      }
    }
    if(clickedx<7)
    {
      if((getColor(chessTable,clickedx+1,clickedy+1)!==turn)&&(getColor(chessTable,clickedx+1,clickedy+1)!=="empty"))
      {
        position.push({y:clickedy+1,x:clickedx+1});
      }
    }
    if(clickedx>0)
    {
      if((getColor(chessTable,clickedx-1,clickedy+1)!==turn)&&(getColor(chessTable,clickedx-1,clickedy+1)!=="empty"))
      {
        position.push({y:clickedy+1,x:clickedx-1});
      }
    }
    return position;
  }
  const whitePawn=(chessTable,clickedx,clickedy)=>
  {
    let position=[];
    let turn=getColor(chessTable,clickedx,clickedy);
    if(chessTable[clickedy-1][clickedx]==="")
    {
      position.push({y:clickedy-1,x:clickedx});
      if((chessTable[clickedy-2][clickedx]==="")&&(clickedy===6))
      {
        position.push({y:clickedy-2,x:clickedx})
      }
    }
    if((clickedx)<7)
    {
      if((getColor(chessTable,clickedx+1,clickedy-1)!==turn)&&(getColor(chessTable,clickedx+1,clickedy-1)!=="empty"))
      {
        position.push({y:clickedy-1,x:clickedx+1});
      }
    }
    if((clickedx)>0)
    {
      if((getColor(chessTable,clickedx-1,clickedy-1)!==turn)&&(getColor(chessTable,clickedx-1,clickedy-1)!=="empty"))
      {
        position.push({y:clickedy-1,x:clickedx-1});
      }
    }
    return position;
  }
  const bishop=(chessTable,clickedx,clickedy)=>
  {
    let position=[];
    let turn=getColor(chessTable,clickedx,clickedy);
    for(let i=1;((clickedx+i)<8)&&((clickedy+i)<8);i=i+1)
    {
      if(chessTable[clickedy+i][clickedx+i]==="")
      {
        position.push({y:clickedy+i,x:clickedx+i});
      }
      else if(getColor(chessTable,clickedx+i,clickedy+i)!==turn)
      {
        position.push({y:clickedy+i,x:clickedx+i});
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
        position.push({y:clickedy-i,x:clickedx+i});
      }
      else if(getColor(chessTable,clickedx+i,clickedy-i)!==turn)
      {
        position.push({y:clickedy-i,x:clickedx+i});
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
        position.push({y:clickedy-i,x:clickedx-i});
      }
      else if(getColor(chessTable,clickedx-i,clickedy-i)!==turn)
      {
        position.push({y:clickedy-i,x:clickedx-i});
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
        position.push({y:clickedy+i,x:clickedx-i});
      }
      else if(getColor(chessTable,clickedx-i,clickedy+i)!==turn)
      {
        position.push({x:clickedy+i,y:clickedx-i});
        break;
      }
      else
      {
        break;
      }
    }
    return position;
  }
  const rook=(chessTable,clickedx,clickedy)=>
  {
    let position=[];
    //console.log("rook")
    //console.log(chessTable);
    //console.log(clickedx+","+clickedy);
    //console.log(getColor(chessTable,clickedx,clickedy))
    let turn=getColor(chessTable,clickedx,clickedy)
    for(let i=1;(clickedx-i)>-1;i=i+1)
    {
      if(chessTable[clickedy][clickedx-i]==="")
      {
        position.push({x:clickedy,y:clickedx-i});
      }
      else if(getColor(chessTable,clickedx-i,clickedy)!==turn)
      {
        position.push({x:clickedy,y:clickedx-i});
        break;
      }
      else
      {
        break;
      }
    }
    for(let i=1;(clickedx+i)<8;i=i+1)
    {
      //console.log("inside")
      //console.log(chessTable);
      //console.log(clickedy+","+(t))
      //console.log(chessTable[clickedy][clickedx+i])
      //console.log(getColor(chessTable,clickedx+i,clickedy))
      if(chessTable[clickedy][clickedx+i]==="")
      {
        position.push({y:clickedy,x:clickedx+i});
      }
      else if(getColor(chessTable,clickedx+i,clickedy)!==turn)
      {
        position.push({y:clickedy,x:clickedx+i});
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
        position.push({y:clickedy+i,x:clickedx});
      }
      else if(getColor(chessTable,clickedx,clickedy+i)!==turn)
      {
        position.push({y:clickedy+i,x:clickedx});
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
        position.push({y:clickedy-i,x:clickedx});
      }
      else if(getColor(chessTable,clickedx,clickedy-i)!==turn)
      {
        position.push({y:clickedy-i,x:clickedx});
        break;
      }
      else
      {
        break;
      }
    }
    return position;
  }
  const knigth=(chessTable,clickedx,clickedy)=>
  {
    let position=[];
    let turn=getColor(chessTable,clickedx,clickedy);
    if(clickedx<6&&clickedy<7)
    {
      if((chessTable[clickedy+1][clickedx+2]==="")||(getColor(chessTable,clickedx+2,clickedy+1)!==turn))
      {
        position.push({y:clickedy+1,x:clickedx+2});
      }
    }
    if(clickedx<6&&clickedy>0)
    {
      if((chessTable[clickedy-1][clickedx+2]==="")||(getColor(chessTable,clickedx+2,clickedy-1)!==turn))
      {
        position.push({y:clickedy-1,x:clickedx+2});
      }
    }
    if(clickedx>1&&clickedy>0)
    {
      if((chessTable[clickedy-1][clickedx-2]==="")||(getColor(chessTable,clickedx-2,clickedy-1)!==turn))
      {
        position.push({y:clickedy-1,x:clickedx-2});
      }
    }
    if(clickedx>1&&clickedy<7)
    {
      if((chessTable[clickedy+1][clickedx-2]==="")||(getColor(chessTable,clickedx-2,clickedy+1)!==turn))
      {
        position.push({y:clickedy+1,x:clickedx-2});
      }
    }
    if(clickedx<7&&clickedy<6)
    {
      if((chessTable[clickedy+2][clickedx+1]==="")||(getColor(chessTable,clickedx+1,clickedy+2)!==turn))
      {
        position.push({y:clickedy+2,x:clickedx+1});
      }
    }
    if(clickedx>0&&clickedy<6)
    {
      if((chessTable[clickedy+2][clickedx-1]==="")||(getColor(chessTable,clickedx-1,clickedy+2)!==turn))
      {
        position.push({y:clickedy+2,x:clickedx-1});
      }
    }
    if(clickedx>0&&clickedy>1)
    {
      if((chessTable[clickedy-2][clickedx-1]==="")||(getColor(chessTable,clickedx-1,clickedy-2)!==turn))
      {
        position.push({y:clickedy-2,x:clickedx-1});
      }
    }
    if(clickedx<7&&clickedy>1)
    {
      if((chessTable[clickedy-2][clickedx+1]==="")||(getColor(chessTable,clickedx+1,clickedy-2)!==turn))
      {
        position.push({y:clickedy-2,x:clickedx+1});
      }
    }
    return position;
  }
  
  const queen=(chessTable,clickedx,clickedy)=>
  {
    let position1=rook(chessTable,clickedx,clickedy);
    let position2=bishop(chessTable,clickedx,clickedy);
    return position1.concat(position2);
  }

  const king=(chessTable,clickedx,clickedy)=>
    {
      let position=[];
      let turn=getColor(chessTable,clickedx,clickedy);
    
    
      if(clickedx>0)
      {
        if((chessTable[clickedy][clickedx-1]==="")||(getColor(chessTable,clickedx-1,clickedy)!==turn))
        {
          position.push({y:clickedy,x:clickedx-1})
        }
        if(clickedy>0)
        {
          if((chessTable[clickedy-1][clickedx-1]==="")||(getColor(chessTable,clickedx-1,clickedy-1)!==turn))
          {
            position.push({y:clickedy-1,x:clickedx-1})
          }
        }
        if(clickedy<7)
        {
          if((chessTable[clickedy+1][clickedx-1]==="")||(getColor(chessTable,clickedx-1,clickedy+1)!==turn))
          {
            position.push({y:clickedy+1,x:clickedx-1})
          }
        }
      }
      if(clickedx<7)
      {
        if((chessTable[clickedy][clickedx+1]==="")||(getColor(chessTable,clickedx+1,clickedy)!==turn))
        {
          position.push({y:clickedy,x:clickedx+1})
        }
        if(clickedy>0)
        {
          if((chessTable[clickedy-1][clickedx+1]==="")||(getColor(chessTable,clickedx+1,clickedy-1)!==turn))
          {
            position.push({y:clickedy-1,x:clickedx+1})
          }
        }
        if(clickedy<7)
        {
          if((chessTable[clickedy+1][clickedx+1]==="")||(getColor(chessTable,clickedx+1,clickedy+1)!==turn))
          {
            position.push({y:clickedy+1,x:clickedx+1})
          }
        }
      }
      if(clickedy>0)
      {
        if((chessTable[clickedy-1][clickedx]==="")||(getColor(chessTable,clickedx,clickedy-1)!==turn))
        {
          position.push({y:clickedy-1,x:clickedx})
        }
      }
      if(clickedy<7)
      {
        if((chessTable[clickedy+1][clickedx]==="")||(getColor(chessTable,clickedx,clickedy+1)!==turn))
        {
          position.push({y:clickedy+1,x:clickedx})
        }
      }
      return position;
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
wk:king,
bk:king,
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
                return <div className="bg-white bg-opacity-25 text-black flex flex-row justify-around" style={{height:caseSize+"px"}}>{el===""? "empty":getPiece(el)}</div>
                //return "w";
            }
            //return "b";
            return <div className="bg-black text-white bg-opacity-25 flex flex-row justify-around" style={{height:caseSize+"px"}}>{el===""? "empty":getPiece(el)}</div>
        }
        const renderChessCase2=(el,index)=>
        {
            if((index%2)===0)
            {
                //return "b";
                return <div className="bg-black bg-opacity-25 text-white flex flex-row justify-around" style={{height:caseSize+"px"}}>{el===""? "empty":getPiece(el)}</div>
            }
            //return "w";
            return <div className="bg-white bg-opacity-25 text-black flex flex-row justify-around" style={{height:caseSize+"px"}}>{el===""? "empty":getPiece(el)}</div>
        }
        if((index%2)===0)
        {
            return renderChessCase1;
        }
        return renderChessCase2;
    }
    const kingInCheck=(chessTable,color)=>
      {
        let king=(color==="white" ? "w":"b")+"k"
        let kingPosition
        let enemyPieceColor=(color==="white" ? "b":"w")
        let enemyPiece=[]
        let checkPosition=[]
        for(let i=0; i<chessTable.length;i=i+1)
        {
          for(let j=0; j<chessTable[i].length;j=j+1)
          {
            if(chessTable[i][j]===king)
            {
              kingPosition={y:i,x:j}
            }
            if(chessTable[i][j].match("^"+enemyPieceColor)!==null)
            {
              enemyPiece.push({y:i,x:j});
            }
          }
        }
        for(let i in enemyPiece)
        {
          //console.log(chessTable[enemyPiece[i].y][enemyPiece[i].x])
          //console.log(whereCanItMove[chessTable[enemyPiece[i].y][enemyPiece[i].x]](chessTable,enemyPiece[i].x,enemyPiece[i].y))
          checkPosition=checkPosition.concat(whereCanItMove[chessTable[enemyPiece[i].y][enemyPiece[i].x]](chessTable,enemyPiece[i].x,enemyPiece[i].y))
        }
        for(let i in checkPosition)
        {
          //console.log("("+kingPosition.x+","+kingPosition.y+")")
          //console.log("("+checkPosition[i].x+","+checkPosition[i].y+")")
          if((kingPosition.x===checkPosition[i].x)&&(kingPosition.y===checkPosition[i].y))
          {
            return true;
          }
        }
        return false;
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
      let color=getColor(chessTable,x,y);
      let canmove=false;
      let position=whereCanItMove[chessTable[clickedy][clickedx]](chessTable,clickedx,clickedy);
      for(let i in position)
      {
        if((position[i].x===x)&&(position[i].y===y))
        {
          canmove=true;
          break
        }
      }
      //move(clikedx,clickedy,x,y)
      //console.log("whereCanItMove")
      //console.log(whereCanItMove[chessTable[clickedy][clickedx]](chessTable,clickedx,clickedy))
      if(canmove)
      {
        let ct=JSON.parse(JSON.stringify(chessTable))
        ct[y][x]=chessTable[clickedy][clickedx];
        ct[clickedy][clickedx]="";
        console.log(kingInCheck(ct,turn));
        if(!kingInCheck(ct,turn))
        {
          setChessTable(ct);
          turn === "white" ? setTurn("black"):setTurn("white");
        }
        console.log(kingInCheck(ct,turn));
      }
      /*if(chessTable[y][x]=="")
      {
      }*/
      //turn === "white" ? setTurn("black"):setTurn("white")
      //console.log(turn);
    }
    else if(chessTable[y][x]!=="")
    {
      console.log(turn)
      console.log(whereCanItMove[chessTable[y][x]](chessTable,x,y))
      let color=getColor(chessTable,x,y)
      if(color===turn)
      {
        setClicked(true);
        setClickedx(x);
        setClickedy(y);
        //console.log({clicked:clicked,color:color});
      }
    }
    //console.log({x:x,y:y,caseSize:caseSize,clicked:clicked,clickedx:clickedx,clickedy:clickedy,handw:handw});
  }

    //console.log(renderChessTable(chessTable))
  return (
    <div className="grid grid-cols-8 gap-0 bg-sky-500 bg-opacity-25" style={s} onClick={handleClick}>
        {renderChessTable(chessTable)}
    </div>
  );
}