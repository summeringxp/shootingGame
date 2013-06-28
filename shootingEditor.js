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
function ParticleGroup(){
	this.number = 20;
	this.particle = [];
	this.bornTime = new Date().getTime();
	this.pattern=[];
}
function Pattern(start,callback){
	this.startTime=start;
	this.callback = callback;
}
function defaultUpdateFun(particleGroup){
	return particleGroup;
}
function defaultUpdateFun2(particleGroup){
	for(var j=0;j<particleGroup.particle.length;j++){
		if(particleGroup.particle[j]==null){
			continue;
		}
		particleGroup.particle[j].sx*=-2;
		particleGroup.particle[j].sy*=-1;
	}
	return particleGroup;
}
function defaultUpdateFun3(particleGroup){
	for(var j=0;j<particleGroup.particle.length;j++){
		if(particleGroup.particle[j]==null){
			continue;
		}
		particleGroup.particle[j].sy*=-7;
	}
	return particleGroup;
}


function createBasicGroup(){
	var pg = new ParticleGroup();
	for(var i=0;i<pg.number;i++){
		var p = new Particle(0.5,0.1,0.01,0.02*Math.cos(i),Math.abs(0.02*Math.sin(i)),0,0,0);
		pg.particle.push(p);
	}
	var pattern1 = new Pattern(2000,defaultUpdateFun2);
	pg.pattern.push(pattern1);
	var pattern2 = new Pattern(3500,defaultUpdateFun3);
	pg.pattern.push(pattern2);
	return pg;
	
}
