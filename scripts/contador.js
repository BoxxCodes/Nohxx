function formatNumber(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        return number.toString();
    }
}

let storedViewCount = localStorage.getItem('viewCount') || 0;

storedViewCount = parseInt(storedViewCount) + 1;

localStorage.setItem('viewCount', storedViewCount);

const formattedCount = formatNumber(storedViewCount);

document.getElementById('view-count').textContent = formattedCount;
