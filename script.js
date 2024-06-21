let play=confirm("Shall we play rock paper scissor??")
if(play){ 
    var str;
var st=prompt("Enter string:")
var c;
if(st=="Rock"||st=="Paper"||st=="Scissor")
    {
      
        let r=Math.floor(Math.random()*3+1);
        if(r==1)
            {
                c="Rock"
            }
            else if(r==2)
                {
                    c="Paper"
                }
                else if(r==3)
                    {
                        c="Scissor"
                    }
                    let res=c==st?alert("It's Tie"): 
                 c=="Rock"&&st=="Paper"?alert("You won!!"):
                 c=="Rock"&&st=="Scissor"?alert("Computer won :("):
                 c=="Paper"&&st=="Rock"?alert("Computer won :("):
                 c=="Paper"&&st=="Scissor"?alert("You won!!"):
                 c=="Scissor"&&st=="Rock"?alert("Computer won :("):
                 c=="Scissor"&&st=="Paper"?alert("You won!!"):alert("Enter valid word");
    }
    else
    alert("Enter valid word")
}
else{
    alert("ok may be next time!")
}