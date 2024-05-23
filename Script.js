document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith('album.html')) {
        fetch('albums.json')
            .then(response => response.json())
            .then(albums => {
                const randomIndex = Math.floor(Math.random() * albums.length);
                const albumImage = document.getElementById('album-image');
                albumImage.src = albums[randomIndex];
            })
            .catch(error => console.error('Error loading albums:', error));
    }
});
