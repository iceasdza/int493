declare var Promise: any;
var p = new Promise((resolve,reject) => {
	resolve(123);
}) ;
p.then(result=> console.log(result)) ;
