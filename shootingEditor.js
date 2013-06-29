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
	this.trackLevel = 0;
}
function ParticleGroup(number,drawer,color){
	this.number = number;
	this.particle = [];
	this.bornTime = new Date().getTime();
	this.pattern=[];
	this.drawer = drawer;
	this.color = color;
	this.targetType = 0;
}
function Pattern(start,callback){
	this.startTime=start;
	this.callback = callback;
}
function defaultUpdateFun(particleGroup,x,y){
	for(var j=0;j<particleGroup.particle.length;j++){
		if(particleGroup.particle[j]==null){
			continue;
		}
		particleGroup.particle[j].sx=0.0008*(x-particleGroup.particle[j].x)/Math.sqrt((x-particleGroup.particle[j].x)*(x-particleGroup.particle[j].x)+((y-particleGroup.particle[j].y)*(y-particleGroup.particle[j].y)));
		particleGroup.particle[j].sy=0.0008*(y-particleGroup.particle[j].y)/Math.sqrt((x-particleGroup.particle[j].x)*(x-particleGroup.particle[j].x)+((y-particleGroup.particle[j].y)*(y-particleGroup.particle[j].y)));;
		particleGroup.particle[j].trackLevel=0;
	}
	return particleGroup;
}
function defaultUpdateFun2(particleGroup,x,y){
	for(var j=0;j<particleGroup.particle.length;j++){
		if(particleGroup.particle[j]==null){
			continue;
		}
		var temp = particleGroup.particle[j].sx;
		particleGroup.particle[j].sx=-particleGroup.particle[j].sy;
		particleGroup.particle[j].sy=temp;
		particleGroup.particle[j].trackLevel=0;
	}
	return particleGroup;
}
function defaultUpdateFun3(particleGroup,x,y){
	for(var j=0;j<particleGroup.particle.length;j++){
		if(particleGroup.particle[j]==null){
			continue;
		}
		particleGroup.particle[j].tx=x;
		particleGroup.particle[j].ty=y;
		particleGroup.particle[j].trackLevel=1;
	}
	return particleGroup;
}
function createBasicGroup(number,drawer,color){
	var pg = new ParticleGroup(number,drawer,color);
	for(var i=0;i<pg.number;i++){
		var p = new Particle(0.5,0.1,0.02,0.0001*Math.cos(i),Math.abs(0.0001*Math.sin(i)),0,0,0);
		pg.particle.push(p);
	}
	var pattern1 = new Pattern(1500,defaultUpdateFun2);
	pg.pattern.push(pattern1);
	var pattern2 = new Pattern(3500,defaultUpdateFun);
	pg.pattern.push(pattern2);
	return pg;
}

function createBasicGroup2(number,drawer,color){
	var pg = new ParticleGroup(number,drawer,color);
	for(var i=0;i<pg.number;i++){
		var p = new Particle(0.5,0.1,0.02,0.0001*Math.cos(i),Math.abs(0.0001*Math.sin(i)),0,0,0);
		pg.particle.push(p);
	}
	var pattern1 = new Pattern(0,defaultUpdateFun3);
	pg.pattern.push(pattern1);
	var pattern2 = new Pattern(1500,defaultUpdateFun);
	pg.pattern.push(pattern2);
	return pg;
}
