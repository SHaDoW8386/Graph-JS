var search_city = ["Mandla", "Mandsaur", "Indore", "Dewas", "Ujjain", "Jabalpur", "Shimla", "Manipur", "Khandwa", "Khargone", "Mumbai", "Delhi","Udaipur"];
var search_state = ["Madhya Pradesh", "Bihar", "Punjab", "Rajasthan", "Maharastra", "Uttar Pradesh", "Gujarat"]
var search_crop = ["Soybean", "Rice", "Bean", "Peas", "Gram", 'Wheat']



function autocompleteMatch(input, q) {
  if(q=="city"){
    var sear = search_city
  }else if(q=="state"){
    var sear = search_state
  }else if(q=="crop"){
    var sear = search_crop
  }
  if (input == '') {
    return sear;
  }
  var reg = new RegExp(input)
  return sear.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}


window.onload = function(){
showQuery("","city");
showQuery("","state");
showQuery("","crop");
}


function showQuery(val, q) {
  if(q=="city"){
    var res = document.getElementById("show-city");
  }else if(q=="state"){
    var res = document.getElementById('show-state')
  }else if(q=="crop"){
    var res = document.getElementById('show-crop')
  }
  res.innerHTML = '';
  let list = '';
  // console.log(val)
  var terms = autocompleteMatch(val, q)
  // console.log(terms)
  for (i=0; i<terms.length; i++) {
    // console.log(list)
    list += '<button class="button-option" id="'+q+''+i+'" onclick="send(this.id, '+q+')">' + terms[i] + '</button>';
  }
  res.innerHTML = list;
  // console.log(q)
}

function send(atr, q){
  var attr = document.getElementById(atr)
  q.value = attr.innerText;
  // console.log( atr, q)  
}

// document.querySelector('#form1').addEventListener("submit", function(event){
//     event.preventDefault();
// });

// document.querySelector('#form2').addEventListener("submit", function(event){
//   event.preventDefault();
// });
// document.querySelector('#form3').addEventListener("submit", function(event){
//   event.preventDefault();
// });
// document.querySelector('#form4').addEventListener("submit", function(event){
//   event.preventDefault();
// });


function myFunction(n) {
  var n = n-1
  var hide = document.getElementsByClassName("hide")
  var drops = document.getElementsByClassName("drop")
  for(var i=0; i<hide.length; i++){
    if(i==n & hide[i].style.display=="none"){
      hide[i].style.display="flex"
      drops[i].classList.remove("fa-chevron-up")
      drops[i].classList.add("fa-chevron-down")
    }else if(i==n & hide[i].style.display=="flex"){
      hide[i].style.display="none"
      drops[i].classList.remove("fa-chevron-down")
      drops[i].classList.add("fa-chevron-up")
    }else if(i!=n & drops[i].classList[2]=="fa-chevron-down"){
      hide[i].style.display="none"
      drops[i].classList.remove("fa-chevron-down")
      drops[i].classList.add("fa-chevron-up")
    }else{
      hide[i].style.display="none"
    }
  }
}


//********************** For Graph *****************************************

let cha = [];

function myCharData(){
var cdata =  fetch('./data.json')
return cdata

}

var character = []
var data = myCharData()
data.then(response => response.json())
.then((data) => {
  cha.push(data['Madhya Pradesh'])
  // cha = data;
} )


// console.log(d)
console.log(cha)






var Min = {
  x: [20, 21, 22, 23, 24, 25],
  y: [1500, 1550, 1370, 1780, 1580, 1600],
  type: 'scatter',
  line: {shape: 'spline',width:5, color:'blue'},
  marker: {
    color: 'black',
    size: 15
  },
};

var Max = {
  x: [20, 21, 22, 23, 24, 25],
  y: [2160, 2250, 2110, 1920, 2000, 2060],
  type: 'scatter',
  line: {shape: 'spline',width:5, color:'red'},
  marker: {
    color: 'black',
    size: 15
  },
};

var Avg = {
  x: [20, 21, 22, 23, 24, 25],
  y: [1700, 1850, 1690, 1870, 1800, 1750],
  type: 'scatter',
  line: {shape: 'spline',width:5, color:'green'},
  marker: {
    color: 'black',
    size: 15
  },
  
};

var layout = {
  // width: 500,
  height: 650
};

var datum = [Min, Max, Avg];

Plotly.newPlot('myDiv', datum, layout);