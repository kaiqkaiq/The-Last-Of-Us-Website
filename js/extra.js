// --------
// Tooltips
// --------
// Instantiate all tooltips in a docs or StackBlitz
document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
    });

// --------
// Popovers
// --------
// Instantiate all popovers in docs or StackBlitz
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
        new bootstrap.Popover(popover);
    });

// Instantiate all toasts in docs pages only
// js-docs-start live-toast
document.getElementById("toastbtn").onclick = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'));
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl);
    });
    toastList.forEach(toast => toast.show());
}