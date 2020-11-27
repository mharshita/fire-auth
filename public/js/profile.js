const logOut = document.getElementById('logOut');
const mergeAccounts = document.getElementById('mergeAccounts');
const modifyAccount = document.getElementById('modifyAccount');
const displayNameHolder = document.getElementById('displayNameHolder');
const photoHolder = document.getElementById('photoHolder');
const dob = document.getElementById('dob');
const pob = document.getElementById('pob');
const submit = document.getElementById('submit');

const auth = firebase.auth();



const submitFunction = () => {
    const dob = dob.value;
    const pob = pob.value;

    window.location.assign('../last')
  }

  function showLast() {
      dob.innerHTML = dob.value;
      pob.innerHTML = pob.value;
  }

  submit.onclick = function () {
    location.href = "../last";
};

logOut.addEventListener('click', () => {
    auth.signOut()
    .then(() => {
        window.location.assign('../');
    })
    .catch(error => {
        console.error(error);
    })
})

//Go to modification page
modifyAccount.addEventListener('click', () => {
    window.location.assign('../edit');
});

//Go to merge accounts page
mergeAccounts.addEventListener('click', () => {
    window.location.assign('../merge');
});
