// script selects all elements on the page and loops over them.
// If an element does not have a 'data-id' attribute, it adds a 3px solid red border to that element.
// the scrips excludes the head, body and div tags from the selection.
document.querySelectorAll('*').forEach(function(node) {
    const excludedTags = ['head', 'body', 'div'];

    if (!node.hasAttribute('data-id') && !excludedTags.includes(node.nodeName.toLowerCase())) {
        if (node.style.border === '' || node.style.border === 'none') {
            node.style.border = '3px solid red';
        } else {
            node.style.border = 'none';
        }
    }
});
