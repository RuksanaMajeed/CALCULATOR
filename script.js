//JavaScript function to specify the operation on a button click
function buttonclick(val)
{
    // console.log(val)
    document.getElementById("screen").value+=val;
}
// JavaScript function to clear the screen when clicking on the clear button
function clearDisplay()
{
    document.getElementById("screen").value="";
}
// JavaScript Function to perform Arithmetic Operations
function equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}