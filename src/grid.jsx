import { useState } from "react"
import Card from "./card";
import './grid.css'
import iswinner from "./helper_func";

function grid({numberOfCards}){
          let [boards,setboards]=useState(Array(numberOfCards).fill(""));
          let [winner,setwinnner]=useState('');
          let [turn,setturn]=useState(true);
          let [count,setcount]=useState(1);
          let [draw,setdraw]=useState(false);
          function play(index){
                    if(turn){
                      boards[index]="O";
                    }
                    else{
                              boards[index]="X";
                    }
                    setboards([...boards]);
                    let p;
                    if(iswinner(boards)){
                               p=iswinner(boards)
                              setwinnner(p);
                    }
                    
                    //setdraw
                    setcount(count+1);
                    if(count==9){
                    setdraw(true);
                    }
                    setturn(!turn);         
          }

          function resetval(){
                    setturn(true);
                    setboards(Array(numberOfCards).fill(""));
                    setwinnner('')
                    setdraw(false);
                    setcount(1);
          }

          return (
                    <>
                    {draw && !winner&& (<> 
                    <div className="draw">match is drawn</div>
                    <button className="reset" onClick={()=>resetval()}>reset</button>
                    </>
                    )
                    }

                    {winner&&(
                    <>
                    <div className="winner">winner is: {winner}</div> 
                    <button className="reset" onClick={()=>resetval()}>reset</button>
                    </>
                    )
                    }

                     <div className="turn">turn is of: {(turn)?'O':'X'}</div>
                  <div className="grid">
                    {boards.map((el,idx)=><Card key={idx} onplay={play} player={el} index={idx} winner={winner}/>)}
                  </div>
                    </>
                   
          )
}
export default grid