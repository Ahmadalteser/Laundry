
function toggleDetails(id) {
    const detailsRow = document.getElementById(id);
    detailsRow.style.display = detailsRow.style.display === 'table-row' ? 'none' : 'table-row';
}

$(document).ready(function () {
    $('#continue').click(function () {
        const selectedBook = $('input[name="book"]:checked').val();
        if (!selectedBook) {
            alert('يرجى اختيار كتاب أولاً.');
            return;
        }
        $('#form-container').fadeIn();
    });

    $('#request-form').submit(function (event) {
        event.preventDefault();

        let valid = true;

        // التحقق من المدخلات
        if (!valid) return;

        const selectedBook = $('input[name="book"]:checked').val();
        alert(`تم تقديم الطلب بنجاح! \n تفاصيل الكتاب: ${selectedBook}`);
    });
});