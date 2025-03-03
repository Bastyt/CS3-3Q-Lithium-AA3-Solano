function messageEncoder (){
 let messageToVerify = prompt('Enter the message: '); 
 if (messageToVerify.indexOf("aI") >= 0 || messageToVerify.indexOf("Ai") >= 0){ document.getElementById('result').innerHTML = 'The message "' + messageToVerify + '" is fake!'; } 
 else if (messageToVerify.indexOf("FR") >= 0 ){ document.getElementById('result').innerHTML = 'The message "' + messageToVerify + '" is legitimate!'; } 
 else if (messageToVerify.indexOf("FR") >= 0 && messageToVerify.indexOf("AI") >= 0){ document.getElementById('result').innerHTML = 'The message "' + messageToVerify + '" is legitimate!'; } 
 else if (messageToVerify.indexOf("AI") >= 0){ document.getElementById('result').innerHTML = 'The message "' + messageToVerify + '" is fake!'; } 
 else { document.getElementById('result').innerHTML = 'The message "' + messageToVerify + '" is not yet encoded!'; } }
