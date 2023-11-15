const displayDiv = document.getElementById('display')
 const click = document.getElementById('click')
const birthday =  document.getElementById('birthday')
const clearButton = document.getElementById('clearButton')

const Age = () => {
	const dob =  new Date(birthday.value);
    const today = new Date()
    let currentAge = today.getFullYear() - dob.getFullYear()
    const month = today.getMonth() - dob.getMonth()
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())){
    	currentAge--;
    }
    return currentAge;
}


 click.onclick = () => {
 	const myAge = Age()
 	displayDiv.innerHTML = "You're " + myAge + " years old!";
 }


 const clear = () => {
 	birthday.innerHTML = " "
 	displayDiv.innerHTML = " "
 }

 clearButton.onclick = () => {
 	clear()
 }