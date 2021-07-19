var mouseevent="empty";

var lastx,lasty;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour="black";
width=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    colour = document.getElementById("color").value;
    width= document.getElementById("width").value;

    mouseevent = "mousedown";
}


canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseevent = "mouseleave";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseevent = "mouseup";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;

      ctx.arc(current_x,current_y,20,0,2*Math.PI)
      

ctx.stroke();
    }
    lastx = current_x;
    lasty = current_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}