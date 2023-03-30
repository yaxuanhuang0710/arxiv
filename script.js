document.addEventListener('mouseup', function() {
  var selection = window.getSelection();
  if (selection.type === 'Range') {
    var anchorNode = selection.anchorNode;
    var parentNode = anchorNode.parentNode;
    var id = parentNode.id;
    var classList = parentNode.classList;
    //if there is no id, than use class to identify
    var elementIdentifier = id || classList[0] || 'Unknown';

    //get the topLayer of id
    if (elementIdentifier.startsWith('S0')) {
      var topLayer = id ? id.split('.').slice(0, 2).join('.') : classList[0];
      }
    else{
      var topLayer = id ? id.split('.')[0] : classList[0];
    }

    //print the current element identifier and its toplayer
    console.log('Selected element identifier:', elementIdentifier);
    console.log('Top layer identifier:', topLayer);
  }

  // Extract the browser name and version information
  var userAgent = navigator.userAgent;
  var browserInfo = userAgent.match(/(firefox|edge|opr|chrome|safari)[\/]([\d.]+)/i);
  var browserName = browserInfo[1];
  var browserVersion = browserInfo[2];

  //Capitalize the first letter of the browser name
  browserName = browserName.charAt(0).toUpperCase() + browserName.slice(1);

  // Print the browser name and version information
  console.log('Browser:', browserName, browserVersion);
});