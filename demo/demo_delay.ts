declare var Promise : any ;

function delay(ms){
	return new Promise((resolve,reject)=> {
	 setTimeout(resolve,ms)
	}) ;
}

delay(5000).then(()=>console.log('5 seconds have passed!')) ;
delay(2000).then(()=>console.log('2 seconds have passed!')) ;