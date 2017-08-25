let fruits:string[] = ['apple','orange','peach'] ;
fruits.push('banana') ;
let len: number = fruits.length ;
for(let i=0; i<len ;i++){
	console.log(fruits[i]) ;
}
fruits.sort()
fruits.splice(0,1);
len = fruits.length;
for(let i=0; i<len ;i++){
	console.log(fruits[i]) ;
	console.log(fruits[i].indexOf(fruits[i]));
}
