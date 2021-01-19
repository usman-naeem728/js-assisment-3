// DATE METHODS

// 1
//  var a = new Date()
// console.log(a)

// 2
// var b = a.toString()
// var c = b.slice(4,7)
// console.log(c+"uary")

// 3
// var d = b.slice(0,3)
// alert(d)

// 4
// var day = prompt("enter day")
// switch(day){
//     case "sunday":
//         alert("its funday")
//         break;
//     case "saturday":
//         alert("its funday")
//         break;
//     default:
//         alert("its working day")
// }

// 5
// var day = prompt("enter date")
// if(day < 16){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

// 6
// var a = new Date()
// var b = a.getTime()
// var c = new Date("Januray 1,1970")
// var d = c.getMinutes()
// console.log("Elapsed milliseconds since January 1, 1970"+":"+b)
// console.log("Elapsed minutes since January 1, 1970"+":"+d)

// 12
// var a = new Date()
// var b = new Date("January 1,1920")
// console.log("Current Date"+" "+a+" "+"100 years back, It was"+" "+b)

// 14
// var a = prompt("Enter consumer number")
// var b = prompt("enter billing month")
// var c = Math.random()*500
// var g = Math.round(c)
// var d = g*16
// var e = 350
// var f = e+d
// document.write("<h1>"+"K-ELECTRIC BILL"+"</h1>"+"<br/>")
// document.write("Consumer Number:"+a+"<br/>")
// document.write("Month:"+b+"<br/>"+"<br/>"+"<br/>"+"<br/>"+"<br/>")
// document.write("Number of units:"+g+"<br/>")
// document.write("Charge per unit: 16"+"<br/>")
// document.write("Net Amount Payable(within due date):"+d+"<br/>")
// document.write("Late payment charges:"+e+"<br/>")
// document.write("Gross Amount Payable(after due date):"+f+"<br/>")





// FUNCTIONS

// 1
// function telltime(time){
//   document.write(time)
// }
// telltime(new Date())


// 2
// function fullname(name){
//     alert(name)
// }
// var a = prompt("Enter your First name")
// var b = prompt("Enter your last name")
// var c = a+b
// fullname("Hello"+ " "+ c)


// 3
// function sum(num){
//     document.write(num)
// }
// var a = prompt()
// var b = prompt()
// var c = parseInt(a)
// var d = parseInt(b)
// var e = c+d 
// sum(e)


// 4
// function calc(){
 
// var a = prompt("Enter num1")
// var b = prompt("Enter num2")
// var c = prompt("Enter operator")
// var d = parseInt(a)
// var e = parseInt(b)
// if(c === "+"){
//     alert(d+e)
// }else if (c === "*"){
//     alert(d*e)
// }else if(c === "-"){
//     alert(d-e)
// }else if(c === "/"){
//     alert(d/e)
// }

// }
// calc()


// 7
// function count(){
//     var a = prompt("enter starting num of counting","0")
//     var b = prompt("enter last num of counting","100")
//     var c = parseInt(a)
//     var d = parseInt(b)
//      for(i=c;i<=d;i++){
//          document.write(i+"<br/>")
//      }
// }
// count()


// // 9
// function area(){
//     var a = prompt("enter width of rectangle")
//     var b = prompt("enter height of rectangle")
//     var c = parseInt(a)
//     var d = parseInt(b)
//     alert("AREA of rectangle is"+" "+c*d)
// }
// area()



// SWITCH, WHILE & DO SWITCH

// 2
// function year(){
//     var a = prompt("enter year")
//   switch(a){
//       case "2004":
//           alert("Leap year")
//           break;
//       case "2008":
//             alert("Leap year")
//            break;  
//       case "2012":
//         alert("Leap year")
        
//       case "2016":
//         alert("Leap year")
        
//       case "2020":
//         alert("Leap year")
//   }
// }
// year()



