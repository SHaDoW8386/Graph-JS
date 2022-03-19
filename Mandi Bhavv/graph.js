//---------------------- PIE CHART ---------------------------
var hover = "<extra><b style='color:red; border-bottom:2px solid white;'>%{xaxis.title.text}: %{x}</b><extra><br>" +
"%{yaxis.title.text}: %{y:$,.0f}<br>" +
"%{xaxis.title.text}: %{x}<br>" +
"<extra></extra>"

var hovers="<b style='color:red;'>%{y}</b>"
var colors = ['blue', 'rgba(255, 144, 14, 1)', 'green', 'red']
        


function pie(min, max, avg, x_axis){
    var datapie = [{
        values: min,
        labels: x_axis,
        domain: {column: 0},
        name: 'MIN',
        hoverinfo: 'value+label+name',
        textinfo: "value",
        textposition: "inside",
        hole: .4,
        type: 'pie'
      },{
        values: max,
        labels: x_axis,
        domain: {column: 1},
        name: 'MAX',
        hoverinfo: 'value+label+name',
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
        hoverinfo: 'value+label+name',
        hole: .4,
        type: 'pie'
      }];
      
      var layout = {
        // title: 'MANDI BHAVV',
        
        // width: 800,
        paper_bgcolor:themes[1],
        plot_bgcolor:themes[2],
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
        
        height: 700,
        // width: 600,
        showlegend: true,
        template:"plotly_dark",
        grid: {rows: 1, columns: 3},
        hovermode:"x unified",
      };
      
      Plotly.newPlot('myDiv', datapie, layout);
      

}




//---------------------------------BAR CHART---------------------------------------------------
function bar(min, max, avg, x_axis){
    var trace1 = {
        x: x_axis,
        y: min,
        name: 'MIN',
        type: 'bar',
        marker:{
          color:colors[0]
        },
        hovertemplate:"<b style='color:blue;'>%{y:$,.0f}</b>",
      };
      
      var trace2 = {
        x: x_axis,
        y: max,
        name: 'MAX',
        marker:{
          color:colors[3]
        },
        hovertemplate:"<b style='color:red;'>%{y:$,.0f}</b>",
        type: 'bar'
      };

      var trace3 = {
        x: x_axis,
        y: avg,
        name: 'AVG',
        marker:{
          color:colors[2]
        },
        type: 'bar',
        hovertemplate:"<b style='color:green;'>%{y:$,.0f}</b>",
      };
      
      var databar = [trace1, trace2, trace3];
      
      var layout = {
        // title:"MANDI BHAVV",
        xaxis:{
            title:"DATE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: themes[0]
              },
              tickangle: -45,
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

function line(min, max, avg, x_axis, themes){
    var Min = {
        x: x_axis,
        y: min,
        type: 'scatter',
        name: "MIN",
        hovertemplate:"<b style='color:blue;'>%{y:$,.0f}</b>",
        line: {shape: 'spline',width:5, color:'blue'},
        marker: {
          // color: 'black',
          size: 20,
          autocolorscale: true
        },
      };
    
      var Max = {
        x: x_axis,
        y: max,
        type: 'scatter',
        name: "MAX",
        hovertemplate:"<b style='color:red;'>%{y:$,.0f}</b>",
        line: {shape: 'spline',width:5, color:'red'},
        marker: {
          // color: 'black',
          size: 20
        },
      };
    
      var Avg = {
        x: x_axis,
        y: avg,
        type: 'scatter',
        name: "AVG",
        hovertemplate:"<b style='color:green;'>%{y:$,.0f}</b>",
        line: {shape: 'spline',width:5, color:'green'},
        marker: {
          // color: 'black',
          size: 20
        },
        
      };
    
      var datum = [Min, Max, Avg];

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
            tickangle: -45,
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

function bubble(min, max, avg, x_axis){
    var trace1 = {
        x: x_axis,
        y: min,
        // text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
        mode: 'markers',
        hovertemplate:"<b style='color:blue;'>%{y:$,.0f}</b>",
        marker: {
        size: 20,
        sizemode: 'area',
        color:colors[0],
        },
        name:"MIN"
    };
    
    var trace2 = {
        x: x_axis,
        y: max,
        // text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
        mode: 'markers',
        hovertemplate:"<b style='color:red;'>%{y:$,.0f}</b>",
        marker: {
        size: 60,
        color:colors[3],
        //setting 'sizeref' to lower than 1 decreases the rendered size
        // sizeref: 2,
        sizemode: 'area'
        },
        name:"MAX"
    };
    
    var trace3 = {
        x: x_axis,
        y: avg,
        // text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
        mode: 'markers',
        hovertemplate:"<b style='color:green;'>%{y:$,.0f}</b>",
        marker: {
        size: 40,
        color:colors[2],
        //setting 'sizeref' to less than 1, increases the rendered marker sizes
        sizeref: 0.2,
        sizemode: 'area'
        },
        name:"AVG"
    };
    
    var databubble = [trace1, trace2, trace3];
    
    var layout = {
        // title: 'MANDI BHAVV',
        xaxis:{
            title:"DATE",
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: themes[0]
              },
              tickangle: -45,
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