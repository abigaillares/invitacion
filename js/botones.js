document.getElementById('btn-lugar').addEventListener('click', function() {
    toggleInfo('info-lugar');
});

document.getElementById('btn-fecha').addEventListener('click', function() {
    toggleInfo('info-fecha');
});

document.getElementById('btn-hora').addEventListener('click', function() {
    toggleInfo('info-hora');
});

function toggleInfo(infoId) {
    var infoElement = document.getElementById(infoId);
    if (infoElement.style.display === "none" || infoElement.style.display === "") {
        infoElement.style.display = "block";
    } else {
        infoElement.style.display = "none";
    }
}
