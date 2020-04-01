for (var num = 1; num < 101; num++) {
 switch (true) {
   case num % 3 == 0 && num % 5 == 0:
     console.log("INTEL");
     break;
   case num % 3 == 0:
     console.log("IN");
     break;
   case num % 5 == 0:
     console.log("TEL");
     break;
   default:
     console.log(num);
     break;
 }
}