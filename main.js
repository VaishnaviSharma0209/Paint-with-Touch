var mouseEvent="empty";
var last_x,last_y;
canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");
color="black";
width_of_line="1";
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_postion_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_x,last_y);
        console.log("last x=" + last_x);
        console.log("last y=" + last_y);
        ctx.lineTo(current_postion_of_mouse_x,current_postion_of_mouse_y);
        console.log("current x=" + current_postion_of_mouse_x);
        console.log("current y=" + current_postion_of_mouse_y)
        ctx.stroke();
    }
    last_y=current_postion_of_mouse_y;
    last_x=current_postion_of_mouse_x;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function Clearfun(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("colour").value;
    width_of_line=document.getElementById("Width").value;
}
var last_touch_x,last_touch_y;
var width=screen.width;
new_width=width-70;
new_height=screen.height-300
if(width<992){
    document.getElementById("canvas1").width=new_width;
    document.getElementById("canvas1").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    last_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    last_touch_y=e.touches[0].clientY-canvas.offsetTop;
    color=document.getElementById("colour").value;
    width_of_line=document.getElementById("Width").value;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_postion_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_postion_of_touch_y=e.touches[0].clientX-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_touch_x,last_touch_y);
    ctx.lineTo(current_postion_of_touch_x,current_postion_of_touch_y)
    ctx.stroke();
    last_touch_y=current_postion_of_touch_y;
    last_touch_x=current_postion_of_touch_x;
}