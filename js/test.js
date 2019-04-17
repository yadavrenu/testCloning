var fruits=[
    {
        "name":"Mango",
        "clas":"Fruit",
        "price":100,
        "quant":0
    },
    {
        "name":"Apple",
        "clas":"Fruit",
        "price":120,
        "quant":0
    },
    {
        "name":"Kiwi",
        "clas":"Fruit",
        "price":150,
        "quant":0
    },
    {
        "name":"Banana",
        "clas":"Fruit",
        "price":50,
        "quant":0       
    },
    {
        "name":"Guava",
        "clas":"Fruit",
        "price":60,
        "quant":0       
    },
    {
        "name":"Orange",
        "clas":"fruit",
        "price":80,
        "quant":0        
    },
    {
        "name":"Watermelon",
        "clas":"Fruit",
        "price":40,
        "quant":0     
    },
    {
        "name":"Melon",
        "clas":"Fruit",
        "price":50,
        "quant":0      
    },
    {
        "name":"Apricot",
        "clas":"Fruit",
        "price":120,
        "quant":0       
    },
    {
        "name":"Grapes",
        "clas":"fruit",
        "price":70,
        "quant":0       
    },
]

var veg=[
    {
        "name":"Potato",
        "clas":"Vegetable",
        "price":40,
        "quant":0
    },
    {
        "name":"Tomato",
        "clas":"Vegetable",
        "price":50,
        "quant":0
    },
    {
        "name":"Onion",
        "clas":"Vegetable",
        "price":60,
        "quant":0
    },
    {
        "name":"Brinjal",
        "clas":"Vegetable",
        "price":30,
        "quant":0
    },
    {
        "name":"Cabbage",
        "clas":"Vegetable",
        "price":40,
        "quant":0
    },
    {
        "name":"Beans",
        "clas":"Vegetable",
        "price":40,
        "quant":0
    },
    {
        "name":"Gourd",
        "clas":"Vegetable",
        "price":30,
        "quant":0
    },
    {
        "name":"Ladyfinger",
        "clas":"Vegetable",
        "price":40,
        "quant":0
    },
    {
        "name":"Bitter-Gourd",
        "clas":"Vegetable",
        "price":50,
        "quant":0
    }
]

var biscuit=[
    {
        "name":"ParleG",
        "clas":"Biscuit",
        "price":10,
        "quant":0
    },
    {
        "name":"Oreo",
        "clas":"Biscuit",
        "price":25,
        "quant":0
    },
    {
        "name":"Burboun",
        "clas":"Biscuit",
        "price":20,
        "quant":0
    },
    {
        "name":"Britania",
        "clas":"Biscuit",
        "price":15,
        "quant":0
    },
    {
        "name":"Mario",
        "clas":"Biscuit",
        "price":15,
        "quant":0
    },
    {
        "name":"Dark-Fantasy",
        "clas":"Biscuit",
        "price":30,
        "quant":0
    },
    {
        "name":"Tiger",
        "clas":"Biscuit",
        "price":10,
        "quant":0
    },
    {
        "name":"50-50",
        "clas":"Biscuit",
        "price":10,
        "quant":0
    }
]
var all=[fruits,veg,biscuit];
var cartIt=[];
var finalIt=new Set();
function mySearch(){   
   var j=0;
   var input=document.getElementById("myInput").value;
   let re = new RegExp(input,"i");
   var text="";
   if(input=="")
     document.getElementById("display").innerHTML="";
   else{
     text="<table><tr><th> Name &emsp;&emsp;</th> <th> Category &emsp;&emsp;</th><th> MRP &emsp;&emsp;</th><th> quantity </th></tr>";
     for(j=0;j<all.length;j++)
     {
      all[j].forEach((element) => {
    
      if(re.test(element.name))
      {  cartIt.push(element);
         text+="<tr><td>"+element.name+"</td><td>"+element.clas+"</td><td>"+element.price+"</td><td><input class='quan' type='number' min='0' max='5' id="+element.name+"></td></tr>"; 
         //max quantity of each item for 1 user is 5
      }
     });
     }
     text+="</table>";
     document.getElementById("display").innerHTML=text;
    }
}

function myReset(){
    document.getElementById("display").innerHTML="";
    document.getElementById("myInput").value="";   
    cartIt.length=0;
}

function toCart(){
   cartIt.forEach((element)=>{
       var quantity=document.getElementById(element.name).value;
       if(quantity>0)
       {
    //    if(finalIt.has(element))
    //    {
    //     console.log(element.quant);
    //     element.quant=element.quant - -document.getElementById(element.name).value;
    //    }
    //    else
    //    {
        element.quant=element.quant - -document.getElementById(element.name).value;
        finalIt.add(element);
    //    }
       }
       
   });
//    console.log(finalIt);
   var text2="";
   text2+="<table><tr><th>Name &emsp;&emsp;</th><th>Quantity</th></tr>";
        finalIt.forEach((element)=>{
            if(element.quant>0){
               text2+="<tr><td>"+element.name+"</td><td>"+element.quant+"</td></tr>";
            }
        });
    
    text2+="</table>";
    document.getElementById("cartItems").innerHTML=text2;
}

function finalList(){
 var text3="";
 var total=0;
console.log(finalIt);
 text3+="<center><table><tr><th>Name &emsp;&emsp;</th><th>Unit Price&emsp;&emsp;</th><th>Quantity&emsp;&emsp;</th><th>Sub Total&emsp;&emsp;</th></tr>";
 finalIt.forEach((element)=>{
    product=element.price*element.quant;
    console.log(product);
     text3+="<tr><td>"+element.name+"</td><td>"+element.price+"</td><td>"+element.quant+"</td><td>"+product+"</td></tr>";
     total+=product;
     product=0;
 });
 text3+="</table></center><br /> <h><center> Total ="+total+"</center></h>";
//  var text4="";
//  text4+= "Total = &emsp;"+total;
 document.getElementById("content").innerHTML=text3;
//  document.getElementById("content").innerHTML=text4;
}
