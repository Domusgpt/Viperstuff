document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith('album.html')) {
        fetch('albums.json')
            .then(response => response.json())
            .then(albums => {
                // Verify URLs
                const verifyUrl = url => new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve(url);
                    img.onerror = () => reject(url);
                    img.src = url;
                });

                // Verify all album URLs
                Promise.all(albums.map(url => verifyUrl(url).catch(() => null)))
                    .then(results => {
                        const validAlbums = results.filter(url => url !== null);
                        if (validAlbums.length > 0) {
                            const randomIndex = Math.floor(Math.random() * validAlbums.length);
                            const albumImage = document.getElementById('album-image');
                            albumImage.src = validAlbums[randomIndex];
                        } else {
                            console.error('No valid image URLs found in albums.json');
                        }
                    })
                    .catch(error => console.error('Error verifying albums:', error));
            })
            .catch(error => console.error('Error loading albums:', error));
    }
});
