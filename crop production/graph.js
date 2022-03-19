//---------------------- PIE CHART ---------------------------

function pie1(x_axis, y_axis){
    var datapie = [{
        values: y_axis,
        labels: x_axis,
        name: 'MIN',
        hoverinfo: 'value+percent+name',
        textinfo: "value",
        textposition: "inside",
        hole: .4,
        type: 'pie'
      }];
      
      var layout = {
        title: 'CROP PRODUCTION',
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
        height: 600,
        showlegend: true,
      };
      
      Plotly.newPlot('myDiv', datapie, layout);
}

function pie2(x_axis, y_axis, x_axis1, y_axis1, v1, v2){
  var datapie = [{
      values: y_axis,
      labels: x_axis,
      domain: {column: 0},
      name: 'Village 1',
      hoverinfo: 'value+percent+name',
      textinfo: "value",
      textposition: "inside",
      hole: .4,
      type: 'pie'
    },{
      values: y_axis1,
      labels: x_axis1,
      domain: {column: 1},
      name: 'Village 2',
      hoverinfo: 'value+percent+name',
      textinfo: "value",
      textposition: "inside",
      hole: .4,
      type: 'pie'
    }];
    
    var layout = {
      title: 'CROP PRODUCTION',
      height: 600,
      showlegend: true,
      grid: {rows: 1, columns: 2},

    };
    
    Plotly.newPlot('myDiv', datapie, layout);
}

//---------------------------------BAR CHART---------------------------------------------------
function bar1(x_axis, y_axis){
    var trace1 = {
        x: x_axis,
        y: y_axis,
        name: 'CROP',
        type: 'bar'
      };
      
      var databar = [trace1];
      
      var layout = {
        title:"CROP PRODUCTION",
        xaxis:{
            title:"CROP",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
            
        },
        yaxis:{
            title:"PRODUCTION",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
        },
        barmode: 'group',
        hovermode:"x unified",
        height:600
        };
      
      Plotly.newPlot('myDiv', databar, layout);
}

function bar2(x_axis, y_axis, x_axis1, y_axis1){ 

    var databar = [{
      x: x_axis,
      y: y_axis,
      name: 'Village 1',
      type: 'bar'
    },{
      x: x_axis1,
      y: y_axis1,
      name: 'village 2',
      type: 'bar'
    }];
    
    var layout = {
      title:"CROP PRODUCTION",
      xaxis:{
          title:"CROP",
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: 'black'
            },
          
      },
      yaxis:{
          title:"PRODUCTION",
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: 'black'
            },
      },
      barmode: 'group',
      height:600
      };
    
    Plotly.newPlot('myDiv', databar, layout);
}

//---------------------------------LINE CHART-------------------------------------------------

function line1(x_axis, y_axis){
    var Min = {
        x: x_axis,
        y: y_axis,
        type: 'scatter',
        name: "CROP",
        hoverinfo:"name+y",
        line: {shape: 'spline',width:5, color:'blue'},
        marker: {
          color: 'black',
          size: 10
        },
      };
      var datum = [Min];
      var layout = {
        height: 600,
        title:"CROP PRODUCTION",
        xaxis:{
            title:"CROP",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
            tickangle:-45,
        },
        yaxis:{
            title:"PRODUCTION",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
          
        },
      };
      Plotly.newPlot('myDiv', datum, layout);
}

function line2(x_axis, y_axis, x_axis1, y_axis1){
    console.log(x_axis)
    console.log(y_axis)
    console.log(x_axis1)
    console.log(y_axis1)
    var datum = [{
      x: x_axis,
      y: y_axis,
      type: 'scatter',
      name: "Village 1",
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
      name: "Village 2",
      hoverinfo:"name+y",
      line: {shape: 'spline',width:5, color:'blue'},
      marker: {
        color: 'black',
        size: 10
      },
    }];
    var layout = {
      height: 600,
      title:"CROP PRODUCTION",
      xaxis:{
          title:"CROP",
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: 'black'
            },
          tickangle:-45,
      },
      yaxis:{
          title:"PRODUCTION",
          tickfont: {
              family: 'Old Standard TT, serif',
              size: 14,
              color: 'black'
            },
        
      },
      hovermode:"x unified",
    };
    Plotly.newPlot('myDiv', datum, layout);
}



//--------------------------------BUBBLE CHART-----------------------------------------------

function bubble1(x_axis, y_axis){
    var trace1 = {
        x: x_axis,
        y: y_axis,
        mode: 'markers',
        marker: {
        size: y_axis,
        sizemode: 'area'
        }
    };
    
    var databubble = [trace1];
    
    var layout = {
        title: 'CROP PRODUCTION',
        xaxis:{
            title:"CROP",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
              tickangle:-45
            
        },
        yaxis:{
            title:"PRODUCTION",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
        },
        hovermode:"x unified",
        showlegend: true,
        height: 600,
        // width: 600
    };
    
    Plotly.newPlot('myDiv', databubble, layout);
}