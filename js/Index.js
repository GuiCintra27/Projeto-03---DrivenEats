let CloseOrder = document.querySelectorAll('.Selected');
let off_btn = document.getElementById('Off-button');
let cl_o_btn = document.getElementById('Close-order-button');

function Order(x){
    let Options = ['P', 'B', 'S'];

    for (let option of Options){
        for( l = 1; l <= 5; l++){
            let z = document.getElementById(option+l);

            if (z === x){
                for (i = 1; i <= 5; i++){
                    let y = document.getElementById(option+i);
                    let Check = 'C'+option+i;
                    Check = document.getElementById(Check);
            
                    if (y === x){
                        x.classList.toggle('Selected');
                        Check.classList.toggle('Off');
                    } else{
                        y.classList.remove('Selected');
                        Check.classList.add('Off');
                    }
                }
            }
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

let text = 'Olá, gostaria de fazer o pedido: \n - Prato: \n- Bebida: \n - Sobremesa: \n Total: ';
let link = "https://wa.me/5522992710166?text=";
let url = encodeURIComponent(text);

function Finish(){
    const whatsapp = window.open(link + url, '_blank');
    whatsapp.focus();
}