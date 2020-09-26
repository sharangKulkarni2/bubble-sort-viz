const grid = document.querySelector('.grid')
const grid2 = document.querySelector('.grid2')
let squares = []

let  timeOut = 1000 

for (let i = 0; i < 10; i++) {
    let square = document.createElement('div')
    square.setAttribute('id', i)
    square.innerHTML = 10 - i
    grid.append(square)
    squares.push(square)
}



function buuble_sort() {
    // n - 1 passes 
    for (let i = 0; i < 9; i++) {
  
        for (let j = 0; j < (squares.length - i - 1); j++) {
            
            setTimeout(() => {
                if (parseInt(squares[j].innerHTML) > parseInt(squares[j + 1].innerHTML)) {
                    if (j > 0) {
                        squares[j - 1].classList.remove('excahange')
                        squares[j + 1 - 1].classList.remove('excahange')
                    }
                    
                    squares[j].classList.add('excahange')
                    squares[j + 1].classList.add('excahange')
                    setTimeout(() => {
                        let temp = squares[j].innerHTML
                        squares[j].innerHTML = squares[j + 1].innerHTML
                        squares[j + 1].innerHTML = temp

                    }, 1000)

                    if (j == squares.length - i - 2) {
                        setTimeout(() => {
                            squares[j].classList.remove('excahange')
                            squares[j + 1].classList.remove('excahange')
                        },2000)
                    }
                    
                }

            }, timeOut)
           
            
              timeOut += 2000
                   
             
        }
    }
   // throw new Error()
}
buuble_sort()