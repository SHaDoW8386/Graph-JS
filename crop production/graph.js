//---------------------- PIE CHART ---------------------------
var colors = ['blue', 'rgba(255, 144, 14, 1)', 'green', 'red']

function pie1(x_axis, y_axis, name){
    var datapie = [{
        values: y_axis,
        labels: x_axis,
        name: name,
        hoverinfo: 'value+percent+name',
        textinfo: "value",
        textposition: "inside",
        hole: .4,
        type: 'pie'
      }];
      
      var layout = {
        annotations: [
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'CROP',
            x: 0.12,
            y: 0.5
          }
        ],
        height: 700,
        showlegend: true,
      };
      
      Plotly.newPlot('myDiv', datapie, layout);
}

function pie2(x_axis, y_axis, x_axis1, y_axis1, n1, n2){
  var datapie = [{
      values: y_axis,
      labels: x_axis,
      domain: {column: 0},
      name: n1,
      hoverinfo: 'value+percent+name',
      textinfo: "value",
      textposition: "inside",
      hole: .4,
      type: 'pie'
    },{
      values: y_axis1,
      labels: x_axis1,
      domain: {column: 1},
      name: n2,
      hoverinfo: 'value+percent+name',
      textinfo: "value",
      textposition: "inside",
      hole: .4,
      type: 'pie'
    }];
    
    var layout = {
      height: 700,
      showlegend: true,
      grid: {rows: 1, columns: 2},

    };
    
    Plotly.newPlot('myDiv', datapie, layout);
}

//---------------------------------BAR CHART---------------------------------------------------
function bar1(x_axis, y_axis, n1){
    var trace1 = {
        x: x_axis,
        y: y_axis,
        name: n1,
        type: 'bar',
        marker:{
          color:"red",
        }
      };
      
      var databar = [trace1];
      
      var layout = {
        // title:"MANDI BHAVV",
        xaxis:{
            title:"DATE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: themes[0]
              },
              color:themes[0],
              gridcolor:themes[3],
            
        },
        yaxis:{
            title:"PRICE",
            color:themes[0],
            gridcolor:themes[3],
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: themes[0]
              },
        },
        hovermode:"x unified",
        barmode: 'group',
        // width: 800,
        paper_bgcolor:themes[1],
        plot_bgcolor:themes[2],
        height:700
        };
      
      Plotly.newPlot('myDiv', databar, layout);
}

function bar2(x_axis, y_axis, x_axis1, y_axis1, n1, n2){ 

    var databar = [{
      x: x_axis,
      y: y_axis,
      name: n1,
      type: 'bar',
      marker:{
        color:"red"
      }
    },{
      x: x_axis1,
      y: y_axis1,
      name: n2,
      type: 'bar',
      marker:{
        color:"blue"
      }
    }];
      
    var layout = {
      // title:"MANDI BHAVV",
      xaxis:{
          title:"DATE",
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: themes[0]
            },
            color:themes[0],
            gridcolor:themes[3],
          
      },
      yaxis:{
          title:"PRICE",
          color:themes[0],
          gridcolor:themes[3],
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: themes[0]
            },
      },
      hovermode:"x unified",
      barmode: 'group',
      // width: 800,
      paper_bgcolor:themes[1],
      plot_bgcolor:themes[2],
      height:700
      };
    
    Plotly.newPlot('myDiv', databar, layout);
}

//---------------------------------LINE CHART-------------------------------------------------

function line1(x_axis, y_axis, n1){
    var Min = {
        x: x_axis,
        y: y_axis,
        type: 'scatter',
        name: n1,
        hoverinfo:"name+y",
        line: {shape: 'spline',width:5, color:'blue'},
        marker: {
          color: 'black',
          size: 10
        },
      };
      var datum = [Min];
      var layout = {
        height: 700,
        // title:"MANDI BHAVV",
        xaxis:{
            title:"DATE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: themes[0]
              },
            color:themes[0],
            gridcolor:themes[3],
            
        },
        yaxis:{
            title:"PRICE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: themes[0]
              },
              gridcolor:themes[3],
              color:themes[0],
        },
        hovermode:"x unified",
        // width: 800,
        paper_bgcolor:themes[1],
        plot_bgcolor:themes[2]
        // grid: {rows: 2, columns: 2}
      };
      Plotly.newPlot('myDiv', datum, layout);
}

function line2(x_axis, y_axis, x_axis1, y_axis1, n1, n2){
    var datum = [{
      x: x_axis,
      y: y_axis,
      type: 'scatter',
      name: n1,
      hoverinfo:"name+y",
      line: {shape: 'spline',width:5, color:'red'},
      marker: {
        color: 'black',
        size: 10
      },
    },{
      x: x_axis1,
      y: y_axis1,
      type: 'scatter',
      name: n2,
      hoverinfo:"name+y",
      line: {shape: 'spline',width:5, color:'blue'},
      marker: {
        color: 'black',
        size: 10
      },
    }];
    var layout = {
      height: 700,
      // title:"MANDI BHAVV",
      xaxis:{
          title:"DATE",
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: themes[0]
            },
          color:themes[0],
          gridcolor:themes[3],
          
      },
      yaxis:{
          title:"PRICE",
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: themes[0]
            },
            gridcolor:themes[3],
            color:themes[0],
      },
      hovermode:"x unified",
      // width: 800,
      paper_bgcolor:themes[1],
      plot_bgcolor:themes[2]
      // grid: {rows: 2, columns: 2}
    };
    Plotly.newPlot('myDiv', datum, layout);
}



//--------------------------------BUBBLE CHART-----------------------------------------------

function bubble1(x_axis, y_axis, n1){
    var trace1 = {
        x: x_axis,
        y: y_axis,
        mode: 'markers',
        name: n1,
        marker: {
        size: y_axis,
        sizemode: 'area'
        }
    };
    
    var databubble = [trace1];
    
    var layout = {
      // title: 'MANDI BHAVV',
      xaxis:{
          title:"DATE",
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: themes[0]
            },
            color:themes[0],
            gridcolor:themes[3],

          
      },
      yaxis:{
          title:"PRICE",
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: themes[0]
            },
          color:themes[0],
          gridcolor:themes[3],
      },
      showlegend: true,
      hovermode:"x unified",
      height: 700,
      // width: 800,
      paper_bgcolor:themes[1],
      plot_bgcolor:themes[2]
      // width: 600
  };
    
    Plotly.newPlot('myDiv', databubble, layout);
}


function bubble2(x_axis, y_axis,x_axis1,y_axis1, n1, n2){
  var trace1 = {
      x: x_axis,
      y: y_axis,
      mode: 'markers',
      name: n1,
      marker: {
      size: y_axis,
      sizemode: 'area'
      }
  };
  var trace2 = {
    x: x_axis1,
    y: y_axis2,
    mode: 'markers',
    name: n2,
    marker: {
    size: y_axis2,
    sizemode: 'area'
    }
};
  var databubble = [trace1, trace2];
  
  var layout = {
    // title: 'MANDI BHAVV',
    xaxis:{
        title:"DATE",
        tickfont: {
            family: 'Old Standard TT, serif',
            size: 14,
            color: themes[0]
          },
          color:themes[0],
          gridcolor:themes[3],

        
    },
    yaxis:{
        title:"PRICE",
        tickfont: {
            family: 'Old Standard TT, serif',
            size: 14,
            color: themes[0]
          },
        color:themes[0],
        gridcolor:themes[3],
    },
    showlegend: true,
    hovermode:"x unified",
    height: 700,
    // width: 800,
    paper_bgcolor:themes[1],
    plot_bgcolor:themes[2]
    // width: 600
};
  
  Plotly.newPlot('myDiv', databubble, layout);
}