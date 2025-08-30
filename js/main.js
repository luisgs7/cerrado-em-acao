document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copy-btn');
    const pixKeyEl = document.getElementById('pix-key');
    const toastEl = document.getElementById('copyToast');

    if (copyBtn && pixKeyEl && toastEl) {
        copyBtn.addEventListener('click', () => {
            // Pega o valor da chave PIX no momento do clique
            const pixKey = pixKeyEl.innerText;

            navigator.clipboard.writeText(pixKey).then(() => {
                // Inicializa e exibe a notificação de agradecimento
                const toast = new bootstrap.Toast(toastEl);
                toast.show();

                // Desabilita o botão temporariamente para evitar múltiplos cliques
                copyBtn.disabled = true;
                setTimeout(() => {
                    copyBtn.disabled = false;
                }, 3000); // Reabilita o botão após 3 segundos

            }).catch(err => {
                console.error('Erro ao copiar a chave PIX: ', err);
                // Fallback para caso o toast não funcione
                alert('Chave PIX copiada! Muito obrigado pela sua doação.');
            });
        });
    }
});
