let CloseOrder = document.querySelectorAll('.Selected');
let off_btn = document.getElementById('Off-button');
let cl_o_btn = document.getElementById('Close-order-button');

function Food(x){
    
    for (i = 1; i <= 5; i++){
        y = document.getElementById('P'+i);
        let Check = 'CP'+i;
        Check = document.getElementById(Check);

        if (y === x){
            x.classList.toggle('Selected');
            Check.classList.toggle('Off');
        }
        else{
            y.classList.remove('Selected');
            Check.classList.add('Off');
        }
    }

    CloseOrder = document.querySelectorAll('.Selected');

    if (CloseOrder.length === 3){
        off_btn.classList.add('Off');
        cl_o_btn.classList.remove('Off');
    } else{
        off_btn.classList.remove('Off');
        cl_o_btn.classList.add('Off');
    }
}

function Drink(x){
    
    for (i = 1; i <= 5; i++){
        y = document.getElementById('B'+i);
        let Check = 'CB'+i;
        Check = document.getElementById(Check);

        if (y === x){
            x.classList.toggle('Selected');
            Check.classList.toggle('Off');
        }
        else{
            y.classList.remove('Selected');
            Check.classList.add('Off');
        }
    }

    CloseOrder = document.querySelectorAll('.Selected');

    if (CloseOrder.length === 3){
        off_btn.classList.add('Off');
        cl_o_btn.classList.remove('Off');
    } else{
        off_btn.classList.remove('Off');
        cl_o_btn.classList.add('Off');
    }
}

function Dessert(x){
    
    for (i = 1; i <= 5; i++){
        y = document.getElementById('S'+i);
        let Check = 'CS'+i;
        Check = document.getElementById(Check);

        if (y === x){
            x.classList.toggle('Selected');
            Check.classList.toggle('Off');
        }
        else{
            y.classList.remove('Selected');
            Check.classList.add('Off');
        }
    }

    CloseOrder = document.querySelectorAll('.Selected');
    
    if (CloseOrder.length === 3){
        off_btn.classList.add('Off');
        cl_o_btn.classList.remove('Off');
    } else{
        off_btn.classList.remove('Off');
        cl_o_btn.classList.add('Off');
    }
}