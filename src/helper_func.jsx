function iswinner(boards){
          if(boards[0]==boards[1] && boards[1]==boards[2]){
                    return boards[0];
          }
          else if(boards[3]==boards[4] && boards[4]==boards[5]){
                    return boards[3];
          }
          else if(boards[6]==boards[7] && boards[7]==boards[8]){
                    return boards[6];
          }
          else if(boards[0]==boards[3] && boards[3]==boards[6]){
                    return boards[0];
          }
          else if(boards[1]==boards[4] && boards[4]==boards[7]){
                    return boards[1];
          }
          else if(boards[2]==boards[5] && boards[5]==boards[8]){
                    return boards[2];
          }
          else if(boards[0]==boards[4] && boards[4]==boards[8]){
                    return boards[0];
          }
          else if(boards[2]==boards[4] && boards[4]==boards[6]){
                    return boards[2];
          }
}
export default iswinner