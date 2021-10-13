console.log('Shegspear online!!!');


let amount = 0;
let amount2 = 0;
let amountDisplay = 0;

function addValue() {
    const amountDesc = document.querySelector('.add__description');
    const amountInput = document.querySelector('.add__value');
    const amountTotal = document.querySelector('.budget__value');
    const amountInc = document.querySelector('.budget__income--value');


    amount += Number(amountInput.value);
    amountDisplay += amount;
    amountInc.textContent = Number(amount);
    amountTotal.textContent = amountDisplay;


    console.log(amount);
};

function subValue() {
    const amountDesc = document.querySelector('.add__description');
    const amountInput = document.querySelector('.add__value');
    const amountTotal = document.querySelector('.budget__value');
    const amountExp = document.querySelector('.budget__expenses--value');

    amount2 += Number(amountInput.value);
    amountDisplay -= amount2;
    amountExp.textContent = Number(amount2);
    amountTotal.textContent = amountDisplay;

    console.log('SUB');
    console.log(amountExp);
};


//EVENT LISTNERS ARE DOWN HERE
document.querySelector('.add__btn').addEventListener('click', function(e) {
    const amountDesc = document.querySelector('.add__description');
    const amountInput = document.querySelector('.add__value');

    if (e.target.parentElement.parentElement.children[0].children[0].classList.contains('active')) {
        addValue();
    } else if (e.target.parentElement.parentElement.children[0].children[1].classList.contains('active')) {
        subValue();
    }

    amountDesc.value = "";
    amountInput.value = "";

    // console.log(e.target.parentElement.parentElement.children[0].children[0].classList);
});

document.querySelector('.inc').addEventListener('click', function() {
    document.querySelector('.inc').classList.add('active');
    document.querySelector('.exp').classList.remove('active');
    console.log('add btn');
})

document.querySelector('.exp').addEventListener('click', function() {
    document.querySelector('.exp').classList.add('active');
    document.querySelector('.inc').classList.remove('active');
    console.log('sub btn');
})