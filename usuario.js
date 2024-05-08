document.getElementById('btn-rastrear').addEventListener('click', function() {
    document.getElementById('tracking-info').style.display = 'block';
});

document.getElementById('btn-devolucao').addEventListener('click', function() {
    document.getElementById('return-modal').style.display = 'block';
});

document.getElementById('btn-acompanhar').addEventListener('click', function() {
    // Implemente a lógica para acompanhar devolução, se necessário
});

document.getElementById('btn-novo-pedido').addEventListener('click', function() {
    window.location.href = "pagina_principal.html";
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('tracking-info').style.display = 'none';
});

document.getElementsByClassName('close')[1].addEventListener('click', function() {
    document.getElementById('return-modal').style.display = 'none';
});

document.getElementsByClassName('close')[2].addEventListener('click', function() {
    document.getElementById('tracking-info').style.display = 'none';
});
