document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith('album.html')) {
        const albumImages = [
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/0tlhctodutgfuftl.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/2qnygnyfua04u4nn%20(1).jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/2u56p47uf3w3pwu.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/4ib4fywmdljkmjfi.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/4ljxkmwejkntmjjt.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/7dggy9g8nuufnf9g.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/9plyoxzes9vlz9y9.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/a7n3i7vu6v6gvav3.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/aneki1bf8d7wwe81.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/apauzr9pemqppqzp.jpg"
        ];

        // Log the album images array for debugging
        console.log('Album images:', albumImages);

        // Select a random image
        const randomIndex = Math.floor(Math.random() * albumImages.length);
        const selectedImage = albumImages[randomIndex];

        // Log the selected image for debugging
        console.log('Selected image:', selectedImage);

        // Set the image source
        const albumImageElement = document.getElementById('album-image');
        
        if (albumImageElement) {
            albumImageElement.src = selectedImage;

            // Log the image element for debugging
            console.log('Album image element:', albumImageElement);

            // Handle image loading error
            albumImageElement.onerror = () => {
                console.error('Failed to load image:', selectedImage);
                albumImageElement.src = 'https://via.placeholder.com/150'; // Placeholder image
            };
        } else {
            console.error('Element with ID "album-image" not found.');
        }
    }
});
