var blackrook = "&#9820;" ;    //1
var blackknight = "&#9822;";   //2
var blackbishop = "&#9821;";   //3
var blackqueen = "&#9819;";    //4
var blackking = "&#9818;";     //5
var blackpawn = "&#9923";      //6
var whiterook = "&#9814;" ;    //7
var whiteknight = "&#9816;";   //8
var whitebishop = "&#9815;";   //9
var whitequeen = "&#9813;";    //10
var whiteking = "&#9812;";     //11
var whitepawn = "&#9917";      //12
var blackcircle = "&#8729;";  
var gm = "game(this.id)";
var mv = "move(this.id)";
var moveflag = 0 ;
var movex = 0;
var movey = 0;
var moveno = 0;
var mode = 0;
var pieceflag = 0;

var start = document.getElementById('start');
var p1 = document.getElementById('p1');
var position = [[1,2,3,4,5,3,2,1],[6,6,6,6,6,6,6,6],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [12,12,12,12,12,12,12,12],[7,8,9,10,11,9,8,7]];
var i;
var j;
var k;
var type;

var willmove = [];

function positionno(i,j){
    if (position[i-1][j-1]==1){
        type = "&#9820;"
    }
    if (position[i-1][j-1]==2){
        type = "&#9822;"
    }if (position[i-1][j-1]==3){
        type = "&#9821;"
    }if (position[i-1][j-1]==4){
        type = "&#9819;"
    }if (position[i-1][j-1]==5){
        type = "&#9818;"
    }if (position[i-1][j-1]==6){
        type = "&#9823;"
    }if (position[i-1][j-1]==7){
        type = "&#9814;"
    }if (position[i-1][j-1]==8){
        type = "&#9816;"
    }if (position[i-1][j-1]==9){
        type = "&#9815;"
    }if (position[i-1][j-1]==10){
        type = "&#9813;"
    }if (position[i-1][j-1]==11){
        type = "&#9812;"
    }if (position[i-1][j-1]==12){
        type = "&#9817;"
    }
    if (position[i-1][j-1]==0){
        type = "";
    }
    return type ;
}


function begingame() {
    for(i=1;i<=8;i++){
        for(j=1;j<=8;j++){
            k= ((i-1)*8)+j;
            type = positionno(i,j);
            document.getElementById(k).innerHTML= type ;
            document.getElementById(k).style.cursor= "pointer";
        }

    }
    moveflag = 0 ;
    position = [[1,2,3,4,5,3,2,1],[6,6,6,6,6,6,6,6],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [12,12,12,12,12,12,12,12],[7,8,9,10,11,9,8,7]];
    
}

function game(no){
    if(moveflag){
        return;
    }
 
    idnum = parseInt(no);
    var y = parseInt((idnum-1) % 8);
    var x = parseInt((idnum-1) / 8);
    var pieceno = position[x][y];
   // alert(position);
   if (pieceno==6){
        var iseven= (x+y)%2 ;
        if(iseven){
            document.getElementsByTagName("div")[idnum+8].setAttribute("class","blackr"); 
            document.getElementsByTagName("div")[idnum+8].setAttribute("onclick",mv);  
            willmove[idnum+8]= 1;
            if(x==1){
                document.getElementsByTagName("div")[idnum+16].setAttribute("class","whiter");
                document.getElementsByTagName("div")[idnum+16].setAttribute("onclick",mv);
                willmove[idnum+16]= 1;
            }

        }   
        if(!iseven){
            document.getElementsByTagName("div")[idnum+8].setAttribute("class","whiter"); 
            document.getElementsByTagName("div")[idnum+8].setAttribute("onclick",mv);  
            willmove[idnum+8]= 1;
            if(x==1){
                document.getElementsByTagName("div")[idnum+16].setAttribute("class","blackr");
                document.getElementsByTagName("div")[idnum+16].setAttribute("onclick",mv);
                willmove[idnum+16]= 1;
            }

        }
        if(willmove[idnum+8]||willmove[idnum+16]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
        
    }
    if (pieceno==3){
        // down 
        for(i=x+1,j=y+1;i<=7&&j<=7;i++,j++){
            var iseven=(i+j)%2;
            if(position[i][j]==0 || position[i][j]>=7){
                var posno = (i*8)+j+1
                if(iseven){
                    document.getElementsByTagName("div")[posno].setAttribute("class","blackr"); 
                    document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                }
                else{
                    document.getElementsByTagName("div")[posno].setAttribute("class","whiter"); 
                    document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                }
                willmove[posno]=1;
            }
            if(position[i][j]>0){
                break;
            }
        }    

      // up

        for(i=x-1,j=y+1;i>=0&&j<=7;i--,j++){
            var iseven=(i+j)%2;
            if(position[i][j]==0 || position[i][j]>=7){
                var posno = (i*8)+j+1
                if(iseven){
                    document.getElementsByTagName("div")[posno].setAttribute("class","blackr"); 
                    document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                }
                else{
                    document.getElementsByTagName("div")[posno].setAttribute("class","whiter"); 
                    document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                }
                willmove[posno]=1;
            }
            if(position[i][j]>0){
                break;
            }    
        }

                // right
                for(i=x-1,j=y-1;i>=0&&j>=0;j--,i--){
                    var iseven=(i+j)%2;
                    if(position[i][j]==0 || position[i][j]>=7){
                        var posno = (i*8)+j+1
                        if(iseven){
                            document.getElementsByTagName("div")[posno].setAttribute("class","blackr"); 
                            document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                        }
                        else{
                            document.getElementsByTagName("div")[posno].setAttribute("class","whiter"); 
                            document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                        }
                        willmove[posno]=1;
                    }
                    if(position[i][j]>0){
                        break;
                    }
                }    
        
              // up
        
                for(i=x+1,j=y-1;i<=7&&j>=0;i++,j--){
                    var iseven=(i+j)%2;
                    if(position[i][j]==0 || position[i][j]>=7){
                        var posno = (i*8)+j+1
                        if(iseven){
                            document.getElementsByTagName("div")[posno].setAttribute("class","blackr"); 
                            document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                        }
                        else{
                            document.getElementsByTagName("div")[posno].setAttribute("class","whiter"); 
                            document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                        }
                        willmove[posno]=1;
                    }
                    if(position[i][j]>0){
                        break;
                    }    
                }
//        alert (i);
        if(willmove[idnum+7]||willmove[idnum-7]||willmove[idnum+9]||willmove[idnum-9]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
    }
    if (pieceno==1){
        // down 
        for(i=x+1,j=y;i<=7;i++){
            var iseven=(i+j)%2;
            if(position[i][j]==0 || position[i][j]>=7){
                var posno = (i*8)+j+1
                if(iseven){
                    document.getElementsByTagName("div")[posno].setAttribute("class","blackr"); 
                    document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                }
                else{
                    document.getElementsByTagName("div")[posno].setAttribute("class","whiter"); 
                    document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                }
                willmove[posno]=1;
            }
            if(position[i][j]>0){
                break;
            }
        }    

      // up

        for(i=x-1,j=y;i>=0;i--){
            var iseven=(i+j)%2;
            if(position[i][j]==0 || position[i][j]>=7){
                var posno = (i*8)+j+1
                if(iseven){
                    document.getElementsByTagName("div")[posno].setAttribute("class","blackr"); 
                    document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                }
                else{
                    document.getElementsByTagName("div")[posno].setAttribute("class","whiter"); 
                    document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                }
                willmove[posno]=1;
            }
            if(position[i][j]>0){
                break;
            }    
        }

                // right
                for(i=x,j=y+1;j<=7;j++){
                    var iseven=(i+j)%2;
                    if(position[i][j]==0 || position[i][j]>=7){
                        var posno = (i*8)+j+1
                        if(iseven){
                            document.getElementsByTagName("div")[posno].setAttribute("class","blackr"); 
                            document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                        }
                        else{
                            document.getElementsByTagName("div")[posno].setAttribute("class","whiter"); 
                            document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                        }
                        willmove[posno]=1;
                    }
                    if(position[i][j]>0){
                        break;
                    }
                }    
        
              // up
        
                for(i=x,j=y-1;j>=0;j--){
                    var iseven=(i+j)%2;
                    if(position[i][j]==0 || position[i][j]>=7){
                        var posno = (i*8)+j+1
                        if(iseven){
                            document.getElementsByTagName("div")[posno].setAttribute("class","blackr"); 
                            document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                        }
                        else{
                            document.getElementsByTagName("div")[posno].setAttribute("class","whiter"); 
                            document.getElementsByTagName("div")[posno].setAttribute("onclick",mv); 
                        }
                        willmove[posno]=1;
                    }
                    if(position[i][j]>0){
                        break;
                    }    
                }
//        alert (willmove);
        if(willmove[idnum+1]||willmove[idnum-1]||willmove[idnum+8]||willmove[idnum-8]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
    }
   
} 

function move(no){
 
    if(!moveflag){
        return;
    }
    idnum = parseInt(no);
    var y = parseInt((idnum-1) % 8);
    var x = parseInt((idnum-1) / 8);
    if (willmove[no]){
        for (i=1;i<=64;i++){
            if(willmove[i]){
                var a = parseInt((i-1) % 8);
                var b = parseInt((i-1) / 8);
                var iseven = (a+b)%2;
                if(iseven){
                    document.getElementsByTagName("div")[i].setAttribute("class","black");
                }
                else {
                    document.getElementsByTagName("div")[i].setAttribute("class","white");
                }
                willmove[i]=0;
                document.getElementsByTagName("div")[i].setAttribute("onclick",gm);
            }
        }
        position[x][y]=position[movex][movey];    
        document.getElementById(moveno).innerHTML = "";
        var finaltype = positionno(movex+1,movey+1);
        document.getElementById(no).innerHTML = finaltype;
        moveflag=0;
        position[movex][movey]=0;
    }
  //alert (position);

}