function drawArc(context, centerX,centerY,r,w,h){
	context.beginPath();
	context.lineWidth = 2;
    context.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
    context.arc(centerX*w, centerY*h, r*100, 0, 2 * Math.PI, false);
    context.stroke();

}