function Particle(x,y,r,speed,theta,as,at){	
	this.bornx=x;
	this.borny=y;
	this.x=x;
	this.y=y;
	this.r = typeof r !== 'undefined' ? r : 0.01;
	this.speed = typeof speed !== 'undefined' ? speed : 0;
	this.theta = typeof theta !== 'undefined' ? theta : 0;
	this.as = typeof as !== 'undefined' ? as : 0;
	this.at = typeof at !== 'undefined' ? at : 0;
	this.tx = typeof tx !== 'undefined' ? tx : 1;
	this.ty = typeof ty !== 'undefined' ? ty : 1;
	this.trackLevel = 0;
}
function ParticleGroup(commonPattern,number,drawer,color){
	this.commonPattern = commonPattern;
	this.number = number;
	this.particle = [];
	this.bornTime = new Date().getTime();
	this.patternChanger=[];
	this.drawer = drawer;
	this.color = color;
	this.targetType = 0;
}
function Pattern(start,callback){
	this.startTime=start;
	this.callback = callback;
}

////////////////////////commonPattern////////////////////////

function defaultCommanPattern(particleGroup,x,y,t){
	
	for(var j=0;j<particleGroup.particle.length;j++){
		if(particleGroup.particle[j]==null){
			continue;
		}
		particleGroup.particle[j].x += particleGroup.particle[j].speed*Math.cos(particleGroup.particle[j].theta)*t;
		particleGroup.particle[j].y += particleGroup.particle[j].speed*Math.sin(particleGroup.particle[j].theta)*t;
		particleGroup.particle[j].speed += particleGroup.particle[j].as*t;
		var targetTheta = Math.atan((particleGroup.particle[j].ty-particleGroup.particle[j].y)/(particleGroup.particle[j].tx-particleGroup.particle[j].x));
		if(particleGroup.particle[j].tx<particleGroup.particle[j].x){
			targetTheta += Math.PI;
		}
		var delta = targetTheta - particleGroup.particle[j].theta;
		if(delta>Math.PI){
			delta=delta-2*Math.PI;
		}
		particleGroup.particle[j].theta += 0.05*delta*particleGroup.particle[j].trackLevel;
		particleGroup.particle[j].tx = x;
		particleGroup.particle[j].ty = y;
		if(particleGroup.particle[j].theta>1.5*Math.PI){
			particleGroup.particle[j].theta-=2*Math.PI;
		}
		if(particleGroup.particle[j].theta<-0.5*Math.PI){
			particleGroup.particle[j].theta+=2*Math.PI;
		}
		if(Math.abs(delta)>Math.PI/2){
			particleGroup.particle[j].trackLevel=0;
		}
	}
	return particleGroup;
}
function defaultCommanPattern2(particleGroup,x,y,t){
	
	for(var j=0;j<particleGroup.particle.length;j++){
		if(particleGroup.particle[j]==null){
			continue;
		}
		particleGroup.particle[j].x += particleGroup.particle[j].speed*Math.cos(particleGroup.particle[j].theta)*t;
		particleGroup.particle[j].y += particleGroup.particle[j].speed*Math.sin(particleGroup.particle[j].theta)*t;
		particleGroup.particle[j].speed += particleGroup.particle[j].as*t;
		var targetTheta = Math.atan((particleGroup.particle[j].ty-particleGroup.particle[j].y)/(particleGroup.particle[j].tx-particleGroup.particle[j].x));
		if(particleGroup.particle[j].tx<particleGroup.particle[j].x){
			targetTheta += Math.PI;
		}
		var delta = targetTheta - particleGroup.particle[j].theta;
		if(delta>Math.PI){
			delta=delta-2*Math.PI;
		}
		particleGroup.particle[j].trackLevel=0;
		particleGroup.particle[j].theta += 0.1*delta*particleGroup.particle[j].trackLevel;
		particleGroup.particle[j].tx = x;
		particleGroup.particle[j].ty = y;
			
	}
	return particleGroup;
}
function defaultCommanPattern3(particleGroup,x,y,t){
	
	for(var j=0;j<particleGroup.particle.length;j++){
		if(particleGroup.particle[j]==null){
			continue;
		}
		particleGroup.particle[j].x += particleGroup.particle[j].speed*Math.cos(particleGroup.particle[j].theta)*t;
		particleGroup.particle[j].y += particleGroup.particle[j].speed*Math.sin(particleGroup.particle[j].theta)*t;
		particleGroup.particle[j].speed += 0;//gm.particleGroup[i].particle[j].as*t;
		//gm.particleGroup[i].particle[j].theta += gm.particleGroup[i].particle[j].at*t;
		var targetTheta = Math.atan((particleGroup.particle[j].ty-particleGroup.particle[j].y)/(particleGroup.particle[j].tx-particleGroup.particle[j].x));
		if(particleGroup.particle[j].tx<particleGroup.particle[j].x){
			targetTheta += Math.PI;
		}
		var delta = targetTheta - particleGroup.particle[j].theta;
		//gm.particleGroup[i].particle[j].at = delta>0?
		particleGroup.particle[j].theta = targetTheta;
		particleGroup.particle[j].tx = x;
		particleGroup.particle[j].ty = y;
	}
	return particleGroup;
}

///////////////////////////////////////////////////////func/////////////////////////
function defaultUpdateFun(particleGroup,x,y){
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
function defaultUpdateFun2(particleGroup,x,y){
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


////////////////////////////group////////////////////////
function createBasicGroup(commanPattern,number,drawer,color,t){
	var pg = new ParticleGroup(commanPattern,number,drawer,color);
	for(var i=0;i<pg.number;i++){
		var p = new Particle(0.5,0.1,0.01,0.0006,i*Math.PI/pg.number,0,0,0);
		pg.particle.push(p);
	}
	var pattern1 = new Pattern(0,defaultUpdateFun3);
	pg.patternChanger.push(pattern1);
//	var pattern2 = new Pattern(3500,defaultUpdateFun3);
//	pg.patternChanger.push(pattern2);
	return pg;
}

function createBasicGroup2(commanPattern,number,drawer,color,t){
	var pg = new ParticleGroup(commanPattern,number,drawer,color);
	for(var i=0;i<pg.number;i++){
		var p = new Particle(0.5,0.1,0.03,0.0006,Math.PI/2,0,0,0);
		pg.particle.push(p);
	}
	var pattern1 = new Pattern(0,defaultUpdateFun3);
	pg.patternChanger.push(pattern1);
//	var pattern2 = new Pattern(1500,defaultUpdateFun3);
//	pg.patternChanger.push(pattern2);
	return pg;
}
//////////////////utils////////////////
function getDistance2(x0, y0, x1, y1) {
	return (x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1);
}

