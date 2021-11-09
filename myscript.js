/*let text ="The rain in SPAIN stays mainly in the plain";
let matchtext=text.match(/ain/g);
document.getElementById("new1").innerHTML=text+"ain matchs are "+matchtext;
let inctext=text.includes("stays");
let checktext=text.startsWith("rain",4);
document.getElementById("new2").innerHTML=text+" has  "+inctext+" in it and has"+checktext;
let fname="venkat";
let lname="rathnam";
let fullname=`welcome, ${fname} ${lname} to Js`;
document.getElementById("new3").innerHTML=fullname;
let price=10;
let vAT=0.25;
let total=`Total: ${(price*(1+vAT)).toFixed(2)}`;
document.getElementById("new").innerText =total;
const fruits=["banana","orange","apple","mango"];
document.getElementById("new4").innerHTML=fruits+" after removing "+fruits.splice(0,1,"berry","kiwi")+"new fruit list \n "+fruits+"\n";

//to display simple interest and total amount
let p, r, t,simpleint,totalamount;
function SIaTA(p,r,t){
    return `simpleint:${(p*(r/100)*t).toFixed(4)}, totalamount:${(p*((1*(r/100)*t)+1)).toFixed(2)} `;
} 
document.getElementById("new5").innerHTML=SIaTA(50000,5,3);

//pop,push shift unshift function
const color=["orange", "green" ,"yellow", "purple"];
document.getElementById("new6").innerHTML=color+"\n"+"<b>pop last color</b>"+color.pop()+" <b> position to push red color:</b> \t"+ color.push("red") +" <b>available colors are </b> \t"+ color+" \t<b> shift the colors</b>\t"+color.shift()+"<b> after shift colors available are </b>"+color+"\t <b> unshift the color</b> \t"+color.unshift("orange")+" <b> colors available are :</b> "+color;

//Splice methods
const animals=["tiger","lion","monkey","elephant"];
document.getElementById("new7").innerHTML=animals+" "+animals.splice(3,0,"goat")+" <b> animals exists: </b>"+animals+" <b>then few animals extinct</b> "+animals.splice(2,2,"horse","dog","bear")+"<b> animals exits finally are</b>"+animals;
*/

//sort arrays
const veg=["potato","brinjal","tomato","onion"];
document.getElementById("a1").innerHTML=veg;
veg.sort();
document.getElementById("a2").innerHTML=veg;

//numeric data sort
const num=[22,11,55,10,8,239,119,100,123];
document.getElementById("a3").innerHTML=num+"<br>sorted numbers are: <br>"+num.sort((a,b) => b - a);
/*let txt=" ";
num.forEach(myFunction);
function myFunction(value){
    txt += value +"<br>";
}*/
//let txt=Math.sqrt(Math.round( Math.random().toFixed(3)*10));
//document.getElementById("a4").innerHTML=txt;
let age = Math.round( Math.random().toFixed(3)*50);
let vote=(age>=18)?"Eligible":"not Eligible";
//document.getElementById("a4").innerHTML=age+" is "+vote;
function decisionMake(){
    let time=Math.round(Math.random().toFixed(2)*30);
    let msg="";
    if(time<=10){
        msg="good morning";
    }
    else if(time <=15){
        msg="good afternoon";
    }
    else if(time <=19){
        msg="good evening";

    }
    else{
        msg="good night";
    }
    return msg;
}
let x= decisionMake();
//document.getElementById("a4").innerHTML=x;


function switchcasedemo(){
    let day,d=Math.random().toFixed(1)*10;
switch (d) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
  default:
      day="Mention it correctly. Try again: refresh page";  
}
return day;
}
//document.getElementById("a4").innerHTML=switchcasedemo();