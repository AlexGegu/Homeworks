// 1)
let i = 1;
let sum = 0;
while(i<10) {
if (i % 2 != 0) {
sum = sum + i;  
}
  i++;
}
console.log(sum); // ვარიანტი 1


sum = 0;
for (i=1; i<10; i++) {
  if (i % 2 != 0) {
    sum+=i;
}
} 
console.log(sum); // ვარიანტი 2


// 2) 
sum = 0;
for (let i=1; i<50; i++) {
  if (i % 3 == 0) {
    sum+=i;
  }
} 
console.log(sum);