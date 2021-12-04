


// if (JSON.stringify() === JSON.stringify()){
//     console.log('they will run ')
// } else {
//     console.log('but')
// }



// function getItem(e){

// }
let myGame = document.querySelector('.row');
let myColor = document.querySelector('.col');

let arr1 = [3,5,7]

let arr = [] ;

let counter = 0 ;






myGame.onclick = e => {
 
    let num = parseInt(e.target.innerText)
    if(counter < 3) {
        counter++
        arr.push(num)        
        e.target.style.backgroundColor = 'green'; 

        console.log(counter)
    }
    // else{
    //     e.target.style.backgroundColor = '';
    // }



}

function run(){ 
    if(JSON.stringify(arr) === JSON.stringify(arr1)){
        console.log('you win')

    } else{

        console.log('you lose')
    }
}

window.addEventListener('keydown',run)











