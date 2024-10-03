document.getElementById('flamesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name1 = document.getElementById('name1').value.toLowerCase().replace(/\s/g, '');
    let name2 = document.getElementById('name2').value.toLowerCase().replace(/\s/g, '');

    if (!name1 || !name2) {
        alert("Please enter valid names.");
        return;
    }

    let flamesResult = calculateFlames(name1, name2);
    showPopup(flamesResult);
});

function calculateFlames(name1, name2) {
    let combinedName = name1 + name2;
    let uniqueChars = combinedName.split('').filter((char, index, arr) => arr.indexOf(char) === arr.lastIndexOf(char));

    let count = uniqueChars.length;
    let flames = ['Friends 👬', 'Love ❤️', 'Affection 😊', 'Marriage 💍', 'Enemies 😈', 'Siblings 👯'];
    let resultIndex = (count % flames.length) - 1;

    return flames[resultIndex < 0 ? flames.length - 1 : resultIndex];
}

function showPopup(result) {
    let popup = document.getElementById('popup');
    let popupResult = document.getElementById('popupResult');

    popupResult.textContent = `You got: ${result}`;
    popup.style.display = 'block';
    
    // Add animation class for popup
    popup.classList.add('animate__animated', 'animate__zoomIn');

    setTimeout(function() {
        popup.style.display = 'none';
    }, 5000); // hide popup after 5 seconds
}
