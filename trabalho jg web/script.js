document.getElementById("BTsim").addEventListener("click",function(){

    let imagem = 1


    switch(imagem){

        case 1:
            document.getElementById("BTsim").src = "q2.png";
            imagem = 2;
        break;
        
        
        case 2:
            document.getElementById("BTsim").src = "q3.png";
            imagem = 3;
        break;

        
        case 3:
            imagem.src = "q3.png";
        break;

        
        case 4:
            imagem.src = "q4.png";
        break;

        
        case 5:
            imagem.src = "q5.png";
        break;

        
        case 6:
            imagem.src = "q6.png";
        break;

        
        case 7:
            imagem.src = "q7.png";
        break;

        
        case 8:
            imagem.src = "q8.png";
        break;

        
        case 9:
            imagem.src = "q9.png";
        break;

        
        case 10:
            imagem.src = "q10.png";
        break;
    }
})


