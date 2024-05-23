document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith('album.html')) {
        const albums = [
            "https://i.imgur.com/0A0lKcR.jpg",
            "https://i.imgur.com/1B1mLkE.jpg",
            "https://i.imgur.com/2C2nMlF.jpg",
            "https://i.imgur.com/3D3oMlG.jpg",
            "https://i.imgur.com/4E4pMlH.jpg",
            "https://i.imgur.com/5F5qMlI.jpg",
            "https://i.imgur.com/6G6rMlJ.jpg",
            "https://i.imgur.com/7H7sMlK.jpg",
            "https://i.imgur.com/8I8tMlL.jpg",
            "https://i.imgur.com/9J9uMlM.jpg",
            "https://i.imgur.com/A1aMlN.jpg",
            "https://i.imgur.com/B2bMlO.jpg",
            "https://i.imgur.com/C3cMlP.jpg",
            "https://i.imgur.com/D4dMlQ.jpg",
            "https://i.imgur.com/E5eMlR.jpg",
            "https://i.imgur.com/F6fMlS.jpg",
            "https://i.imgur.com/G7gMlT.jpg",
            "https://i.imgur.com/H8hMlU.jpg",
            "https://i.imgur.com/I9iMlV.jpg",
            "https://i.imgur.com/J0jMlW.jpg"
        ];

        console.log('Albums loaded:', albums);
        if (albums.length > 0) {
            const randomIndex = Math.floor(Math.random() * albums.length);
            const selectedAlbum = albums[randomIndex];
            console.log('Selected album:', selectedAlbum);
            const albumImage = document.getElementById('album-image');
            albumImage.src = selectedAlbum;
            console.log('Album image element:', albumImage);
        } else {
            console.error('No albums found in albums array');
        }
    }
});
