function myFunction() {
     // Get the text field
     let copyText = document.getElementById("myText");

     // Select the text field
     copyText.select();
     copyText.setSelectionRange(0, 99999); // For mobile devices

     // Copy the text inside the text field
     navigator.clipboard.writeText(copyText.value);

     let tooltip = document.getElementById("myTooltip");
     tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
     let tooltip = document.getElementById("myTooltip");
     tooltip.innerHTML = "Copy to clipboard";
}