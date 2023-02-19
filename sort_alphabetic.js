
// scss
function sendmail(a){
    console.log(a)
}
// Copy code
function sendEmails(emailArray) {
  // Create an object to store the first email of each domain
  const firstEmails = {};

  // Loop through the email array and find the first email for each domain
  for (let email of emailArray) {
    // Extract the domain from the email address
    const domain = email.split('@')[1];
    // console.log(domain)
    // console.log(email)
    
  
    // If this is the first email for this domain, store it in the object
    if (!(domain in firstEmails)) {
      firstEmails[domain] = email;
    //   console.log(firstEmails)
    } else {
      // Otherwise, compare this email to the one already stored and replace it if it comes first alphabetically
      if (email < firstEmails[domain]) {
        firstEmails[domain] = email;
        // console.log(firstEmails)
      }
    }
  }

  // Loop through the first emails object and send an email for each address
  for (let domain in firstEmails) {
    sendmail(firstEmails[domain]);
  }
}

// Usage example:
const emailArray = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'];
sendEmails(emailArray);

