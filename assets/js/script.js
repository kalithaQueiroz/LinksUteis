function toggleContent(contentId, button) {
    const content = document.getElementById(contentId);
    const isDisplayed = content.style.display === 'block';
    const allContents = document.querySelectorAll('.box-content');
    const allButtons = document.querySelectorAll('.box button');

    // Esconder todas as listas suspensas e remover classe 'active' de todos os botões
    allContents.forEach(el => el.style.display = 'none');
    allButtons.forEach(btn => btn.classList.remove('active'));

    // Mostrar a lista suspensa selecionada e adicionar classe 'active' ao botão clicado
    if (!isDisplayed) {
        content.style.display = 'block';
        button.classList.add('active');
    }
}