document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith('album.html')) {
        console.log('Loading albums.json...');
        fetch('albums.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(albums => {
                console.log('Albums loaded:', albums);
                if (albums.length > 0) {
                    const randomIndex = Math.floor(Math.random() * albums.length);
                    const selectedAlbum = albums[randomIndex];
                    console.log('Selected album:', selectedAlbum);
                    const albumImage = document.getElementById('album-image');
                    albumImage.src = selectedAlbum;
                    console.log('Album image element:', albumImage);
                } else {
                    console.error('No albums found in albums.json');
                }
            })
            .catch(error => console.error('Error loading albums:', error));
    }
});
