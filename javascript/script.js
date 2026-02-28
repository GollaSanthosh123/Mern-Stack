// // // // // // console.log("Hello World!!!!")
// // // // // // var a;//globel scope
// // // // // // a=9;
// // // // // // var a;
// // // // // // a=1;
// // // // // // let b=8;//block scope
// // // // // //  b=9;
// // // // // //  const c=3.14;//block
// // // // // // console.log(a);
// // // // // // console.log(b);
// // // // // // console.log(a+b);
// // // // // // var str="santhosh";//``,'',""
// // // // // // console.log(str);
// // // // // // console.log(typeof str);
// // // // // // var bool=true;
// // // // // // var un;//undefined
// // // // // // var nu=null;
// // // // // // var big=123455667n;
// // // // // // var symbol=Symbol('li');
// // // // // // console.log(typeof big)
// // // // // // //arr
// // // // // // var arr=[1,2,3];
// // // // // // console.log(arr);
// // // // // //dict--object
// // // // // // var obj={name:"santhu",roll:"D8"};
// // // // // // console.log(obj);

// // // // // // Arithematic operatinos
// // // // // var a=10;
// // // // // var b=2;
// // // // // console.log(a/b);
// // // // // console.log(a**b);

// // // // // //relational
// // // // // b=10;
// // // // // console.log(a>=b);
// // // // // console.log(a==b);
// // // // // b="10";
// // // // // console.log(a===b); // check values and datatypes alsooo.
// // // // // //logical operators
// // // // // var b1=true;
// // // // // var b2=false;
// // // // // console.log(b1||b2);
// // // // // console.log(!b1)

// // // // // //controll statements
// // // // // //cnditional
// // // // var a=10;
// // // // var b=5;
// // // // var c=18;
// // // // let m;
// // // // m=a;
// // // // if(m<b){
// // // //     m=b;
// // // // }
// // // // else if(m<c){
// // // //     m=c;
// // // // }
// // // // else{
// // // //     m=a;
// // // // }
// // // // console.log(`${m} is max`);
// // // // //ternery operator
// // // // var a=9;
// // // // var r=(a%2===0)?`${a} is even`:`${a} is odd`;
// // // // console.log(r);
// // // // m=70;
// // // // const g=(m>90)?"A":(m>80)?"B":(m>70)?"C":"D";
// // // // console.log(g);
// // // // //switch
// // // // var day=9;
// // // // switch(day){
// // // //     case 1:{
// // // //         console.log("Sunday");
// // // //         break;
// // // //     }
// // // //     case 2:{
// // // //         console.log("Monday");
// // // //         break;
// // // //     }
// // // //     case 3:{
// // // //         console.log("Tuesday");
// // // //         break;
// // // //     }
// // // //     case 4:{
// // // //         console.log("Wednesday");
// // // //         break;
// // // //     }
// // // //     case 5:{
// // // //         console.log("Thursday");
// // // //         break;
// // // //     }
// // // //     case 6:{
// // // //         console.log("Friday");
// // // //         break;
// // // //     }
// // // //     case 7:{
// // // //         console.log("saturday");
// // // //         break;
// // // //     }
// // // //     default:{
// // // //         console.log("Invalid");
// // // //     }
// // // // }
// // // // //Looping
// // // // for(let i=0;i<=10;i++){
// // // //     console.log(i);
// // // // }

// // // // let j=0;
// // // // while(j<=10){
// // // //     console.log(j);
// // // //     j++;
// // // // }

// // // // let c=0;
// // // // do{
// // // //     console.log(c);
// // // //     c++;
// // // // }while(c<=10);

// //let nu=Number(prompt("Enter a value"));
// let s=1;
// for(let i=1;i<=nu;i++){
//     s*=i;
// }
// console.log(s);

// // // //normal function
// // // function f_name(a,b){
// // //     console.log(Math.fround(a/b,0));
// // // }
// // // f_name(10,20);

// // // function f_name(a,b){
// // //     return a+b;
// // // }
// // // var res = f_name(10,20);
// // // console.log(res);

// // //Arrow Function
// // var add=()=>{
// //     console.log("arroe function");
// // }
// // add();

// // var add=(a,b)=>{
// //     console.log(a+b);
// // }
// // add(10,40);
//spred operator(to copy one arr to other)
// var arr=[1,2,3];
// var arr1=[...arr,2,3,4];
// console.log(arr1);
// //destructering operator
// var [m1,m2,m3]=[70,90,89];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// //objext
// var {name,age,dept,cont}={name:"santhu",age:20,dept:["cs","ds"],cont:{email:"santhosh@gmail.com",mbno:12123232}};
// console.log(name);
// console.log(dept);
// console.log(cont);
//for..in
// var arr=[1,2,3,5,7];
// for(let i in arr){
//     console.log(i,arr[i]);
// }

// var obj={name:"santhosh",age:20,isActive:true}
// for(let j in obj){
//     console.log(j,":",obj[j]);
// }
//for..of
// var a=[10,20,30,40];
// for(let i of a){
//     console.log(i);
// }
// //for..each
// a.forEach((val,ind)=>{
//     console.log(val,ind);
// })
//map
// var a=[10,20,30,40];
// var rear=a.map((val)=>(val*2))
// console.log(rear);

// var even=a.filter((val)=>(val%2===0))
// console.log(even);

// var tot=a.reduce((sum,val)=>(sum+val),0)
// console.log(tot);
var ar=[1,2,3,4,5]
var res=ar.map((val)=>(val**2)).filter((val)=>(val%2===0)).reduce((sum,val)=>(sum+val),0);
console.log(res);





