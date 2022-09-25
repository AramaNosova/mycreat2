new Toast({
    title: false,
    text: 'Времененно не работает услуга.',
    theme: 'light',
    autohide: true,
    interval: 10000
});
<div class="toast toast_message toast_default">
    <div class="toast__body">Сообщение...</div>
    <button class="toast__close" type="button"></button>
</div>
this._el.addEventListener('click', (e) => {
    if (e.target.classList.contains('toast__close')) {
        // вызываем метод, скрывающий сообщение
        this._hide();
    }
});
if (!document.querySelector('.toast-container')) {
    const container = document.createElement('div');
    container.classList.add('toast-container');
    document.body.append(container);
}
