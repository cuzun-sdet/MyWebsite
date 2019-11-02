var res = 0;
var num = 0;

  function getNum(n){
  	if(typeof n == 'number'){
  		num = n;
  	}
    document.getElementById("display").innerHTML=n;
  }


  function getOp(Str){
  	if(Str.includes('+')){
  		res = res + num; 
  	}else if(Str.includes('-')){
  		res = res - num; 
  	}else if(Str.includes('*')){
  		res = res * num; 
  	}else if(Str.includes('/')){
  		res = res / num; 
  	}

  }

  function giveTotal(){
    
    document.getElementById("display").innerHTML=res;
  }


