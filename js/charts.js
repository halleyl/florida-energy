google.charts.load('current', {'packages':['corechart', 'line']});

// Call functions for HTTP request functions
// (which call and pass the data to the draw functions)
google.charts.setOnLoadCallback(getRenewData);
google.charts.setOnLoadCallback(getConsData);


function drawRenewChart(freshRenewData) {
  freshRenewData.unshift(["Year", "Billion BTUs"])
  var data = google.visualization.arrayToDataTable(freshRenewData);

  var options = {
    title: 'Renewable energy production in Florida',
    titleTextStyle: {fontSize: '16'},
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0},
    width: '100%',
    height: '400',
    chartArea: {'width': '70%', 'height': "80%"},
    legend: {position: 'top'},
    colors: ['#00784b','#46a877'],
    hAxis: {direction: -1},
    animation: {duration: 1000, startup: true},
    backgroundColor: '#f9f9f9'
  };

  var chart = new google.visualization.AreaChart(document.getElementById('renewable'));
  chart.draw(data, options);
}

// HTTP Request
function getRenewData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // Set HTTP Request URL
  let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=SEDS.REPRB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theRenewData = JSON.parse(request.response).series[0].data
    
    drawRenewChart(theRenewData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}

// Energy Consumption Chart

function drawConsChart(freshConsData) {
  freshConsData.unshift(["Year", "Billion BTUs"])

  var data = google.visualization.arrayToDataTable(freshConsData);
  var options = {
    title: 'Electricity total consumption in Florida',
    titleTextStyle: {fontSize: '16'},
    width: '100%',
    height: 400,
    chartArea: {'width': '70%', 'height': "80%"},
    legend: {position: 'top'},
    hAxis: {direction: -1},
    colors: ['#981c1e'],
    animation: {duration: 1000, startup: true},
    backgroundColor: '#f9f9f9'
  };

  var chart = new google.visualization.LineChart(
    document.getElementById('consumption'));

  chart.draw(data, options);
}

// HTTP Request
function getConsData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // Set HTTP Request URL
  let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=SEDS.TETCB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theConsData = JSON.parse(request.response).series[0].data
    
    drawConsChart(theConsData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}