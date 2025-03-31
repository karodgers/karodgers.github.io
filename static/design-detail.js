document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const designId = urlParams.get('design');
    
    // Example content for different designs
    const designs = {
        'eshoppy': {
            title: 'Eshoppy E-commerce Platform',
            image: '../images/portfolio/eshoppy-removebg-preview.png',
            text: 'Modern e-commerce solution featuring personalized product recommendations...'
        },
        'beatflow': {
            title: 'BeatFlow Music Streaming',
            image: '../images/portfolio/spotify-removebg-preview.png',
            text: 'Next-gen music player interface with dynamic waveform visualization...'
        }
    };

    if (designs[designId]) {
        document.getElementById('design-title').textContent = designs[designId].title;
        document.getElementById('design-image').src = designs[designId].image;
        document.getElementById('design-fulltext').textContent = designs[designId].text;
    }
});