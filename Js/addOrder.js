let inputSearchName = document.getElementById('search-Claint-Name');
let divShowClints = document.getElementById('show-clints');
let inputAddOrder = document.getElementById('add-order');
let Data = JSON.parse(window.localStorage.getItem('Clints')) ;






inputSearchName.addEventListener('focus', (el) =>  {
    divShowClints.classList.remove('close') ;
    divShowClints.innerHTML = '' ;
    // Show Data In Div Show Clints
    for (let i = 0; i < getClintData().length; i++) {
        
        let divClint = document.createElement('div');
        divClint.classList.add('clint') ;
        divClint.id = getClintData()[i].code ;
        divClint.setAttribute('phone-1', getClintData()[i].phone1)
        divClint.setAttribute('phone-2', getClintData()[i].phone2)
        
        let divNameClint = document.createElement('div') ;
        divNameClint.classList.add('name') ;
        divNameClint.innerHTML = getClintData()[i].name ;

        divClint.appendChild(divNameClint) ;

        let divZoneClint = document.createElement('div') ;
        divZoneClint.classList.add('zone') ;
        divZoneClint.innerHTML = getClintData()[i].zone ;

        divClint.appendChild(divZoneClint) ;
        divShowClints.appendChild(divClint) ;
    }

    // Target Name Clint
    getCodeClint() ;
}) ;


function closeShowClint () {
    setTimeout((el => {
        divShowClints.classList.add('close') ;
    }), 500) ;
} ;


function getClintData () {
    let data = JSON.parse(window.localStorage.getItem('Clints')) ;

    for (let i = 0; i < data.length; i++) {
        // Remove Spaces From Phones 
        data[i].phone1 = data[i].phone1.split(' ').join('') ;
        data[i].phone2 = data[i].phone1.split(' ').join('') ;

        // Remove Empty Objetc
        if (data[i].name == '') {
            data.pop() ;
        }
    } ;

    return data ;
} ;

// Target Code Clint In Input
function getCodeClint () {
    let clint = document.querySelectorAll('.clint') ;
    let inputClaintSearch = document.getElementById('search-Claint-Name') ;
    let inputClaintName = document.getElementById('Claint-Name') ;

    clint.forEach((el) => {
        el.addEventListener('click', () => {
            inputClaintSearch.value = el.children[0].innerHTML ;
            inputClaintName.value = el.id ;
            closeShowClint() ;
        }) ;
    }) ;

    
    let getValue = setInterval(() => {
        let value = inputClaintSearch.value ;
        
        clint.forEach((el) => {           
            showResultSearch (el, value) ;
        }) ;
    }, 50) ;

} ; 
    
    

// inputAddOrder.addEventListener('click', (e) => {
//     e.preventDefault() ;
//     let allInput = document.querySelectorAll('input') ;
// })


function showResultSearch (el, value) {
    
    let phone1 = el.getAttribute('phone-1').includes(value) ;
    let phone2 = el.getAttribute('phone-2').includes(value) ;


    if (el.children[0].innerHTML.includes(value) && value !== '' || phone1 ||phone2) {
        if (value != '') {
            el.style.order = '-3' ;
            el.classList.add('select') ;
        }
    } else { 
        removeResultsSearch (el) ;
    }
    
    value == '' || value == ' ' ? removeResultsSearch (el) : '' ;
} ;


function removeResultsSearch (el) {
    el.style.order = '1' ;
    el.classList.remove('select') ;
}


function closeDivShowClints () {
    window.addEventListener('click', (el) => {
        let paramTarget1 = 'clint' ;
        let paramTarget2 = 'name' ;
        let paramTarget3 = 'show-clints' ;
        let paramTarget4 = 'search' ;
        switch(el.target.className) {
            case paramTarget1:
                case paramTarget2:
                    case paramTarget3:
                        case paramTarget4:
                        ''
                        break;
            default:
                divShowClints.classList.add('close')
          }
    }) ;
}

closeDivShowClints() ;