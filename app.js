function login(){
    localStorage.setItem('Nome', document.getElementById('nome_usuario').value);
    window.location = 'conversa2.html';
}