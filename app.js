// //   Chptr# 21-25 
// //   Task 1


var fname = prompt("Enter your first name")
var lname = prompt("Enter your last name")
var fullName = fname + " " + lname;
alert("welcome"+ " " + fullName);

// //  Task 2

var phoneName = "Huawei"
var m = phoneName.length;
document.write("My Phone is:"+ " " + phoneName + "<br>" + "Lenth of String:"+ " " + m + "<br>"+ "<br>")


// //  Task 3

var str = "Pakistani";
var n = str.indexOf("n");
document.write("String:"+ " " + str + "<br>" + "Index of 'n':" + " " + n+"<br>"+ "<br>")

// //  Task 4

var str = "Hello World";
var n = str.lastIndexOf("l");
document.write("String:"+ " " + str + "<br>" + "Last Index of'l':" + " " + n+"<br>"+ "<br>")


// //  Task 5

var str = "Pakistani";
var res = str.charAt(3);
document.write("String:" +" " + str + "<br>" + "Character at Index 3:" + " " + res+"<br>"+ "<br>")


// //  Task 6

var fname = prompt("Enter your first name")
var lname = prompt("Enter your last name")
var fullName = fname + lname;
alert("welcome"+ " " + fullName);


// //  Task 7

var city = "Hyderabad";
var replace = city.replace("Hyder", "Islam");
document.write("City:" + " " + city + "<br>" + "After replacement:" + " " + replace+"<br>"+ "<br>")


// //  Task 8

var message = "Ali and Sami are best friends They play cricket and football together"; 
var rep = message.replace("and", "&")
document.write(rep+"<br>"+ "<br>")

// //  Task 9

var num = "472";
var strng = "string"
var number = "string"
var n = num.toString(472);
document.write("Value:"+ " " + num + "<br>" + "Type:" + " " + strng + "<br>" + "Valur:" + " " + n + "<br>" + "Type:" + " " + number +"<br>"+ "<br>")

// // Task 10

var userInput = prompt("Enter Input")
var arr = ['Peanuts']
var res = userInput.toUpperCase("PEANUTS");
alert(res);

// //  Task 11

var java = "javascript"
var intoTitle = java.toLowerCase("JAVASCRIPT");
document.write("UserInput:"+ " "+ java + "<br>" + "Titlecase"+" " + intoTitle+"<br>")


// //  Task 12

var num = 35.36;
var n = num.toString().replace(".","")
document.write("Number:"+ " " + num +"<br>" +"Result:"+" "+ n+"<br>")


//   Task 13

var userName = prompt("Enter your name:" )
var b = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
if(userName.match(b)){
    alert("Enter valid User Name");
}


//  Task 14


var varity = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Welcome to ABC Bakery,What do you want to order Sir/Ma'am?")
var itemsOdered = userInput.toLowerCase();
for ( i = 0; i < varity.length ; i++){
    if ( varity[i] === itemsOdered) {
        document.write(varity[i] + " is availabe at Index " + i + " in our bakery" +"<br>")
   
}else {
    document.write("Sorry not available")
}
}




// // Task 16

var university = "University of Karachi";
var intoArr = university.split('');
for(var i=0; i<intoArr.length; i++){
    document.write(intoArr[i] +"<br>")
} 


// //  Task 17

var a = prompt("Enter your Country Name");
var country = a.length
document.write("The last letter is " + a.charAt(country-1)+ "<br>")




// //  Task 18

var str = "The quick brown fox jumps over the lazy dog";
var str = str.toLowerCase ();
var count = (str.match(/the/g) || []).length;
document.write("Text:"+" " +str+"<br>" +"There are " +count+ "occurance(s) of word 'the' "+"<br>"+"<br>")




// //      Chptr 26-30    //////


//   Task 1


var posiNum = 6.45214;
var round = Math.round(posiNum)
var floor = Math.floor(posiNum)
var ceil = Math.ceil(posiNum)
document.write("Positive Number:"+" "+ posiNum+ "<br>" +"Round of value:" + " " +round+ "<br>"+ "floor value:"+ " " +floor+"<br>"+"ceil value:"+" "+ceil+ "<br>"+"<br>" )


// //   Task 2

var negiNum = -4.673;
var round = Math.round(negiNum)
var floor = Math.floor(negiNum)
var ceil = Math.ceil(negiNum)
document.write("Negative Number:"+" "+ negiNum+ "<br>" +"Round of value:" + " " +round+ "<br>"+ "floor value:"+ " " +floor+"<br>"+"ceil value:"+" "+ceil+ "<br>"+"<br>" )


// //   Task 3

var absValue = -10;
var value = Math.abs(absValue);
 document.write("The Absolute value is : " + absValue+ " "+ "is"+" " +value+ "<br>"+"<br>"  );

         

//   Task 4

var a = Math.random();
var b = (a*5) + (+1);
document.write("Random Dice Value: "+Math.floor(b))


//   Task 5

var head = Math.random();
var randomNumber = Math.floor((head*2) + (+1)  );
document.write(randomNumber+ "<br>")
if(randomNumber === 2){
    document.write("Random Coin Value Head <br>")
}else if(randomNumber === 1){
    document.write("Random Coin Value tail <br>")
}


//   Task 6

var RandomNumber = Math.random();
var num1 = (RandomNumber*100) + (+0.1);
document.write("Random Number between 1 and 100:"+ " " + Math.floor(num1));


//   Task 7

var x = Math.random();
var scretNumber = Math.floor((x*10) + (+1));
document.write(scretNumber);
var Guess = prompt("Guess the number between 1-10: ");
if(Guess === scretNumber){
    alert("Congrats User: " )

}else{
    alert("Try Again");
}



// /    Chptr 31-34 

//   Task 1


var newDate = new Date();
document.write(newDate+"<br>");


//   Task 2

var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
var output = document.write('Current Month:'+" ");
document.write(thisMonth);

 if(output.textContent !== undefined) {
    output.textContent = thisMonth;
  }
  else {
    output.innerText = thisMonth;
  }

//     Task 3

var strg = new Date();
var dateRes = strg.toString();
var toDay = dateRes.slice(0,3);
document.write("Today is " + toDay + "<br><br>")


//    Task 4

var date = new Date();
var str = date.toDateString();
var day = str.slice(0.3);
if( day ==="Sun" || day === "Sat"){
 document.write("Its fun Day " + "<br><br>")
}


//   Task  5

var e = new Date();
var f = e.toString();
var g = f.slice(8,2);
var h = parseInt(g);
if( h <= 15){
    document.write("Thd First fiften days of month " + "<br><br>")

}else if( h >=16){
    document.write("Last days of month " + "<br><br>")
}


//  Task 6

var New = new Date();
var getTime = New.getTime();
var x = getTime / 1000*60;
document.write("Current Date:" + New +"<br>"+ "Elapsed Milisecond since 1, January 1970:"+getTime+"<br>"+"Elapsed minutes since 1, january 1970:" +x)


//  Task 7

var hours = new Date();
var ampm = hours.getHours();
if(ampm < 12){
    alert("Its AM")

}else if(ampm>= 12 &&  ampm!= 0){
    alert("Its PM")
}


//   Task 9

var ramDan = new Date("June 18 2015");
var june_mili = ramDan.getTime();
var today_Date = new Date();
var today_Mili = today_Date.getTime();
var Mili = today_Mili - june_mili;
var days = Mili/(1000*60*60*24);
document.write( Math.floor(days) + "Days have passed since june 18 2015 <br> <br>")


//  Task 10

var date = new Date (" 2015" )
var refferenceDate = new Date ("Sat Dec 2015 22:50:16")
var mili = date.getTime();
var refferenceMili = refferenceDate.getTime();
var Mili = reffenenceMili - mili;
var second = Mili/(1000*60)
document.write(second)



//  Task 11

var currentDate = new Date();
var currentHour = currentDate.getHours();
var agoDate = new Date();
var agoHour = agoDate.setHours((currentHour-1));
document.write(agoHour)




//  task

var cur_date = new Date();
curdate = cur_date.setHours(22);
document.write(cur_date);



// /    Chptr 35-38

//  Task 1

function date() {
    var x = new Date()
   document.write(x);

}
date();

//  Task 2

function fullName() {
  var FirstName =prompt("Enter your first name")
  var LastName =prompt("Enter your last name")
document.write(FirstName+ " " + LastName)

}
fullName();


//   Task 3

function sum_method (x,y){
    document.write((+x) + (+y))
}
var number = sum_method (prompt("enter first number") , prompt("enter second number"))


//   Task 4 ///  "Calculator"


function calCulator (num1,optr,num2){
    if (optr === "+"){
        return (+num1) +(+num2)
    } else if (optr === "-"){
        return num1 - num2
    } else if (optr === "/"){
        return num1 / num2
    } else if (optr === "*"){
        return num1 * num2
    } else{
        return "Operator Not Found"
    }
}

var result = calCulator (prompt("enter your first number"),prompt("enter your operator"),prompt("enter your second number"))
document.write(result)
    

//   Task 5

function squareShape (y){
    document.write(y * y)

}

var z = squareShape(prompt("Enter your Number: "))


//   Task 6

var facTorail = [];
function f (n) {
    if(n == 0 || n == 1)
    return 1;
    if(facTorail[n] > 0)
    return facTorail[n];
    return facTorail[n] = f(n-1) * n;
}
var n = f (prompt("Enter your Number"))
document.write(n);


//  Task 7

function count ( start,End){
    for(var i = start ; i <= End ; i++){
        document.write(i + " ")
    }

}

var counting = count(prompt("Counting Starts at:"),prompt("Counting End at") )


//  Task 8

function hypotenuse (base, perp){
    var o = (base) + ( perp)
    var hyp = Math.sqrt(hypotenuse);
    document.write("Hypotneuse" + hyp);
}

var h = hypotenuse(Math.pow(prompt("value of base"),2),Math.pow(prompt("Value of Perpendicular"),2))


//  Task 9

function areaRectangle (width= prompt("Enter width"),height = prompt("Enter Height")){
    var area = width * height
    document.write("Area of rectangle is "+area)

}
areaRectangle();


//  Task 10


function palinDrome(){
    var w = prompt("enter your word: ")
    var m = "";
        for(var i = w.length - 1; i >=0 ; i--){
        m += w[i]
    }

    if (m === w){
       
             document.write("this is palindrome word");
    }else {
        document.write("this is not palindrome")
    }
}
palinDrome();


//  Task 11

function Capital (d){
    var c = d;
    var e = c.toUpperCase();
    document.write(e);

}

var res = Capital(prompt("Write a sentence"))



// ///         xxxx     //////