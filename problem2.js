let a=7;
count=0;
for(let i=1;i<=a;i++){
if(a%i==0){
count++;
}
}
if(count==2){
console.log("prime");
}
else{
console.log("not a prime");
}
