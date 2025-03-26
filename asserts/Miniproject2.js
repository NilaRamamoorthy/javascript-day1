console.log("Miniproject2");
var Question=["what is the color of fruit orange?","what is the capital of India?","who invented telephone?"]
var option=["red,pink,yellow","agra,Delhi,chennai","Albert,Bell,Marcus"]
var correct_ans=["orange","Delhi","Bell"]
var user_ans=["yellow","Delhi","Bell"]
var score=0
function compare(){
    if(correct_ans[i]==user_ans[i])
    { 
  
        score=score+1  
        return true 
    }
    else{
        return false
    }
    }
for(i=0;i<correct_ans.length;i++)
    {
console.log("Question "+(i+1)+":"+Question[i]);
console.log("Options: "+option[i]);
console.log("User Answer: "+user_ans[i]);
console.log("Correct Answer: "+correct_ans[i]);
console.log(compare())

}
console.log("Total Score: "+score);




