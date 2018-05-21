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

var start = document.getElementById('start');
var p1 = document.getElementById('p1');
var position = [[1,2,3,4,5,3,2,1],[6,6,6,6,6,6,6,6],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [12,12,12,12,12,12,12,12],[7,8,9,10,11,9,8,7]];
var i;
var j;
var k;
var type;


function begingame() {
    for(i=1;i<=8;i++){
        for(j=1;j<=8;j++){
            k= ((i-1)*8)+j;
            {
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
                    type = ""
                }
            }
            document.getElementById(k).innerHTML= type ;
            document.getElementById(k).style.cursor= "pointer";
        }

    }
    
}


