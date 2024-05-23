document.addEventListener("DOMContentLoaded", () => {
    console.log('Current path:', window.location.pathname);

    if (window.location.pathname.endsWith('/album')) {
        const albumImages = [
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
            "https://i.imgur.com/J0jMlW.jpg",
            "https://i.imgur.com/K1kMlX.jpg",
            "https://i.imgur.com/L2lMlY.jpg",
            "https://i.imgur.com/M3mMlZ.jpg",
            "https://i.imgur.com/N4nMla.jpg",
            "https://i.imgur.com/O5oMlb.jpg",
            "https://i.imgur.com/P6pMlc.jpg",
            "https://i.imgur.com/Q7qMld.jpg",
            "https://i.imgur.com/R8rMle.jpg",
            "https://i.imgur.com/S9sMlf.jpg",
            "https://i.imgur.com/T0tMlg.jpg",
            "https://i.imgur.com/U1uMlh.jpg",
            "https://i.imgur.com/V2vMli.jpg",
            "https://i.imgur.com/W3wMlj.jpg",
            "https://i.imgur.com/X4xMlk.jpg",
            "https://i.imgur.com/Y5yMll.jpg",
            "https://i.imgur.com/Z6zMlm.jpg",
            "https://i.imgur.com/01AMln.jpg",
            "https://i.imgur.com/12BMlo.jpg",
            "https://i.imgur.com/23CMlp.jpg",
            "https://i.imgur.com/34DMlq.jpg",
            "https://i.imgur.com/45EMlr.jpg",
            "https://i.imgur.com/56FMls.jpg",
            "https://i.imgur.com/67GMlt.jpg",
            "https://i.imgur.com/78HMlu.jpg",
            "https://i.imgur.com/89IMlv.jpg",
            "https://i.imgur.com/90J0Mw.jpg",
            "https://i.imgur.com/A1B1Mx.jpg",
            "https://i.imgur.com/B2C2My.jpg",
            "https://i.imgur.com/C3D3Mz.jpg",
            "https://i.imgur.com/D4E4M0.jpg"
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

        // 1/10 chance to trigger special effect and redirect
        if (Math.random() < 0.1) {
            const body = document.querySelector('body');
            body.style.transition = 'all 0.5s';
            let colors = ['yellow', 'black', 'pink'];
            let colorIndex = 0;
            const interval = setInterval(() => {
                body.style.backgroundColor = colors[colorIndex % colors.length];
                colorIndex++;
                body.style.transform = `rotate(${Math.random() * 20 - 10}deg) translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
            }, 100);
            setTimeout(() => {
                clearInterval(interval);
                body.style.backgroundColor = '';
                body.style.transform = '';
                window.location.href = 'https://okito.netlify.app/index.html';
            }, 3000);
        }

    } else {
        console.log('Not on the album page, script will not execute.');
    }
});
