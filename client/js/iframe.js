// Modifies an Iframe elt.
function ElementReady(selector) {
    return new Promise((resolve, reject) => {
        let el = document.querySelector(selector);
        if (el) {
            resolve(el);
            return
        }
        new MutationObserver((mutationRecords, observer) => {
            Array.from(document.querySelectorAll(selector)).forEach((element) => {
                resolve(element);
                observer.disconnect();
            });
        }).observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    });
}
ElementReady('iframe').then(() => {
        // create a new style element
        const iframe = document.querySelector('iframe');
        iframe.style.width = '100%';
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const range = iframeDoc.createRange();
        const fragment = range.createContextualFragment('<style>.profile-badge--width-330 { width: 100% !important;}</style>');
        iframeDoc.head.appendChild(fragment);
});
