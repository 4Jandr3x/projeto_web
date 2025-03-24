        
    document.getElementById("valFormulario").addEventListener("submit", function(event) {
            event.preventDefault();
            let emailForm = document.getElementById("floatingInput").value;
            let passForm = document.getElementById("floatingPassword").value;
            
            if (emailForm && passForm) {
                window.location.href = "areaLogada.html";
            } else {
                alert("Nenhum campo pode ficar vazio");
            }
    });
    


   /* Validadção para o boostrap */
   
    (() => { 'use strict'
              
              const forms = document.querySelectorAll('.needs-validation')

            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

               form.classList.add('was-validated')
            }, false)
        })
    })()
    
