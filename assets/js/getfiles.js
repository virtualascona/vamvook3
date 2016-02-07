function getScript(url) {
    e = document.createElement('script');
    e.src = url;
    document.body.appendChild(e);
}

function getCss(url) {
    e = document.createElement('link');
		e.rel = "stylesheet";
		e.type = "text/css";
		e.href = url;
    document.getElementsByTagName("head")[0].appendChild(e);
}

function getFile (method,sURL, fCallback) {
  var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  oReq.open(method, sURL, true);
  oReq.send(null);
}

function xhrSuccess () { this.callback.apply(this, this.arguments); }
function xhrError () { console.error(this.statusText); }
