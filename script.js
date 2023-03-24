// var selectedText = window.getSelection(); 
// var range = selection.getRangeAt(0);

// var newRange = document.createRange();
// newRange.setStart(range.startContainer, range.startOffset);
// newRange.setEnd(range.endContainer, range.endOffset);

// var newSelection = window.getSelection();
// newSelection.removeAllRanges();
// newSelection.addRange(newRange);

// var html = document.documentElement.outerHTML; 
// var regex = new RegExp(selectedText, 'g'); 
// var match = regex.exec(html);
// console.log(selectedText)
// if (match) { 
//     console.log('Selected text found at position', match.index);
// } else { console.log('Selected text not found in HTML'); }


// Get the highlighted range
var highlightedRange;
document.addEventListener('mouseup', function() {
  var selection = window.getSelection();
  if (selection.type === 'Range') {
    highlightedRange = selection.getRangeAt(0);
    console.log('Selected text found at position', selection);
    // console.log(highlightedRange);
    // console.log(selection.anchorNode.parentElement.id);
    console.log(selection.anchorNode.parentNode.parentNode.id)
  }
});