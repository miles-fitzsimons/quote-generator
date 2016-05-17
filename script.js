(function() {
  var httpRequest;
  document.getElementById("generateQuote").onclick = function() { makeRequest('https://andruxnet-random-famous-quotes.p.mashape.com/'); };

  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    console.log(httpRequest);

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.setRequestHeader("X-Mashape-Key", "2cJjNPHfNImsh7r7hCWdaCUk3qapp1N8cqzjsn3sjzC5iHvhV0");
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        // alert(httpRequest.responseText);
        console.log(typeof httpRequest.response);
        console.log(httpRequest.response.quote);
        var obj = JSON.parse(httpRequest.response);
        console.log(obj);
        console.log(obj.quote);
        console.log(obj.author);
        
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();



