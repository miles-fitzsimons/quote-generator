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
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();



