//---------------------- PIE CHART ---------------------------

function pie(min, max, avg, x_axis){
    var datapie = [{
        values: min,
        labels: x_axis,
        domain: {column: 0},
        name: 'MIN',
        hoverinfo: 'value+percent+name',
        textinfo: "value",
        textposition: "inside",
        hole: .4,
        type: 'pie'
      },{
        values: max,
        labels: x_axis,
        domain: {column: 1},
        name: 'MAX',
        hoverinfo: 'value+percent+name',
        textinfo: "value",
        textposition: "inside",
        hole: .4,
        type: 'pie'
      },{
        values: avg,
        labels: x_axis,
        domain: {column: 2},
        textinfo: "value",
        textposition: "inside",
        name: 'AVG',
        hoverinfo: 'value+percent+name',
        hole: .4,
        type: 'pie'
      }];
      
      var layout = {
        title: 'MANDI BHAVV',
        annotations: [
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'MIN',
            x: 0.12,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'MAX',
            x: 0.5,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'AVG',
            x: 0.87,
            y: 0.5
          }
        ],
        height: 600,
        // width: 600,
        showlegend: true,
        grid: {rows: 1, columns: 3}
      };
      
      Plotly.newPlot('myDiv', datapie, layout);
      

}




//---------------------------------BAR CHART---------------------------------------------------
function bar(min, max, avg, x_axis){
    var trace1 = {
        x: x_axis,
        y: min,
        name: 'MIN',
        type: 'bar'
      };
      
      var trace2 = {
        x: x_axis,
        y: max,
        name: 'MAX',
        type: 'bar'
      };

      var trace3 = {
        x: x_axis,
        y: avg,
        name: 'AVG',
        type: 'bar'
      };
      
      var databar = [trace1, trace2, trace3];
      
      var layout = {
        title:"MANDI BHAVV",
        xaxis:{
            title:"DATE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
            
        },
        yaxis:{
            title:"PRICE",
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

function line(min, max, avg, x_axis){
    var Min = {
        x: x_axis,
        y: min,
        type: 'scatter',
        name: "MIN",
        hoverinfo:"name+y",
        line: {shape: 'spline',width:5, color:'blue'},
        marker: {
          color: 'black',
          size: 10
        },
      };
    
      var Max = {
        x: x_axis,
        y: max,
        type: 'scatter',
        name: "MAX",
        line: {shape: 'spline',width:5, color:'red'},
        marker: {
          color: 'black',
          size: 10
        },
      };
    
      var Avg = {
        x: x_axis,
        y: avg,
        type: 'scatter',
        name: "AVG",
        line: {shape: 'spline',width:5, color:'green'},
        marker: {
          color: 'black',
          size: 10
        },
        
      };
    
      var datum = [Min, Max, Avg];

      var layout = {
        height: 600,
        title:"MANDI BHAVV",
        xaxis:{
            title:"DATE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
            
        },
        yaxis:{
            title:"PRICE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
        },
        // width: 800,
        // grid: {rows: 2, columns: 2}
      };

      Plotly.newPlot('myDiv', datum, layout);
}



//--------------------------------BUBBLE CHART-----------------------------------------------

function bubble(min, max, avg, x_axis){
    var trace1 = {
        x: x_axis,
        y: min,
        text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
        mode: 'markers',
        marker: {
        size: [400, 600, 800, 1000, 1100, 1200],
        sizemode: 'area'
        }
    };
    
    var trace2 = {
        x: x_axis,
        y: max,
        text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
        mode: 'markers',
        marker: {
        size: [400, 600, 800, 1000, 1100, 1200],
        //setting 'sizeref' to lower than 1 decreases the rendered size
        // sizeref: 2,
        sizemode: 'area'
        }
    };
    
    var trace3 = {
        x: x_axis,
        y: avg,
        text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
        mode: 'markers',
        marker: {
        size: [400, 600, 800, 1000, 1100, 1200],
        //setting 'sizeref' to less than 1, increases the rendered marker sizes
        // sizeref: 0.2,
        sizemode: 'area'
        }
    };
    
    var databubble = [trace1, trace2, trace3];
    
    var layout = {
        title: 'MANDI BHAVV',
        xaxis:{
            title:"DATE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
            
        },
        yaxis:{
            title:"PRICE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: 'black'
              },
        },
        showlegend: true,
        height: 600,
        // width: 600
    };
    
    Plotly.newPlot('myDiv', databubble, layout);
}