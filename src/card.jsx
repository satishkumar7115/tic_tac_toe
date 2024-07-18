import Icon from "./icon";
import './card.css'
function Card({onplay,player,index,winner}){
let icon=<Icon/>
if(player==='X'){
          icon=<Icon name='X'/>
}
else if(player==='O'){
          icon=<Icon name='O'/>
}
          return (
                    <div className="card" onClick={()=> !winner && player=="" && onplay(index)}>{icon}</div>
          )
}


export default Card
