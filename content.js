// script selects all elements on the page and loops over them. 
// If an element does not have a 'data-id' attribute, it adds a 3px solid red border to that element.
document.querySelectorAll('*').forEach(function(node) {
    if (!node.hasAttribute('data-id')) {
        if (node.style.border === '' || node.style.border === 'none') {
            node.style.border = '3px solid red';
        } else {
            node.style.border = 'none';
        }
    }
});
