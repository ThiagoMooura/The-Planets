function mostra(){
    document.querySelector('.menu').classList.toggle('clos');
    document.querySelector('.line1').classList.toggle('clos');
    document.querySelector('.line2').classList.toggle('clos');
    document.querySelector('.line3').classList.toggle('clos');
    document.querySelector('body').classList.toggle('up');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function hover(){
    document.getElementById("botao2").addEventListener("mouseover",function(){
        document.getElementById("botao2").style.backgroundColor='#313148';
    });
    document.getElementById("botao2").addEventListener("mouseout",function(){
        document.getElementById("botao2").style.backgroundColor='transparent';
    });
    document.getElementById("botao3").addEventListener("mouseover",function(){
        document.getElementById("botao3").style.backgroundColor='#313148';
    });
    document.getElementById("botao3").addEventListener("mouseout",function(){
        document.getElementById("botao3").style.backgroundColor='transparent';
    });
}

function over(){
    document.querySelector('.paragraph-1').classList.remove('sumir');
    document.querySelector('.paragraph-1').classList.add('aparecer');
    document.querySelector('.overview').classList.remove('hide');
    document.querySelector('.overview').classList.add('show');
    document.querySelector('.btn1').style.border='1px solid #eda44a';
    document.querySelector('.btn1-spn').style.color='#fff';
    document.getElementById("botao1").style.backgroundColor='#eda44a';
    
    document.getElementById("botao1").addEventListener("mouseover",function(){
        document.getElementById("botao1").style.backgroundColor='#eda44a';
    });
    document.getElementById("botao1").addEventListener("mouseout",function(){
        document.getElementById("botao1").style.backgroundColor='#eda44a';
    });
    document.getElementById("botao2").addEventListener("mouseover",function(){
        document.getElementById("botao2").style.backgroundColor='#313148';
    });
    document.getElementById("botao2").addEventListener("mouseout",function(){
        document.getElementById("botao2").style.backgroundColor='transparent';
    });
    document.getElementById("botao3").addEventListener("mouseover",function(){
        document.getElementById("botao3").style.backgroundColor='#313148';
    });
    document.getElementById("botao3").addEventListener("mouseout",function(){
        document.getElementById("botao3").style.backgroundColor='transparent';
    });

    
    document.getElementById("botao2").style.backgroundColor='transparent';
    document.getElementById("botao3").style.backgroundColor='transparent';
    document.querySelector('.internal').classList.add('hide');
    document.querySelector('.surface').classList.add('hide');
    document.querySelector('.paragraph-2').classList.add('sumir');
    document.querySelector('.paragraph-3').classList.add('sumir');
    document.querySelector('.btn2-spn').style.color='#838391';
    document.querySelector('.btn3-spn').style.color='#838391';
    document.querySelector('.btn2').style.border='1px solid #838391';
    document.querySelector('.btn3').style.border='1px solid #838391';

    document.querySelector('.btn1-1').style.borderBottom='4px solid #eda44a';
    document.querySelector('.btn2-1').style.borderBottom='4px solid transparent';
    document.querySelector('.btn3-1').style.borderBottom='4px solid transparent';
    document.querySelector('.btn1-1').style.borderBottom='4px solid #eda44a';
    
}

function int(){
    document.querySelector('.paragraph-2').classList.remove('sumir');
    document.querySelector('.paragraph-2').classList.add('aparecer');
    document.querySelector('.internal').classList.remove('hide');
    document.querySelector('.internal').classList.add('show');
    document.querySelector('.btn2-spn').style.color='#fff';
    document.querySelector('.btn2').style.border='1px solid #eda44a';
    document.getElementById("botao2").style.backgroundColor='#eda44a';


    document.getElementById("botao1").addEventListener("mouseover",function(){
        document.getElementById("botao1").style.backgroundColor='#313148';
    });
    document.getElementById("botao1").addEventListener("mouseout",function(){
        document.getElementById("botao1").style.backgroundColor='transparent';
    });
    document.getElementById("botao2").addEventListener("mouseover",function(){
        document.getElementById("botao2").style.backgroundColor='#eda44a';
    });
    document.getElementById("botao2").addEventListener("mouseout",function(){
        document.getElementById("botao2").style.backgroundColor='#eda44a';
    });
    document.getElementById("botao3").addEventListener("mouseover",function(){
        document.getElementById("botao3").style.backgroundColor='#313148';
    });
    document.getElementById("botao3").addEventListener("mouseout",function(){
        document.getElementById("botao3").style.backgroundColor='transparent';
    });

    
    document.getElementById("botao1").style.backgroundColor='transparent';
    document.getElementById("botao3").style.backgroundColor='transparent';
    document.querySelector('.paragraph-1').classList.add('sumir');
    document.querySelector('.paragraph-3').classList.add('sumir');
    document.querySelector('.overview').classList.add('hide');
    document.querySelector('.surface').classList.add('hide');
    document.querySelector('.btn1-spn').style.color='#838391';
    document.querySelector('.btn3-spn').style.color='#838391';
    document.querySelector('.btn1').style.border='1px solid #838391';
    document.querySelector('.btn3').style.border='1px solid #838391';

    document.querySelector('.btn2-1').style.borderBottom='4px solid #eda44a';
    document.querySelector('.btn2-1').style.borderBottom='4px solid #eda44a';
    document.querySelector('.btn3-1').style.borderBottom='4px solid transparent';
    document.querySelector('.btn1-1').style.borderBottom='4px solid transparent';

}

function surf(){
    document.querySelector('.paragraph-3').classList.remove('sumir');
    document.querySelector('.paragraph-3').classList.add('aparecer');
    document.querySelector('.surface').classList.remove('hide');
    document.querySelector('.surface').classList.add('show');
    document.querySelector('.btn3-spn').style.color='#fff';
    document.querySelector('.btn3').style.border='1px solid #eda44a';
    document.getElementById("botao3").style.backgroundColor='#eda44a';


    document.getElementById("botao1").addEventListener("mouseover",function(){
        document.getElementById("botao1").style.backgroundColor='#313148';
    });
    document.getElementById("botao1").addEventListener("mouseout",function(){
        document.getElementById("botao1").style.backgroundColor='transparent';
    });
    document.getElementById("botao2").addEventListener("mouseover",function(){
        document.getElementById("botao2").style.backgroundColor='#313148';
    });
    document.getElementById("botao2").addEventListener("mouseout",function(){
        document.getElementById("botao2").style.backgroundColor='transparent';
    });
    document.getElementById("botao3").addEventListener("mouseover",function(){
        document.getElementById("botao3").style.backgroundColor='#eda44a';
    });
    document.getElementById("botao3").addEventListener("mouseout",function(){
        document.getElementById("botao3").style.backgroundColor='#eda44a';
    });

    document.getElementById("botao1").style.backgroundColor='transparent';
    document.getElementById("botao2").style.backgroundColor='transparent';
    document.querySelector('.overview').classList.add('hide');
    document.querySelector('.internal').classList.add('hide');
    document.querySelector('.paragraph-1').classList.add('sumir');
    document.querySelector('.paragraph-2').classList.add('sumir');
    document.querySelector('.btn1-spn').style.color='#838391';
    document.querySelector('.btn2-spn').style.color='#838391';
    document.querySelector('.btn1').style.border='1px solid #838391';
    document.querySelector('.btn2').style.border='1px solid #838391';

    document.querySelector('.btn3-1').style.borderBottom='4px solid #eda44a';
    document.querySelector('.btn3-1').style.borderBottom='4px solid #eda44a';
    document.querySelector('.btn2-1').style.borderBottom='4px solid transparent';
    document.querySelector('.btn1-1').style.borderBottom='4px solid transparent';   
}