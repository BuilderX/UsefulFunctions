function pokemonStats(name,stats,type){
	    this.name = name;
	    this.att = stats[0] || 1;
	    this.def = stats[1] || 1;
	    this.speed= stats[2] || 1;
	    this.magAtt = stats[3] || 1; 
	    this.magDef = stats[3] || 1;
	    this.type = type;
	    this.lvGain = function(lv){
	    		 var statHolder = stats;
	        for(var i = 0;i < stats.length; i++){
	                statHolder[i] *= lv ;
	                  
	        	
	        }
	         // this.att = this.statHolder
			 this.att = statHolder[0];
			 this.def = statHolder[1];
			 this.speed = statHolder[2];
			 this.magAtt = statHolder[3];
	    	 this.magDef = statHolder[4];
	    	
	    };
	    this.checkType = function(){
	    	var TYPEARR = ['GHOST'];
	    	var currentType = TYPEARR.indexOf(this.type);
	    	
	    	  if(~ currentType){
	    		 switch(this.type){
	    		 	 case 'GHOST':
	    		 	 	 for(var i = 0; i < stats.length;i++){	
	    		 	 	 	stats[i] -= 2;
	    		 	 	    this.specialAbility = 'GHOSTING';
	    		 	 	 }
	    		 }
	    		
	    		
	    	}else{
	    		currentType = 'N/A';
	    		
	    	}
	    	
	    };
	    
}

var Ganger = new pokemonStats('Ganger',[7,6,4,5,15],'GHOST');
for(var i = 0; i < Gang.length;i++){
	for(var j = 0; j < Gang[i].length;j++){
	if(typeof Gang[i][j] === 'function'){
		       Gang[i][j](51);
	}else{
		
	}
}}
