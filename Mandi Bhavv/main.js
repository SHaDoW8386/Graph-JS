
var search_city = ["Mandla", "Mandsaur", "Indore", "Dewas", "Ujjain", "Jabalpur", "Shimla", "Manipur", "Khandwa", "Khargone", "Mumbai", "Delhi","Udaipur"];
var search_state = ["Madhya Pradesh", "Punjab", "Gujarat","Maharashtra"]
var search_crop = ["Soybean", "Rice", "Bean", "Peas", "Gram", 'Wheat']
var search_graph = ["LINE", "PIE", "BAR", "BUBBLE"]
var DATE = []
var state = document.getElementById("state")
var city = document.getElementById("city")
var crop = document.getElementById("crop")
var graph = document.getElementById("graph")
window.onload = function(){
  showQuery("","city");
  showQuery("","state");
  showQuery("","crop");
  showQuery("","graph");
  Dates(0,7, false);
  }
  
function myCharData(){
  var cdata =  fetch('./data.json')
  return cdata
  }


function autocompleteMatch(input, q) {
  if(q=="city"){
    var sear = search_city
  }else if(q=="state"){
    var sear = search_state
  }else if(q=="crop"){
    var sear = search_crop
  }
  else if(q=="graph"){
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





function showQuery(val, q) {
  if(q=="city"){
    var res = document.getElementById("show-city");
  }else if(q=="state"){
    var res = document.getElementById('show-state')
  }else if(q=="crop"){
    var res = document.getElementById('show-crop')
  }else if(q=="graph"){
    var res = document.getElementById('show-graph')
  }
  res.innerHTML = '';
  let list = '';
  var terms = autocompleteMatch(val, q)
  for (i=0; i<terms.length; i++) {
    list += '<button type="submit" class="button-option" id="'+q+''+i+'" onclick="send(this.id, '+q+')">' + terms[i] + '</button>';
  }
  res.innerHTML = list;
}

function send(atr, q){
  var attr = document.getElementById(atr)
  q.value = attr.innerText;
}


//---------------------------------------------FIRST FORM SUBMIT------------------------------------------------------------------
var whi = ""

function FirstContainer(whi){
  var select_state = window.state.value
  var select_city = window.city.value
  var select_crop = window.crop.value
  var select_graph = window.graph.value
  window.search_city = []
  window.search_crop = []
  var data = myCharData()
  data.then(response => response.json())
  .then((data) => {
    
    if (select_state==""){
      select_state = Object.keys(data)[0]
      window.state.value = select_state
    }
    window.search_city = Object.keys(data[select_state])
    if(select_state=="" | search_city.includes(select_city)==false){
      select_city = Object.keys(data[select_state])[0]
      window.city.value=select_city
      
    }
    window.search_crop = Object.keys(data[select_state][select_city])
    // if(select_city=="" & whi=="state"){
    // }
    if(select_crop=="" | search_crop.includes(select_crop)==false){
      select_crop = Object.keys(data[select_state][select_city])[0]
      window.crop.value=select_crop
    }
    showQuery("","city");
    showQuery("","state");
    showQuery("","crop");
    if(select_graph!=""){
      graphs(select_state, select_city, select_crop, select_graph);
    }
    myFunction(1)
    document.getElementById("graph-city").innerHTML = select_city
    document.getElementById("graph-crop").innerHTML = select_crop
  })
}


document.querySelector('#form1').addEventListener("submit", function(event){
    event.preventDefault();
    FirstContainer("state");
});


//-----------------------------------------SECOND FORM SUBMIT-------------------------------------------------------

document.querySelector('#form2').addEventListener("submit", function(event){
    event.preventDefault();
    var select_state = window.state.value
    var select_city = window.city.value
    var select_crop = window.crop.value
    var select_graph = window.graph.value
    if(select_state==""){
      new $.Zebra_Dialog('SELECT STATE FIRST!', {
        custom_class: "myclass",
        title: "WARNING!!"
      });
      myFunction(2)
      window.city.value=""
      return undefined;
    }
    window.search_crop = []
    var data = myCharData()
    data.then(response => response.json())
    .then((data) => {
      window.search_crop = Object.keys(data[select_state][select_city])
        for(var i in data){
          for(var j in data[i]){
            if(j==select_city){
              select_state = i;
              break;
            }
          }
        }
      window.state.value = select_state
      if(select_crop=="" | search_crop.includes(select_crop)==false){
        select_crop = Object.keys(data[select_state][select_city])[0]
      }

      window.crop.value = select_crop
      
      showQuery("","city");
      showQuery("","state");
      showQuery("","crop");
      if(select_graph!=""){
        graphs(select_state, select_city, select_crop, select_graph);
      }
      myFunction(2)
      document.getElementById("graph-city").innerHTML = select_city
      document.getElementById("graph-crop").innerHTML = select_crop
    })
    
});


//---------------------------------THIRD FORM SUBMIT----------------------------------------------------
document.querySelector('#form3').addEventListener("submit", function(event){
  event.preventDefault();
  var select_state = window.state.value
  var select_city = window.city.value
  var select_crop = window.crop.value
  var select_graph = window.graph.value
  var data = myCharData()
    data.then(response => response.json())
    .then((data) => {
    if(select_state==""){
      select_state = Object.keys(data)[0]
      window.state.value = select_state
    }
    if(select_city==""){
      select_city = Object.keys(data[select_state])[0]
      window.city.value = select_city
    }
    
    showQuery("","city");
    showQuery("","state");
    showQuery("","crop");

    if(select_graph!=""){
      graphs(select_state, select_city, select_crop, select_graph);
    }
    myFunction(3)
    document.getElementById("graph-city").innerHTML = select_city
    document.getElementById("graph-crop").innerHTML = select_crop
  })
});

//------------------------------GRAPH SELECT--------------------------------------------------------
document.querySelector('#form4').addEventListener("submit", function(event){
  event.preventDefault();
  var select_state = window.state.value
  var select_city = window.city.value
  var select_crop = window.crop.value
  var select_graph = window.graph.value
    if(select_state!="" & select_city!="" & select_crop!="" & select_graph!=""){
      graphs(select_state, select_city, select_crop, select_graph);
    }
  myFunction(4)
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

var getDateArray = function(start, end) {
  window.DATE = []
  var dt = new Date(start);
  while (dt <= end) {
     var dat = new Date(dt)
      window.DATE.push(moment(dat).format('YYYY-MM-DD'));
      dt.setDate(dt.getDate() + 1);
  }
  // return arr;
}

var flag=false;

function Dates(start, end, flag){
      window.DATE = []
      for (i = start; i < end; i++){
        var today = moment();
         var day = today.subtract(i, 'days');
         window.DATE.push(day.format('YYYY-MM-DD'));
      }
    if(flag){
      console.log(DATE)
      $('input[name="daterange"]').val(DATE[DATE.length-1] + ' - ' + DATE[0]); 
    FirstContainer("date");
    myFunction(1);
  }
}

$(function(){
$('input[name="daterange"]').daterangepicker({
    opens: 'left',
    placeholder:"DATE:-",
    autoUpdateInput: false,
    autoApply:true,
    locale: {
      format: 'YYYY-MM-DD',
      separator: " - ",
      cancelLabel: 'Clear'
  }
}, function(start, end, label) {
    var startDate = new Date(start.format('YYYY-MM-DD'))
    var endDate = new Date(end.format('YYYY-MM-DD'))
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    getDateArray(startDate, endDate);
    FirstContainer("date");
    myFunction(1)
});
});


$('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
  $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
});



//***************************************** For Graph *****************************************

function Modes(){
  if(city.value!="" & state.value!="" & crop.value!="" & graph.value!=""){
    graphs(state.value, city.value, crop.value, graph.value);
  }else{
    return undefined;
  }
}

function graphs(state, city, crop, graph){
  if($("input[type=checkbox][name=darktheme]").prop("checked")==true){
    themes = ["white", "#080808", '#080808' ,"#444"]
    document.getElementById("annot").style.color="white"
  }else{
    themes = ["black", "#fff", "#fff", "black"]
    document.getElementById("annot").style.color="black"
  }
  var data = myCharData()
  data.then(response => response.json())
  .then((data) => {
    var min = []
    var max = []
    var avg = []
    var x_axis = []
    var select_graph = data[state][city][crop]
    for(i in select_graph){
      if (DATE.includes(select_graph[i].date)){
        max.push(select_graph[i].max)
        min.push(select_graph[i].min)
        avg.push(select_graph[i].avg)
        x_axis.push(select_graph[i].date)
      }
    }

    if (x_axis.length==0){
      new $.Zebra_Dialog('DATA NOT AVAILABLE OF THIS DATE!', {
        custom_class: "myclass",
        title: "WARNING!!"
      });
      return undefined;
    }
    if(graph=="PIE"){
      pie(min, max, avg, x_axis, themes)
    }else if(graph=="LINE"){
      line(min, max, avg, x_axis, themes)
    }else if(graph=="BAR"){
      bar(min, max, avg, x_axis, themes)
    }else if(graph=="BUBBLE"){
      bubble(min, max, avg, x_axis, themes)
    }
})
}