var search_city = ["Jabalpur", "Indore", "Bhopal", "Varanasi", "Lucknow"]
var search_state = ["Madhya Pradesh", "Uttar Pradesh"]
var search_v1 = []
var search_v2 = []
var search_graph = ["LINE", "PIE", "BAR", "BUBBLE"]
var state = document.getElementById("state")
var city = document.getElementById("city")
var v1 = document.getElementById("village1")
var v2 = document.getElementById("village2")
var graph = document.getElementById("graph")
var select_state = window.state.value
var select_city = window.city.value
var select_v1 = window.v1.value
var select_v2 = window.v2.value
var select_graph = window.graph.value

function myCharData(){
  var cdata =  fetch('./data.json')
  return cdata
  }


function autocompleteMatch(input, q) {
  if(q=="city"){
    var sear = search_city
  }else if(q=="state"){
    var sear = search_state
  }else if(q=="village1"){
    var sear = search_v1
  }else if(q=="village2"){
    var sear = search_v2
  }else if(q=="graph"){
    var sear = search_graph
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
showQuery("","village1");
showQuery("","village2");
showQuery("","graph");
graphs(select_state, select_city, select_v1, select_v2, select_graph);

}


function showQuery(val, q) {
  if(q=="city"){
    var res = document.getElementById("show-city");
  }else if(q=="state"){
    var res = document.getElementById('show-state')
  }else if(q=="village1"){
    var res = document.getElementById('show-village1')
  }else if(q=="village2"){
    var res = document.getElementById('show-village2')
  }else if(q=="graph"){
    var res = document.getElementById('show-graph')
  }
  res.innerHTML = '';
  let list = '';
  var terms = autocompleteMatch(val, q)
  for (i=0; i<terms.length; i++) {
    list += '<button class="button-option" id="'+q+''+i+'" onclick="send(this.id, '+q+')">' + terms[i] + '</button>';
  }
  res.innerHTML = list;
}

function send(atr, q){
  var attr = document.getElementById(atr)
  q.value = attr.innerText;
}


//---------------------------------------------FIRST FORM SUBMIT------------------------------------------------------------------

document.querySelector('#form1').addEventListener("submit", function(event){
    event.preventDefault();
    var select_state = window.state.value
    var select_city = window.city.value
    var select_v1 = window.v1.value
    var select_v2 = window.v2.value
    var select_graph = window.graph.value
    window.search_city = []
    window.search_v1 = []
    window.search_v2 = []
    var data = myCharData()
    data.then(response => response.json())
    .then((data) => {
      var datum_city = Object.keys(data[select_state])
      for(var i in datum_city){
        if(datum_city[i]!="data"){
          window.search_city.push(datum_city[i])
          console.log(datum_city[i])
        }
      }
      showQuery("","city");
      graphs(select_state, select_city, select_v1, select_v2, select_graph);
      myFunction(1)
      document.getElementById("graph-city").innerHTML = select_city
      document.getElementById("graph-crop").innerHTML = select_v1
    })
});


//-----------------------------------------SECOND FORM SUBMIT-------------------------------------------------------

document.querySelector('#form2').addEventListener("submit", function(event){
    event.preventDefault();
    window.v1.value = ""
    window.v2.value = ""
    var select_state = window.state.value
    var select_city = window.city.value
    var select_v1 = window.v1.value
    var select_v2 = window.v2.value
    var select_graph = window.graph.value
    window.search_v1 = []
    window.search_v2 = []
    var data = myCharData()
    data.then(response => response.json())
    .then((data) => {
      if(select_state==""){
        console.log(select_state)
        new $.Zebra_Dialog('SELECT STATE FIRST!', {
          custom_class: "myclass",
          title: "WARNING!!"
        });
        myFunction(2)
        window.city.value="";
        return undefined;
      }
        var datum_v1 = Object.keys(data[select_state][select_city])
        for(var i in datum_v1){
          if(datum_v1[i]!="data"){
            window.search_v1.push(datum_v1[i])
            console.log(datum_v1[i])
          }
        } 
      
        var datum_v2 = Object.keys(data[select_state][select_city])
        for(var i in datum_v2){
          if(datum_v2[i]!="data"){
            window.search_v2.push(datum_v2[i])
            console.log(datum_v2[i])
          }
        } 
      showQuery("", "village1")
      showQuery("","village2")
      graphs(select_state, select_city, select_v1, select_v2, select_graph);
      myFunction(2)
      document.getElementById("graph-city").innerHTML = select_state
      document.getElementById("graph-crop").innerHTML = select_city
    })
    
});


//---------------------------------V1 FORM SUBMIT----------------------------------------------------

document.querySelector('#form3').addEventListener("submit", function(event){
  event.preventDefault();
  var select_state = window.state.value
  var select_city = window.city.value
  var select_v1 = window.v1.value
  var select_v2 = window.v2.value
  var select_graph = window.graph.value
  window.search_v2=[]
  var data = myCharData()
    data.then(response => response.json())
    .then((data) => {
        var datum_v2 = Object.keys(data[select_state][select_city])
        for(var i in datum_v2){
          if(datum_v2[i]=="data"){
            continue;
          }else if(datum_v2[i]==select_v1){
            continue;
          }else{
            window.search_v2.push(datum_v2[i])
          }
        }
      console.log()
      showQuery("", "village2")
      graphs(select_state, select_city, select_v1, select_v2, select_graph);
      myFunction(3)
    document.getElementById("graph-city").innerHTML = select_city
    document.getElementById("graph-crop").innerHTML = select_v1
  })
});

//-------------------------------V2 FORM SUBMIT-----------------------------------------------------

document.querySelector('#form5').addEventListener("submit", function(event){
  event.preventDefault();
  var select_state = window.state.value
  var select_city = window.city.value
  var select_v1 = window.v1.value
  var select_v2 = window.v2.value
  var select_graph = window.graph.value
  window.search_v1=[]
  var data = myCharData()
  
    data.then(response => response.json())
    .then((data) => {
        var datum_v1 = Object.keys(data[select_state][select_city])
        for(var i in datum_v1){
          if(datum_v1[i]=="data"){
            continue;
          }else if(datum_v1[i]==select_v2){
            console.log(datum_v1[i], "SDFFFFFFFFff")
            continue;
          }else{
            window.search_v1.push(datum_v1[i])
          }
        }
      console.log(search_v1)
      showQuery("", "village1")
      graphs(select_state, select_city, select_v1, select_v2, select_graph);
      myFunction(4)
    document.getElementById("graph-city").innerHTML = select_v1
    document.getElementById("graph-crop").innerHTML = select_v2
  })
});
//------------------------------GRAPH SELECT--------------------------------------------------------
document.querySelector('#form4').addEventListener("submit", function(event){
  event.preventDefault();
  var select_state = window.state.value
  var select_city = window.city.value
  var select_v1 = window.v1.value
  var select_v2 = window.v2.value
  var select_graph = window.graph.value
  // console.log(select_state, select_city, select_crop, select_graph)
  graphs(select_state, select_city, select_v1, select_v2, select_graph);
  myFunction(5)
});


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


function graphs(state, city, v1, v2, graph){
  var data = myCharData()
  data.then(response => response.json())
  .then((data) => {

    if(state=="" & city=="" & v1=="" & v2==""){
      var x_axis = Object.keys(data["data"])
      var y_axis = Object.values(data["data"])
      if(graph=="PIE"){
        pie1(x_axis, y_axis)
      }else if(graph=="LINE"){
        line1(x_axis, y_axis)
      }else if(graph=="BAR"){
        bar1(x_axis, y_axis)
      }else if(graph=="BUBBLE"){
        bubble1(x_axis, y_axis)
      }
    }else if(state!="" & city=="" & v1=="" & v2==""){
      var x_axis = Object.keys(data[state]["data"])
      var y_axis = Object.values(data[state]["data"])
      if(graph=="PIE"){
        pie1(x_axis, y_axis)
      }else if(graph=="LINE"){
        line1(x_axis, y_axis)
      }else if(graph=="BAR"){
        bar1(x_axis, y_axis)
      }else if(graph=="BUBBLE"){
        bubble1(x_axis, y_axis)
      }
    }else if(state!="" & city!="" & v1=="" & v2==""){
      var x_axis = Object.keys(data[state][city]['data'])
      var y_axis = Object.values(data[state][city]['data'])
      if(graph=="PIE"){
        pie1(x_axis, y_axis)
      }else if(graph=="LINE"){
        line1(x_axis, y_axis)
      }else if(graph=="BAR"){
        bar1(x_axis, y_axis)
      }else if(graph=="BUBBLE"){
        bubble1(x_axis, y_axis)
      }
    }else if(state!="" & city!="" & v1!="" & v2==""){
      var x_axis = Object.keys(data[state][city][v1])
      var y_axis = Object.values(data[state][city][v1])
      if(graph=="PIE"){
        pie1(x_axis, y_axis)
      }else if(graph=="LINE"){
        line1(x_axis, y_axis)
      }else if(graph=="BAR"){
        bar1(x_axis, y_axis)
      }else if(graph=="BUBBLE"){
        bubble1(x_axis, y_axis)
      }
    }else if(state!="" & city!="" & v1!="" & v2!=""){
      var x_axis = Object.keys(data[state][city][v1])
      var y_axis = Object.values(data[state][city][v1])
      var x_axis1 = Object.keys(data[state][city][v2])
      var y_axis1 = Object.values(data[state][city][v2])
      if(graph=="PIE"){
        pie2(x_axis, y_axis, x_axis1, y_axis1, v1, v2)
      }else if(graph=="LINE"){
        line2(x_axis, y_axis, x_axis1, y_axis1)
      }else if(graph=="BAR"){
        bar2(x_axis, y_axis, x_axis1, y_axis1)
      }else if(graph=="BUBBLE"){
        bubble2(x_axis, y_axis, x_axis1, y_axis1)
      }
    }
})
}