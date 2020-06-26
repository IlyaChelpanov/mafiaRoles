const getRolesButton = document.getElementById('getRoles');

const globalRoles = [ 
     "Мирный житель",
     "Мирный житель",
     "Мирный житель",
     "Мирный житель",
     "Мирный житель",
     "Мирный житель",
     "Комиссар",
     "Босс Мафии",
     "Мафия",
     "Мафия"
    ];

    const globalIds = [1,2,3,4,5,6,7,8,9,10];

getRolesButton.addEventListener('click', setRoles);


function setRoles() {
    console.log(globalRoles);
    console.log(shuffle(globalRoles));

   globalIds.forEach(element => {

    var role = document.getElementById('role'+element);
    var checkbox = document.getElementById('check'+element);
    role.textContent = globalRoles[parseInt(element)-1];
    checkbox.checked = true;

   });
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }







    
