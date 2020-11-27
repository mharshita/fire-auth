const mailContainer = document.querySelector('.mail-container');
const shownMailContainer = 'container mail-container shown-container';
const hiddenMailContainer = 'container mail-container hidden-container';
const authenticationMethod1 = document.getElementById('method1');
const authenticationMethod2 = document.getElementById('method2');
const authenticationMethod3 = document.getElementById('method3');
const mailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const codeField = document.getElementById('code');
const labels = document.getElementsByTagName('label');
const signInWithMail = document.getElementById('signInWithMail');
const signUp = document.getElementById('signUp');
const failureModal = document.querySelector('.failure');

const auth = firebase.auth();

//Sign in function
const signInWithEmailFunction = () => {
  const email = mailField.value;
  const password = passwordField.value;

  //Built in firebase function responsible for authentication
  auth.signInWithEmailAndPassword(email, password)
  .then(() => {
    //Signed in successfully
    window.location.assign('./profile')
  })
  .catch(error => {
    //Something went wrong
    console.error(error);
  })
}

//Adds the click event to the signInWithMail button
//so it calls the signInWithEmail function whenever a user clicks on it
signInWithMail.addEventListener('click', signInWithEmailFunction);


//Go to signup page
signUp.addEventListener('click', () => {
  window.location.assign('./signup');
});

//Animations
const initializeInputAnimationState = (fieldName, labelNumber) => {
  if(fieldName.value)
    labels.item(labelNumber).className = 'initial-focused-field'
  else
    labels.item(labelNumber).className = 'initial-unfocused-field'
}

authenticationMethod1.addEventListener('change', () => {
  mailContainer.className = shownMailContainer
  initializeInputAnimationState(mailField, 0);
  initializeInputAnimationState(passwordField, 1);
});

authenticationMethod2.addEventListener('change', () => {
  mailContainer.className = hiddenMailContainer
});

authenticationMethod3.addEventListener('change', () => {
  mailContainer.className = hiddenMailContainer
  initializeInputAnimationState(codeField, 3);
});

mailField.addEventListener('focus', () => {
  if(!mailField.value)
  labels.item(0).className = "focused-field"
});

passwordField.addEventListener('focus', () => {
  if(!passwordField.value)
  labels.item(1).className = "focused-field"
});

mailField.addEventListener('blur', () => {
  if(!mailField.value)
    labels.item(0).className = "unfocused-field"
});

passwordField.addEventListener('blur', () => {
  if(!passwordField.value)
    labels.item(1).className = "unfocused-field"
});

codeField.addEventListener('focus', () => {
  if(!codeField.value)
    labels.item(3).className = "focused-field"
})

codeField.addEventListener('blur', () => {
  if(!codeField.value)
  labels.item(3).className = "unfocused-field"
})