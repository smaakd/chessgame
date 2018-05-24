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
var whosmove = 0;

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

function rookmove(x,y){       
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
    
}
function wrookmove(x,y){       
    for(i=x+1,j=y;i<=7;i++){
        var iseven=(i+j)%2;
        if( position[i][j]<7){
            var posno = (i*8)+j+1;
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
        if( position[i][j]<7){
            var posno = (i*8)+j+1;
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
        if( position[i][j]<7){
            var posno = (i*8)+j+1;
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
        if( position[i][j]<7){
            var posno = (i*8)+j+1;
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
    
}

function bishopmove(x,y){
    for(i=x+1,j=y+1;i<=7&&j<=7;i++,j++){
        var iseven=(i+j)%2;
        if(position[i][j]==0 || position[i][j]>=7){
            var posno = (i*8)+j+1;
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
            var posno = (i*8)+j+1;
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
                    var posno = (i*8)+j+1;
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
                    var posno = (i*8)+j+1;
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
}
function wbishopmove(x,y){
    for(i=x+1,j=y+1;i<=7&&j<=7;i++,j++){
        var iseven=(i+j)%2;
        if( position[i][j]<7){
            var posno = (i*8)+j+1;
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
        if(position[i][j]<7){
            var posno = (i*8)+j+1;
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
                if(position[i][j]<7){
                    var posno = (i*8)+j+1;
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
                if(position[i][j]<7){
                    var posno = (i*8)+j+1;
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
}



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
        moveflag=0;
        return;
    }
 
    idnum = parseInt(no);
    var y = parseInt((idnum-1) % 8);
    var x = parseInt((idnum-1) / 8);
    var pieceno = position[x][y];
   // alert(position);
   if(whosmove){
        if (pieceno==6){
             var iseven= (x+y)%2 ;
             if(position[x+1][y]==0){
                 if(iseven){
                     document.getElementsByTagName("div")[idnum+8].setAttribute("class","blackr"); 
                     document.getElementsByTagName("div")[idnum+8].setAttribute("onclick",mv);  
                     willmove[idnum+8]= 1;
                     if(x==1&&position[x+2][y]==0){
                         document.getElementsByTagName("div")[idnum+16].setAttribute("class","whiter");
                         document.getElementsByTagName("div")[idnum+16].setAttribute("onclick",mv);
                         willmove[idnum+16]= 1;
                     }
                 }   
                 if(!iseven){
                     document.getElementsByTagName("div")[idnum+8].setAttribute("class","whiter"); 
                     document.getElementsByTagName("div")[idnum+8].setAttribute("onclick",mv);  
                     willmove[idnum+8]= 1;
                     if(x==1&&position[x+2][y]==0){
                         document.getElementsByTagName("div")[idnum+16].setAttribute("class","blackr");
                         document.getElementsByTagName("div")[idnum+16].setAttribute("onclick",mv);
                         willmove[idnum+16]= 1;
                     }
                 
                 }
             }
             if(iseven){
                 if(y-1>=0&&position[x+1][y-1]>=7){
                     document.getElementsByTagName("div")[idnum+7].setAttribute("class","blackr"); 
                     document.getElementsByTagName("div")[idnum+7].setAttribute("onclick",mv);  
                     willmove[idnum+7]= 1;
                 }
                 if(y+1<=7&&position[x+1][y+1]>=7){
                     document.getElementsByTagName("div")[idnum+9].setAttribute("class","blackr"); 
                     document.getElementsByTagName("div")[idnum+9].setAttribute("onclick",mv);  
                     willmove[idnum+9]= 1;
                 }
             }
             if(!iseven){
                 if(y-1>=0&&position[x+1][y-1]>=7){
                     document.getElementsByTagName("div")[idnum+7].setAttribute("class","whiter"); 
                     document.getElementsByTagName("div")[idnum+7].setAttribute("onclick",mv);  
                     willmove[idnum+7]= 1;
                 }
                 if(y+1<=7&&position[x+1][y+1]>=7){
                     document.getElementsByTagName("div")[idnum+9].setAttribute("class","whiter"); 
                     document.getElementsByTagName("div")[idnum+9].setAttribute("onclick",mv);  
                     willmove[idnum+9]= 1;
                 }
             }
         
             if(willmove[idnum+8]||willmove[idnum+16]||willmove[idnum+7]||willmove[idnum+9]){
                 moveflag = 1 ;
             }
             movex = x;
             movey = y;
             moveno = no;

         }
         if (pieceno==3){
        bishopmove(x,y);
        if(willmove[idnum+7]||willmove[idnum-7]||willmove[idnum+9]||willmove[idnum-9]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
         }
         if (pieceno==1){
        rookmove(x,y);

        if(willmove[idnum+1]||willmove[idnum-1]||willmove[idnum+8]||willmove[idnum-8]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
         }
         if (pieceno==4){
        bishopmove(x,y);
        rookmove(x,y);
        if(willmove[idnum+1]||willmove[idnum-1]||willmove[idnum+8]||willmove[idnum-8]||willmove[idnum+7]||willmove[idnum-7]||willmove[idnum+9]||willmove[idnum-9]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
         }
         if (pieceno==5){
        var iseven= (x+y)%2 ;

        if (iseven){
            if(x+1<=7&&(position[x+1][y]==0 || position[x+1][y]>=7)){
                document.getElementsByTagName("div")[idnum+8].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+8].setAttribute("onclick",mv);  
                willmove[idnum+8]= 1;

            }
            ;
            if(x+1<=7&&y-1>=0&&(position[x+1][y-1]==0 || position[x+1][y-1]>=7)){
                document.getElementsByTagName("div")[idnum+7].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+7].setAttribute("onclick",mv);  
                willmove[idnum+7]= 1;

            }
            if(x+1<=7&&y+1<=7&&(position[x+1][y+1]==0 || position[x+1][y+1]>=7)){
                document.getElementsByTagName("div")[idnum+9].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+9].setAttribute("onclick",mv);  
                willmove[idnum+9]= 1;

            }
           if(y-1>=0&&(position[x][y-1]==0 || position[x][y-1]>=7)){
                document.getElementsByTagName("div")[idnum-1].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-1].setAttribute("onclick",mv);  
                willmove[idnum-1]= 1;
            }
            if(y+1<=7&&(position[x][y+1]==0 || position[x][y+1]>=7)){
                document.getElementsByTagName("div")[idnum+1].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+1].setAttribute("onclick",mv);  
                willmove[idnum+1]= 1;
            }
            if(x-1>=0&&y-1>=0&&(position[x-1][y-1]==0 || position[x-1][y-1]>=7)){
                document.getElementsByTagName("div")[idnum-9].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-9].setAttribute("onclick",mv);  
                willmove[idnum-9]= 1;
            }
            if(y+1<=7&&x-1>=0&&(position[x-1][y+1]==0 || position[x-1][y+1]>=7)){
                document.getElementsByTagName("div")[idnum-7].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-7].setAttribute("onclick",mv);  
                willmove[idnum-7]= 1;
            }
            if(x-1>=0&&(position[x-1][y]==0 || position[x-1][y]>=7)){
                document.getElementsByTagName("div")[idnum-8].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-8].setAttribute("onclick",mv);  
                willmove[idnum-8]= 1;
            } 
        }
        if(!iseven){
            if(x+1<=7&&(position[x+1][y]==0 || position[x+1][y]>=7)){
                document.getElementsByTagName("div")[idnum+8].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+8].setAttribute("onclick",mv);  
                willmove[idnum+8]= 1;

            }
            
            if(x+1<=7&&y-1>=0&&(position[x+1][y-1]==0 || position[x+1][y-1]>=7)){
                document.getElementsByTagName("div")[idnum+7].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+7].setAttribute("onclick",mv);  
                willmove[idnum+7]= 1;

            }
            if(x+1<=7&&y+1<=7&&(position[x+1][y+1]==0 || position[x+1][y+1]>=7)){
                document.getElementsByTagName("div")[idnum+9].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+9].setAttribute("onclick",mv);  
                willmove[idnum+9]= 1;

            }
            if(y-1>=0&&(position[x][y-1]==0 || position[x][y-1]>=7)){
                document.getElementsByTagName("div")[idnum-1].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-1].setAttribute("onclick",mv);  
                willmove[idnum-1]= 1;
            }
            if(y+1<=7&&(position[x][y+1]==0 || position[x][y+1]>=7)){
                document.getElementsByTagName("div")[idnum+1].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+1].setAttribute("onclick",mv);  
                willmove[idnum+1]= 1;
            }
            if(x-1>=0&&y-1>=0&&(position[x-1][y-1]==0 || position[x-1][y-1]>=7)){
                document.getElementsByTagName("div")[idnum-9].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-9].setAttribute("onclick",mv);  
                willmove[idnum-9]= 1;
            }
            if(y+1<=7&&x-1>=0&&(position[x-1][y+1]==0 || position[x-1][y+1]>=7)){
                document.getElementsByTagName("div")[idnum-7].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-7].setAttribute("onclick",mv);  
                willmove[idnum-7]= 1;
            }
            if(x-1>=0&&(position[x-1][y]==0 || position[x-1][y]>=7)){
                document.getElementsByTagName("div")[idnum-8].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-8].setAttribute("onclick",mv);  
                willmove[idnum-8]= 1;
            } 
        }
        if(willmove[idnum+1]||willmove[idnum-1]||willmove[idnum+8]||willmove[idnum-8]||willmove[idnum+7]||willmove[idnum-7]||willmove[idnum+9]||willmove[idnum-9]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
         }
         if (pieceno==2){
        var iseven= (x+y)%2 ;
        if(iseven){
            if(x+2<=7&&y+1<=7&&(position[x+2][y+1]==0 || position[x+2][y+1]>=7)){
                document.getElementsByTagName("div")[idnum+17].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+17].setAttribute("onclick",mv);  
                willmove[idnum+17]= 1;
             }
             if(x+2<=7&&y-1>=0&&(position[x+2][y-1]==0 || position[x+2][y-1]>=7)){
                document.getElementsByTagName("div")[idnum+15].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+15].setAttribute("onclick",mv);  
                willmove[idnum+15]= 1;
             }
             if(x+1<=7&&y+2<=7&&(position[x+1][y+2]==0 || position[x+1][y+2]>=7)){
                document.getElementsByTagName("div")[idnum+10].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+10].setAttribute("onclick",mv);  
                willmove[idnum+10]= 1;
             }
             if(x+1<=7&&y-2>=0&&(position[x+1][y-2]==0 || position[x+1][y-2]>=7)){
                document.getElementsByTagName("div")[idnum+6].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+6].setAttribute("onclick",mv);  
                willmove[idnum+6]= 1;
             }
             if(x-2>=0&&y+1<=7&&(position[x-2][y+1]==0 || position[x-2][y+1]>=7)){
                document.getElementsByTagName("div")[idnum-15].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-15].setAttribute("onclick",mv);  
                willmove[idnum-15]= 1;
             }
             if(x-2>=0&&y-1>=0&&(position[x-2][y-1]==0 || position[x-2][y-1]>=7)){
                document.getElementsByTagName("div")[idnum-17].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-17].setAttribute("onclick",mv);  
                willmove[idnum-17]= 1;
             }
             if(x-1>=0&&y+2<=7&&(position[x-1][y+2]==0 || position[x-1][y+2]>=7)){
                document.getElementsByTagName("div")[idnum-6].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-6].setAttribute("onclick",mv);  
                willmove[idnum-6]= 1;
             }
             if(x-1>=0&&y-2>=0&&(position[x-1][y-2]==0 || position[x-1][y-2]>=7)){
                document.getElementsByTagName("div")[idnum-10].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-10].setAttribute("onclick",mv);  
                willmove[idnum-10]= 1;
             }

        }
        if(!iseven){
            if(x+2<=7&&y+1<=7&&(position[x+2][y+1]==0 || position[x+2][y+1]>=7)){
                document.getElementsByTagName("div")[idnum+17].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+17].setAttribute("onclick",mv);  
                willmove[idnum+17]= 1;
             }
             if(x+2<=7&&y-1>=0&&(position[x+2][y-1]==0 || position[x+2][y-1]>=7)){
                document.getElementsByTagName("div")[idnum+15].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+15].setAttribute("onclick",mv);  
                willmove[idnum+15]= 1;
             }
             if(x+1<=7&&y+2<=7&&(position[x+1][y+2]==0 || position[x+1][y+2]>=7)){
                document.getElementsByTagName("div")[idnum+10].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+10].setAttribute("onclick",mv);  
                willmove[idnum+10]= 1;
             }
             if(x+1<=7&&y-2>=0&&(position[x+1][y-2]==0 || position[x+1][y-2]>=7)){
                document.getElementsByTagName("div")[idnum+6].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+6].setAttribute("onclick",mv);  
                willmove[idnum+6]= 1;
             }
             if(x-2>=0&&y+1<=7&&(position[x-2][y+1]==0 || position[x-2][y+1]>=7)){
                document.getElementsByTagName("div")[idnum-15].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-15].setAttribute("onclick",mv);  
                willmove[idnum-15]= 1;
             }
             if(x-2>=0&&y-1>=0&&(position[x-2][y-1]==0 || position[x-2][y-1]>=7)){
                document.getElementsByTagName("div")[idnum-17].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-17].setAttribute("onclick",mv);  
                willmove[idnum-17]= 1;
             }
             if(x-1>=0&&y+2<=7&&(position[x-1][y+2]==0 || position[x-1][y+2]>=7)){
                document.getElementsByTagName("div")[idnum-6].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-6].setAttribute("onclick",mv);  
                willmove[idnum-6]= 1;
             }
             if(x-1>=0&&y-2>=0&&(position[x-1][y-2]==0 || position[x-1][y-2]>=7)){
                document.getElementsByTagName("div")[idnum-10].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-10].setAttribute("onclick",mv);  
                willmove[idnum-10]= 1;
             }

        }
        if(willmove[idnum+10]||willmove[idnum-10]||willmove[idnum+6]||willmove[idnum-6]||willmove[idnum+17]||willmove[idnum-17]||willmove[idnum+15]||willmove[idnum-15]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
         }
    }
    if(!whosmove){
        if (pieceno==9){
        wbishopmove(x,y);
        if(willmove[idnum+7]||willmove[idnum-7]||willmove[idnum+9]||willmove[idnum-9]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
        }
        if (pieceno==7){
        wrookmove(x,y);

        if(willmove[idnum+1]||willmove[idnum-1]||willmove[idnum+8]||willmove[idnum-8]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
        }
        if (pieceno==10){
        wbishopmove(x,y);
        wrookmove(x,y);
        if(willmove[idnum+1]||willmove[idnum-1]||willmove[idnum+8]||willmove[idnum-8]||willmove[idnum+7]||willmove[idnum-7]||willmove[idnum+9]||willmove[idnum-9]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
        }
        if (pieceno==11){
        var iseven= (x+y)%2 ;

        if (iseven){
            if(x+1<=7&&(position[x+1][y]<7)){
                document.getElementsByTagName("div")[idnum+8].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+8].setAttribute("onclick",mv);  
                willmove[idnum+8]= 1;

            }
            ;
            if(x+1<=7&&y-1>=0&&(position[x+1][y-1]<7)){
                document.getElementsByTagName("div")[idnum+7].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+7].setAttribute("onclick",mv);  
                willmove[idnum+7]= 1;

            }
            if(x+1<=7&&y+1<=7&&(position[x+1][y+1]<7)){
                document.getElementsByTagName("div")[idnum+9].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+9].setAttribute("onclick",mv);  
                willmove[idnum+9]= 1;

            }
           if(y-1>=0&&(position[x][y-1]<7)){
                document.getElementsByTagName("div")[idnum-1].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-1].setAttribute("onclick",mv);  
                willmove[idnum-1]= 1;
            }
            if(y+1<=7&&(position[x][y+1]<7)){
                document.getElementsByTagName("div")[idnum+1].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+1].setAttribute("onclick",mv);  
                willmove[idnum+1]= 1;
            }
            if(x-1>=0&&y-1>=0&&(position[x-1][y-1]<7)){
                document.getElementsByTagName("div")[idnum-9].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-9].setAttribute("onclick",mv);  
                willmove[idnum-9]= 1;
            }
            if(y+1<=7&&x-1>=0&&(position[x-1][y+1]<7)){
                document.getElementsByTagName("div")[idnum-7].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-7].setAttribute("onclick",mv);  
                willmove[idnum-7]= 1;
            }
            if(x-1>=0&&(position[x-1][y]<7)){
                document.getElementsByTagName("div")[idnum-8].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-8].setAttribute("onclick",mv);  
                willmove[idnum-8]= 1;
            } 
        }
        if(!iseven){
            if(x+1<=7&&(position[x+1][y]<7)){
                document.getElementsByTagName("div")[idnum+8].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+8].setAttribute("onclick",mv);  
                willmove[idnum+8]= 1;

            }
            
            if(x+1<=7&&y-1>=0&&(position[x+1][y-1]<7)){
                document.getElementsByTagName("div")[idnum+7].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+7].setAttribute("onclick",mv);  
                willmove[idnum+7]= 1;

            }
            if(x+1<=7&&y+1<=7&&(position[x+1][y+1]<7)){
                document.getElementsByTagName("div")[idnum+9].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+9].setAttribute("onclick",mv);  
                willmove[idnum+9]= 1;

            }
            if(y-1>=0&&(position[x][y-1]<7)){
                document.getElementsByTagName("div")[idnum-1].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-1].setAttribute("onclick",mv);  
                willmove[idnum-1]= 1;
            }
            if(y+1<=7&&(position[x][y+1]<=7)){
                document.getElementsByTagName("div")[idnum+1].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+1].setAttribute("onclick",mv);  
                willmove[idnum+1]= 1;
            }
            if(x-1>=0&&y-1>=0&&(position[x-1][y-1]<7)){
                document.getElementsByTagName("div")[idnum-9].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-9].setAttribute("onclick",mv);  
                willmove[idnum-9]= 1;
            }
            if(y+1<=7&&x-1>=0&&(position[x-1][y+1]<7)){
                document.getElementsByTagName("div")[idnum-7].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-7].setAttribute("onclick",mv);  
                willmove[idnum-7]= 1;
            }
            if(x-1>=0&&(position[x-1][y]<7)){
                document.getElementsByTagName("div")[idnum-8].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-8].setAttribute("onclick",mv);  
                willmove[idnum-8]= 1;
            } 
        }
        if(willmove[idnum+1]||willmove[idnum-1]||willmove[idnum+8]||willmove[idnum-8]||willmove[idnum+7]||willmove[idnum-7]||willmove[idnum+9]||willmove[idnum-9]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
        }
        if (pieceno==8){
        var iseven= (x+y)%2 ;
        if(iseven){
            if(x+2<=7&&y+1<=7&&(position[x+2][y+1]<7)){
                document.getElementsByTagName("div")[idnum+17].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+17].setAttribute("onclick",mv);  
                willmove[idnum+17]= 1;
             }
             if(x+2<=7&&y-1>=0&&(position[x+2][y-1]<7)){
                document.getElementsByTagName("div")[idnum+15].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+15].setAttribute("onclick",mv);  
                willmove[idnum+15]= 1;
             }
             if(x+1<=7&&y+2<=7&&(position[x+1][y+2]<7)){
                document.getElementsByTagName("div")[idnum+10].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+10].setAttribute("onclick",mv);  
                willmove[idnum+10]= 1;
             }
             if(x+1<=7&&y-2>=0&&(position[x+1][y-2]<7)){
                document.getElementsByTagName("div")[idnum+6].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum+6].setAttribute("onclick",mv);  
                willmove[idnum+6]= 1;
             }
             if(x-2>=0&&y+1<=7&&(position[x-2][y+1]<7)){
                document.getElementsByTagName("div")[idnum-15].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-15].setAttribute("onclick",mv);  
                willmove[idnum-15]= 1;
             }
             if(x-2>=0&&y-1>=0&&(position[x-2][y-1]<7)){
                document.getElementsByTagName("div")[idnum-17].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-17].setAttribute("onclick",mv);  
                willmove[idnum-17]= 1;
             }
             if(x-1>=0&&y+2<=7&&(position[x-1][y+2]<7)){
                document.getElementsByTagName("div")[idnum-6].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-6].setAttribute("onclick",mv);  
                willmove[idnum-6]= 1;
             }
             if(x-1>=0&&y-2>=0&&(position[x-1][y-2]<7)){
                document.getElementsByTagName("div")[idnum-10].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-10].setAttribute("onclick",mv);  
                willmove[idnum-10]= 1;
             }

        }
        if(!iseven){
            if(x+2<=7&&y+1<=7&&(position[x+2][y+1]<7)){
                document.getElementsByTagName("div")[idnum+17].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+17].setAttribute("onclick",mv);  
                willmove[idnum+17]= 1;
             }
             if(x+2<=7&&y-1>=0&&(position[x+2][y-1]<7)){
                document.getElementsByTagName("div")[idnum+15].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+15].setAttribute("onclick",mv);  
                willmove[idnum+15]= 1;
             }
             if(x+1<=7&&y+2<=7&&(position[x+1][y+2]<7)){
                document.getElementsByTagName("div")[idnum+10].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+10].setAttribute("onclick",mv);  
                willmove[idnum+10]= 1;
             }
             if(x+1<=7&&y-2>=0&&(position[x+1][y-2]<7)){
                document.getElementsByTagName("div")[idnum+6].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum+6].setAttribute("onclick",mv);  
                willmove[idnum+6]= 1;
             }
             if(x-2>=0&&y+1<=7&&(position[x-2][y+1]<7)){
                document.getElementsByTagName("div")[idnum-15].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-15].setAttribute("onclick",mv);  
                willmove[idnum-15]= 1;
             }
             if(x-2>=0&&y-1>=0&&(position[x-2][y-1]<7)){
                document.getElementsByTagName("div")[idnum-17].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-17].setAttribute("onclick",mv);  
                willmove[idnum-17]= 1;
             }
             if(x-1>=0&&y+2<=7&&(position[x-1][y+2]<7)){
                document.getElementsByTagName("div")[idnum-6].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-6].setAttribute("onclick",mv);  
                willmove[idnum-6]= 1;
             }
             if(x-1>=0&&y-2>=0&&(position[x-1][y-2]<7)){
                document.getElementsByTagName("div")[idnum-10].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-10].setAttribute("onclick",mv);  
                willmove[idnum-10]= 1;
             }

        }
        if(willmove[idnum+10]||willmove[idnum-10]||willmove[idnum+6]||willmove[idnum-6]||willmove[idnum+17]||willmove[idnum-17]||willmove[idnum+15]||willmove[idnum-15]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
        }
        if (pieceno==12){
        var iseven= (x+y)%2 ;
        if(position[x-1][y]==0){
            if(iseven){
                document.getElementsByTagName("div")[idnum-8].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-8].setAttribute("onclick",mv);  
                willmove[idnum-8]= 1;
                if(x==6&&position[x-2][y]==0){
                    document.getElementsByTagName("div")[idnum-16].setAttribute("class","whiter");
                    document.getElementsByTagName("div")[idnum-16].setAttribute("onclick",mv);
                    willmove[idnum-16]= 1;
                }
            }   
            if(!iseven){
                document.getElementsByTagName("div")[idnum-8].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-8].setAttribute("onclick",mv);  
                willmove[idnum-8]= 1;
                if(x==6&&position[x-2][y]==0){
                    document.getElementsByTagName("div")[idnum-16].setAttribute("class","blackr");
                    document.getElementsByTagName("div")[idnum-16].setAttribute("onclick",mv);
                    willmove[idnum-16]= 1;
                }

            }
        }
        if(iseven){
            if(y-1>=0&& position[x-1][y-1]>0 && position[x-1][y-1]<7){
                document.getElementsByTagName("div")[idnum-9].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-9].setAttribute("onclick",mv);  
                willmove[idnum-9]= 1;
            }
            if(y+1<=7&&position[x-1][y+1]>0 && position[x-1][y+1]<7){
                document.getElementsByTagName("div")[idnum-7].setAttribute("class","blackr"); 
                document.getElementsByTagName("div")[idnum-7].setAttribute("onclick",mv);  
                willmove[idnum-7]= 1;
            }
        }
        if(!iseven){
            if(y-1>=0&& position[x-1][y-1]>0&&position[x-1][y-1]<7){
                document.getElementsByTagName("div")[idnum-9].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-9].setAttribute("onclick",mv);  
                willmove[idnum-9]= 1;
            }
            if(y+1<=7&& position[x-1][y+1]>0&&position[x-1][y+1]<7){
                document.getElementsByTagName("div")[idnum-7].setAttribute("class","whiter"); 
                document.getElementsByTagName("div")[idnum-7].setAttribute("onclick",mv);  
                willmove[idnum-7]= 1;
            }
        }

        if(willmove[idnum-8]||willmove[idnum-16]||willmove[idnum-7]||willmove[idnum-9]){
            moveflag = 1 ;
        }
        movex = x;
        movey = y;
        moveno = no;
        }
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
        if(x==7&&position[movex][movey]==6){
            position[x][y]=4;
        }
        if(x==0&&position[movex][movey]==12){
            position[x][y]=10;
        }  
        document.getElementById(moveno).innerHTML = "";
        var finaltype = positionno(x+1,y+1);
        document.getElementById(no).innerHTML = finaltype;
        moveflag=0;
        position[movex][movey]=0;
        if(whosmove){
            whosmove=0;
            document.getElementById("who").innerHTML = "white should play";
        }
        else{
            whosmove=1;
            document.getElementById("who").innerHTML = "black should play";
        }
    }
  //alert (position);

}