document.addEventListener("DOMContentLoaded", () => {
    console.log('Current path:', window.location.pathname);
    
    if (window.location.pathname.endsWith('/album')) {
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

        console.log('Album images:', albumImages);

        const randomIndex = Math.floor(Math.random() * albumImages.length);
        const selectedImage = albumImages[randomIndex];

        console.log('Selected image:', selectedImage);

        const albumImageElement = document.getElementById('album-image');
        
        if (albumImageElement) {
            albumImageElement.src = selectedImage;

            console.log('Album image element:', albumImageElement);

            albumImageElement.onload = () => {
                console.log('Image loaded successfully:', selectedImage);
            };

            albumImageElement.onerror = () => {
                console.error('Failed to load image:', selectedImage);
                albumImageElement.src = 'https://via.placeholder.com/150';
                console.log('Placeholder image set');
            };
        } else {
            console.error('Element with ID "album-image" not found.');
        }
    } else {
        console.log('Not on the album page, script will not execute.');
    }
});
