// script.js

// Functionality for the site promotion platform

// Form handling
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Process form data
    console.log('Form Data:', Object.fromEntries(formData));
}

document.querySelector('form').addEventListener('submit', handleFormSubmit);

// Site storage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// Social media sharing
function shareOnSocialMedia(platform, content) {
    let url;
    switch (platform) {
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(content)}`;
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`;
            break;
        // Add cases for other platforms as needed
        default:
            console.log('Unsupported platform');
            return;
    }
    window.open(url, '_blank');
}

// Ad integration
function integrateAd(adCode) {
    const adContainer = document.getElementById('ad-container');
    adContainer.innerHTML = adCode;
}
