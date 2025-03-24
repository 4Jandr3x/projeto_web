function adiConsulta() {
            let doctor = document.getElementById("doctor").value;
            let data = document.getElementById("data").value;
            let hora = document.getElementById("hora").value;
            
            if (doctor && data && hora) {
                let consultaLista = document.getElementById("marcacao");
                let consulta = document.createElement("div");
                consulta.className = "consulta-card";
                consulta.innerHTML = `<span>Consulta marcada com ${doctor} - ${data} às ${hora}</span> 
                                        <button class="delete-btn" onclick="this.parentElement.remove()">Desmarcar</button>`;
                consultaLista.appendChild(consulta);
                
                document.getElementById("doctor").value = "";
                document.getElementById("data").value = "";
                document.getElementById("hora").value = "";
            } else {
                alert("Todos os campos devem ser preenchidos.");
            }
        }
