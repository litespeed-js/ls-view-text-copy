(function (window) {
    "use strict";

    window.ls.container.get('view').add(
        {
            selector: 'data-ls-text-copy',
            controller: function (element, document, window) {
                var button = window.document.createElement('button');

                button.type = 'button';
                button.className = 'data-ls-text-copy';
                button.style.cursor = 'pointer';

                element.parentNode.insertBefore(button, element.nextSibling);

                var copy = function () {
                    window.getSelection().removeAllRanges();

                    var range = document.createRange();

                    range.selectNode(element);

                    window.getSelection().addRange(range);

                    try {
                        document.execCommand('copy');
                        window.dispatchEvent(new CustomEvent('data-ls-text-copy', {}));
                    }
                    catch (err) {
                        throw new Error('Failed to copy to clipboard');
                    }

                    window.getSelection().removeAllRanges();
                };

                button.addEventListener('click', copy);
            }
        }
    );

})(window);