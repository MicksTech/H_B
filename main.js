window.onload = function () {
    const MessageContainer = document.querySelector('.message-container');
    const Button = document.querySelector('button');
    const ExitPage = this.document.querySelector('.exit-page');

    const messageState = localStorage.getItem('messageOpen');

    if (messageState === 'true') {
        Button.style.display = 'flex';
        MessageContainer.style.display = 'none';
    } else {
        Button.style.display = 'none';
        MessageContainer.style.display = 'flex';
    }

    Button.addEventListener('click', () => {
        Button.style.display = 'none';
        MessageContainer.style.display = 'flex';
        localStorage.setItem('messageOpen', 'true');
    });

    ExitPage.addEventListener('click', () => {
        Button.style.display = 'flex';
        MessageContainer.style.display = 'none';
        localStorage.setItem('messageOpen', 'false');
    });
};
