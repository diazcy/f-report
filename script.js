

function sendData() {
    var http = new XMLHttpRequest();
    var url = "https://www.olx.ph/ajax/tracking/hermesactionstrackingaddurl/";
    var username = 'admin';
    chrome.storage.sync.get({
      username: 'admin'
    }, function(items) {
      var params = "username="+items.username+"&url="+window.location.href;
      http.open("POST", url, true);

      //Send the proper header information along with the request
      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      //http.setRequestHeader("Content-length", params.length);
      //http.setRequestHeader("Connection", "close");

      http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
              document.getElementById('hermesUrlStoreInfo').innerText='[OLX PH: URL SAVED]';

        }
      }
      http.send(params);

    });



}

var saved = 0;
var _pushInfo = document.createElement('div');
_pushInfo.innerHTML = '<h1 id="hermesUrlStoreInfo" style="color:#FF0000!important"></h1>';
x=document.getElementsByClassName("hermes-header");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].prepend(_pushInfo);
}

document.onkeyup=function(e){
    if (saved) {
            document.getElementById('hermesUrlStoreInfo').innerText='[OLX PH: URL SAVED]';
    } else {
        var e = e || window.event; // for IE to cover IEs window object
        if(e.altKey && e.which == 65) {



            sendData();
            saved = 1;
            return false;
        }

    }
}
