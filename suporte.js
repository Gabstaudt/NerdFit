// Função para enviar mensagem
function sendMessage() {
    // Obter o texto da mensagem digitada pelo usuário
    var messageInput = document.querySelector('.chat-input input');
    var messageText = messageInput.value;

    // Verificar se o campo de mensagem não está vazio
    if (messageText.trim() !== '') {
        // Criar um novo elemento de mensagem
        var messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;

        // Adicionar a mensagem à lista de mensagens
        var chatMessages = document.querySelector('.chat-messages');
        chatMessages.appendChild(messageElement);

        // Limpar o campo de entrada após enviar a mensagem
        messageInput.value = '';
    }
}

// Função para fechar o chat de suporte
function closeSupportChat() {
    var chatContainer = document.querySelector('.chat-container');
    chatContainer.style.display = 'none';
}
