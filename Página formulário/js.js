document.getElementById("filmeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var filmeSelecionado = document.getElementById("filmes").value;
    var filmeNome = document.querySelector('option[value="' + filmeSelecionado + '"]').innerText;
    
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.style.display = "block";
    mensagemDiv.innerHTML = "Que bom que se interessou pelo filme " + filmeNome + "! Agora nos conte o que mais lhe chamou atenção e o que espera dele:<br>";
    
    var opiniaoInput = document.createElement("textarea");
    opiniaoInput.setAttribute("id", "opiniao");
    mensagemDiv.appendChild(opiniaoInput);
    
    var submitOpiniao = document.createElement("input");
    submitOpiniao.setAttribute("type", "button");
    submitOpiniao.setAttribute("id", "submitOpiniao");
    submitOpiniao.setAttribute("value", "Enviar Opinião");
    submitOpiniao.addEventListener("click", function() {
        var opiniao = opiniaoInput.value;
        document.getElementById("agradecimento").innerText = "Obrigado por compartilhar sua opinião! Estamos aguardando sua presença no CineThe.";
    });
    mensagemDiv.appendChild(submitOpiniao);
});

document.getElementById("btnvoltar").addEventListener("click", function() {
    
    window.location.href = "/index.html";
});