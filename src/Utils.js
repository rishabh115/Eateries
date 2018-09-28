
import {COLORS} from './Constants'

export const mapValToColor=(val)=>{
let value=Math.round(Number(val)*10.0);
console.log(value)
if(value>=0 && value<10)
  return COLORS[0];
else if(value>=10 && value<20)
  return COLORS[1];
else if(value>=20 && value<30)
  return COLORS[2];
else if(value>=30 && value<40)
  return COLORS[3];
else 
 return COLORS[4];       
}

