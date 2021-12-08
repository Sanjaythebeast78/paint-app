var mouseevent ="empty";
var last_postion_of_x,last_postion_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

canvas.addEventListener("mousedown",my_MouseDown);
function my_MouseDown(e)
{
    mouseevent="mousedown"
}

canvas.addEventListener("mouseup",my_Mouseup);
function my_Mouseup(e)
{
    mouseevent="mouseup"
}

canvas.addEventListener("mouseleave",my_Mouseleave);
function my_Mouseleave(e)
{
    mouseevent="mouseleave"
}

canvas.addEventListener("mousemove",my_Mousemove);
function my_Mousemove(e)
{
    current_postion_of_x=e.clientX-canvas.offsetLeft
    current_postion_of_y=e.clientY-canvas.offsetTop
    
    if (mouseevent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle="black"
        ctx.lineWidth-2
        ctx.moveTo(last_postion_of_x,last_postion_of_y);
        ctx.lineTo(current_postion_of_x,current_postion_of_y);
        ctx.stroke();
    }
    last_postion_of_x=current_postion_of_x
    last_postion_of_y=current_postion_of_y
}