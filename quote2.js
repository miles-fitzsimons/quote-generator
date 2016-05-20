var httpRequest;
window.onload = function() {newQuote();};
document.getElementById("quoteButton").onclick = function() {newQuote();};

function newQuote() {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = updateQuote;
  httpRequest.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com/');
  httpRequest.setRequestHeader("X-Mashape-Key", "2cJjNPHfNImsh7r7hCWdaCUk3qapp1N8cqzjsn3sjzC5iHvhV0");
  httpRequest.send();
}

function updateQuote() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest);
      var newQuote = JSON.parse(httpRequest.response);
      document.getElementById("quoteText").innerHTML = newQuote.quote;
      document.getElementById("author").innerHTML = "~ " + newQuote.author;
      updateTweetButtonText("\"" + newQuote.quote + "\"" + " - " + newQuote.author);
    }
    else {
      document.getElementById("quoteText").innerHTML = "Error";
      document.getElementById("author").innerHTML = "Error";
    }
  }
}

function updateTweetButtonText(message) {
  var tweetButton = document.getElementById('tweet-button');
  tweetButton.src = tweetButton.src.replace(/&text=[^&]+/, "&text=" + encodeURIComponent(message) );
}