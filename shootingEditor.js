function Particle(x,y,r,sx,sy,ax,ay){	
	this.x=x;
	this.y=y;
	this.r = typeof r !== 'undefined' ? r : 0.01;
	this.sx = typeof sx !== 'undefined' ? sx : 0;
	this.sy = typeof sy !== 'undefined' ? sy : 0;
	this.ax = typeof ax !== 'undefined' ? ax : 0;
	this.ay = typeof ay !== 'undefined' ? ay : 0;
	this.tx = typeof tx !== 'undefined' ? tx : 1;
	this.ty = typeof ty !== 'undefined' ? ty : 1;
}
function ParticleGroup(callback){
	this.number = 10;
	this.particle = [];
	this.startTime = new Date().getTime();
	this.life = 1000000000;
	this.updateType = callback(this);
}
function defaultUpdateFun(particleGroup){
	
}
