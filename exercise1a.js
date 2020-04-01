for (var num = 1; num < 101; num++) {
 if (num % 3 === 0 && num % 5 === 0) {
   console.log("INTEL");
 } else if (num % 3 === 0) {
   console.log("IN");
 } else if (num % 5 === 0){
   console.log("TEL");
 }else{
   console.log(num);
 }
 }