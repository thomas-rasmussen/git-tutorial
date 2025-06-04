document.addEventListener("DOMContentLoaded", function () {
  
  ////// Modify tags with class "git-insert" //////
  // Insert prefix words and colour codes words.
  
  // Find all tags with class "git-insert"
  const elements2 = document.querySelectorAll(".git-insert");
 
  // Colors: green / pink / gold
  colors = ["#1ca800", "#b148c6", "#c0a000"];

  elements2.forEach(function(el) {
    // Split text in tag into an array of words
    el.innerText = "user_id$computer_id MINGW64 " + el.innerText;
    const words = el.innerText.split(" ");
    // Array to stores colored word spans
    coloredWords = [];
    // Loop through each word in tag
    for (var i = 0; i < words.length; i++) {
      // pick color for word. Third word and onwards are in gold to handle
      // file paths with spaces
      var color = colors[Math.min(i, 2)]
      // Wrap the word in a <span> with inline color style
      var wordSpan = '<span style="color:' + color + '">' + words[i] + '</span>';
      
      // Add coloured word to the Array
      coloredWords.push(wordSpan);
    };
    // Join the colored words wiht spaces and update the tag's HTML
    el.innerHTML = coloredWords.join(' ');
  });  
});