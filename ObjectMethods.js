function checker(arr,i){
	   var flag = false;
	   var start = false;
	   var finished = false;
	   
	   if(i > 0 && i < arr.length ){
	   
	   switch(i){
	   	  case 0:
	   	   start = true;
	   	    if(arr[0] === false && arr[1] === true){
	   	     finished = true;
	   	      if(finished){
	   	           arr[2] = true;   
	   	      }
	   	  	}
	   	  break;
	   	  case 1:
	   	  	 start = true;
	   	    if(arr[0] === true && arr[2] === true){
	   	     finished = true;
	   	      if(finished){
	   	           arr[0] = false;   	
	   	      }
	   	  	}
	   	  break;
	   	  case 2:
	   	     start = true;
	   	      if(arr[0] === false && arr[1] === true){
	   	         finished = true;
	   	      if(finished){
	   	           arr[1] = true;   	
	   	      }
	   	  	}
	   	  
	   	  break;
	   	  default: console.log('Value not valid');
	   	  break;
	   }
	   start = false;
	   
	   }	
	 return arr;
}

checker([true,false,true],1);



function HTMLPRO (){}
var arrs = ['a','b','div','p','body'];


arrs.forEach(function(tag){
	
	HTMLPRO.prototype[tag] = function(content){
        return '<'+ tag + '>' + content + '</' + tag + '>';
	}
});

   HTMLPRO.prototype.comment = function(content){
	 return '<--' + content + '-->';
}

var scub = [' The biggest land around','We need therapy','Stigma is a problem ',' Get help and improve','Dont die todat'];
var switchs = ['a','b','div'];
var counter = 0;
var empty = [];
for(var i = 0; i < 4 ; i++){
	     empty.push(HTMLPRO.prototype['a'](scub[i]));
	     
	     if(HTMLPRO.prototype['a']){
	     
	         counter++;
	   
	     	if(counter === 2){
	        empty.push(HTMLPRO.prototype[switchs[2].toString()](scub[i]));
	     		
	     	}
	     }
}

console.log(HTMLPRO.prototype);


function coun(arr,t){
	   var i = 0,count = 0;;
	while(arr[i] !== t ){
		
    	 if(t){
			count++;
			i++;
		}
	 console.log(count);
		i++;
	}
	
}
coun([0,1,24,4,5,2,5,9,10],5);


function createO(pseudoObj, key, value,length){
	    var idset = 01;
  for(var i = 0; i < length;i++ ){
	  var pseudoObj = {key : '' , idset :value};
	  }
}

function setUp(x,y,arr){
	  this.x = x;
	  this.y = y;0
	  this.arr = [];
	  
	  
	  
	  
	  return {x:x,y:y,arr:arr}
}

var su1 = new setUp(0,50);
var su2 = new setUp(53,5);
var su3 = new setUp(13,5);
var su4 = new setUp(3,5);
var su5 = new setUp(3,55);
var su6 = new setUp(3,5);
var su7 = new setUp(3,15);
var su8 = new setUp(0,0);
var initArray = [su1,su2,su3,su4,su5,su6,su7];

for(var i = 0; i < 7;i++){
	    var start = initArray[i];
        console.log(start);	
}

function processs(arr){
	var i = arr.length, fl = false;
   if(arr.length > 0){
	while(i >= 0){
	 var ele = arr[i];
	    if(ele){
	    	console.log(ele)
	    	ele.imprint = [];
	        console.log(ele.imprint);
	    	
	    }
	 if(typeof arr[i]==='number'){
	     console.log(ele)
	     
 	 }else if(ele instanceof Object ){
	     ele.imprint.push(Math.floor(Math.random(40 ) * 10));
	     console.log(ele);
		 
	 }i--
	 }}
}
var pr = new processs([{a:'d'},4,'a']);

function errorLog(errors){
	this.type = ['Bad Array','OBJ undefined',' Values length too long','Values not even'];
	this.serialCode = [];
	this.errors = errors;
	  
	this.makeCode = function(){
		if(Array.isArray(this.errors)){
	 	  for(var i = 0; i < this.errors.length;i++){
	 	  	      this.serialCode.push(i >> 4);
	 	   }
		}
	 	 }
	this.makeCode();
	return errors;
}

	var errorLog = new errorLog('y');

function buildObj(OBJ,keys,values){
	
 if(Array.isArray(keys) && Array.isArray(values)){	
  if( OBJ !== 'undefined' && typeof OBJ === 'object'){
   if(keys.length && values.length > 0 ){
   	
   	if(keys.length === values.length )
   	 for(var i = 0; i < keys.length;i++){
	      
	    if(i < 6){
    		 if(typeof values[i] === 'string' &&  keys[i].length < 30 ){
                OBJ[keys[i]] = values[i];  
    	    }
	    }
	    // Objects or arrays
 if(keys.length >= 5 && keys.length < 10){ 
    if(typeof values[i] === 'object' &&   keys[i].length < 30 && Array.isArray(values[i])){
                OBJ[keys[i]] = values[i];  
           }
         } 
    if(keys.length  > 10){
			  if(typeof values[i] === 'number' && keys.length < 30){
	         if(i > 10 && i < 15){
		           OBJ[keys[i]] = values[i];  
    	}
     if(keys.length  > 15){
			  if(typeof values[i] === 'object' && keys.length < 30){
	         if(i > 15 && i < 25){
		           OBJ[keys[i]] = values[i];  
      	}
		}}
	}  
  }}
  	return OBJ;
 }}}else{
 	
 	
 }
   return 'Not a valid Object'
}

 !Object.isNaN();
function d(){}
var op = {}
var opa = [2,2,2,2,2,2,2,2,2,2].map(function(a){return a * Math.floor(Math.random() * 10);})
var Furniture = new buildObj(op,['test','piston','h','noa','str','str0','obj'],['Data1',2.. toString(),'d','d','d','t',opa]);

console.log(Furniture);


