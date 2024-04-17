/* var table = document.querySelector("#demo");
var select = document.querySelector("select");
var input = document.querySelector("input")


var allData = [];


async function getPizza() {
  var res =await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
  var final = await res.json()
  console.log(final.recipes);
   

}

async function getSalad() {
    var res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=salad`)
    var final = await res.json();
    console.log(final.recipes);
   

}

function getpasta() {
    return new Promise(function (callback) {
        var myRequest = new XMLHttpRequest();
        myRequest.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pasta`);
        myRequest.send()
        myRequest.addEventListener("readystatechange", function () {
            if (myRequest.readyState === 4) {

                allData = JSON.parse(myRequest.response).recipes;
                console.log("pasta");
                callback()
            }
        })
    })

}

function done() {
    console.log("done");
}


async function fire() {
    await getPizza()
    await getSalad()
    await getpasta()
    done()
}
fire() */
// callback hell
// getPizza(function(){
//     getSalad(function(){
//         getpasta(done)
//     })
// })

// promise

// getPizza().then(function(){
//     getSalad().then(function(){
//         getpasta().then(done)
//     })
// })


// ^tack==================
/* var table=document.querySelector("#demo")
var myRequest =new XMLHttpRequest();
var allData=[]
myRequest.open("GEt","https://jsonplaceholder.typicode.com/posts")
myRequest.send()
// myRequest.readyState=0 
// myRequest.readyState=1  
// myRequest.readyState=2
// myRequest.readyState=3
// myRequest.readyState=4
myRequest.addEventListener("readystatechange",function(){
    if(myRequest.readyState===4){
    
    allData=JSON.parse(myRequest.response)
    display()
    
    }
})

function display(){
    var cartoon=``
    for( var i=0; i<allData.length ; i++){
        cartoon+=`
        <tr>
        <td>${allData[i].id}</td>
        <td>${allData[i].title}</td>
        <td>${allData[i].body}</td>
       </tr>
        `
      
    }

    table.innerHTML=cartoon
}

 */
// ^task =============

/* var table=document.querySelector("#demo")
var myRequest =new XMLHttpRequest();
var select =document.querySelector("select")
getData("tomato")
var allData=[]

// myRequest.open("GEt",`https://forkify-api.herokuapp.com/api/search?q=${key}`)
//  myRequest.send()

 myRequest.addEventListener("readystatechange",function(){
    if(myRequest.readyState===4){
    
    allData=JSON.parse(myRequest.response).recipes;
    display()
    
    }
})
 


select.addEventListener("change",function(e){
    getData(e.target.value)
})

console.log(select); */
// ==========^^
var table=document.querySelector("#demo")
var input = document.querySelector("input")
var allData=[]
getData("tomato")

var select =document.querySelector("select")
function getData(key) {

    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${key}`);
    myRequest.send()
    myRequest.addEventListener("readystatechange", function () {
        if (myRequest.readyState === 4) {

          allData = JSON.parse(myRequest.response).recipes;
            
            display()
        }
    })
}

select.addEventListener("change",function(e){
    getData(e.target.value)
    console.log(e.target.value);
})
input.addEventListener("blur",function(e){
    getData(input.value)
})

function display(){
    var cartoon=``
    for( var i=0; i<allData.length ; i++){
        cartoon+=`
        <div class="col-md-4">
        <div class="item">
            <img class="w-100" src="${allData[i].image_url}" alt="">
            <p>${allData[i].title}</p>
        </div>
    </div>
        `
      
    }

    table.innerHTML=cartoon
}
console.log();