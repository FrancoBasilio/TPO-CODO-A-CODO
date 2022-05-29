var form = document.getElementById('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        var mensajesError = [];
        
        if(nombre.value === null || nombre.value === '' ){
            mensajesError.push('Ingrese su nombre')
        }
        if(mail.value === null || mail.value === '' ){
            mensajesError.push('Ingrese su correo electronico')
        }
        if(msg.value === null || msg.value === '' ){
            mensajesError.push('Ingrese un comentario')
        }
        
        error.innerHTML = mensajesError.join(', ');

   
    });
    
 