import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function Icon({name}){
if(name=='O'){
          return <FaRegCircle />     
}
else if(name=="X"){
          return <FaTimes/>
}
else{
          return <FaPen/>
}
}

export default Icon