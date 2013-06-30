function drawArc(context,x,y,vx,vy,r,w,h,color){
	context.beginPath();
	var grd=ctx.createRadialGradient(x*w, y*h,r*Math.sqrt(w*w+h*h)/2,x*w,y*h,r*Math.sqrt(w*w+h*h));
	grd.addColorStop(0,"white");
	grd.addColorStop(1,color);
	context.fillStyle=grd;
    context.arc(x*w, y*h, r*Math.sqrt(w*w+h*h), 0, 2 * Math.PI, false);
    context.fill();
    
}

function testCharDrawer(context,x,y,vx,vy,w,h,color){
	context.beginPath();
	context.lineWidth = 2;
	context.fillStyle = color;
    context.arc(x*w, y*h, 0.02*w, 0, 2 * Math.PI, false);
    context.arc(x*w, y*h+0.002*h, 0.01*w, 0, 2 * Math.PI, false);
    context.fill();
   
}

function testCharHittedDrawer(context,x,y,vx,vy,w,h,color){
	context.beginPath();
	context.lineWidth = 2;
	context.fillStyle = color;
    context.arc(x*w, y*h, 0.02*w, 0, 2 * Math.PI, false);
    context.arc(x*w, y*h+0.002*h, 0.01*w, 0, 2 * Math.PI, false);
    context.fill();
    context.fillStyle = "#000000";
	context.font="8px Arial";
	context.fillText("痛いです！",x*w, y*h);
   
}

function drawText(context,text,w,h){
	context.fillStyle = "#000000";
	context.font="10px Arial";
	context.fillText(text,0.05*w,0.05*h);
}