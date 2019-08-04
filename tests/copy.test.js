// __tests__/displayUser-test.js
'use strict';

require('litespeed.js');
require('ls-view-text-copy');

test('text copy button', () => {
    expect(function () {
        document.body.innerHTML = `<input type="text" value="Hello World!" data-ls-text-copy />`;

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<input type="text" value="Hello World!"><button type="button" class="data-ls-text-copy" style="cursor: pointer;"></button>');
});