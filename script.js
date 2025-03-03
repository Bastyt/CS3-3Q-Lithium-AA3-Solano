function messageFunction (){
 let messageVerify = prompt('Enter the message: '); 
  if (messageVerify.indexOf("aI") >= 0 || messageVerify.indexOf("Ai") >= 0){ document.getElementById('result').innerHTML = 'The message "' + messageVerify + '" is fake!'; 
  } else if (messageVerify.indexOf("FR") >= 0 ){ document.getElementById('result').innerHTML = 'The message "' + messageVerify + '" is legitimate!';
  } else if (messageVerify.indexOf("FR") >= 0 && messageVerify.indexOf("AI") >= 0){ document.getElementById('result').innerHTML = 'The message "' + messageVerify + '" is legitimate!';
  } else if (messageVerify.indexOf("AI") >= 0){ document.getElementById('result').innerHTML = 'The message "' + messageVerify + '" is fake!'; } 
    else { document.getElementById('result').innerHTML = 'The message "' + messageVerify + '" is not yet encoded!'; } }
