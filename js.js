function showDetails(detailsId) {
    var details = document.querySelectorAll('.details');
    details.forEach(function(detail) {
        detail.classList.remove('active');
    });
    document.getElementById(detailsId).classList.add('active');
    document.querySelector('.product-list').classList.add('hidden');
}

function hideDetails(detailsId) {
    document.getElementById(detailsId).classList.remove('active');
    document.querySelector('.product-list').classList.remove('hidden');
}

