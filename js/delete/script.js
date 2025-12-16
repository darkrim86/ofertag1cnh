(function () {
    function removeCookieBanner() {
        const banner = document.getElementById('');
        if (banner) {
            banner.remove();
        }
    }

    // tenta remover imediatamente
    removeCookieBanner();

    // observa mudanças no DOM
    const observer = new MutationObserver(() => {
        removeCookieBanner();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
