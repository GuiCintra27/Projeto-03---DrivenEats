let CloseOrder = document.querySelectorAll('.Selected');
let off_btn = document.getElementById('Off-button');
let cl_o_btn = document.getElementById('Close-order-button');

let food = 0;
let drink = 0;
let dessert = 0;

let prato = '';
let bebida = '';
let sobremesa = '';

function Order(x,b){
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
                        let a = document.getElementById('P'+option+i);
                        a = String(a.innerHTML);
                        a = a.substr(3);
                        a = parseFloat(a);
                        
                        if (option === 'P'){
                            food = a;
                            prato = b.innerHTML;
                        } else if(option === 'B'){
                            drink = a;
                            bebida = b.innerHTML;
                        } else{
                            dessert = a;
                            sobremesa = b.innerHTML;
                        }

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

function Finish(){
    let text = 'Olá, gostaria de fazer o pedido: \n- Prato: ' + prato + '\n- Bebida: ' + bebida + '\n - Sobremesa: ' + sobremesa +'\n Total: ' + (food + drink + dessert).toFixed(2);
    let link = "https://wa.me/5522992710166?text=";
    let url = encodeURIComponent(text);
    
    const whatsapp = window.open(link + url, '_blank');
    whatsapp.focus();
}