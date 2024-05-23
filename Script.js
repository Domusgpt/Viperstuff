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
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/apauzr9pemqppqzp.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/b11r8smw40d6wd81%20(1).jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/bkjclusid8wzdzuj.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/blnzi3z5015w5l5i.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/bz0bk50vze0w0ebb.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/d2163ewdowbieo1i.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/dhgodmp1r1tuo1p.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/genecj1xgjlaxlce.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/gzdp84ec4kil44dl.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/i3uplny4w2ctp2y.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/i4n6p18om9qg89.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/images%20(22).jpeg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/images%20(24).jpeg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/images%20(25).jpeg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/images%20(26).jpeg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/kdcp2al7a0fi27df.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/lifqq9bhfn22qnb.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/o1sn18mekkoq8qk.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/o296fd5ofedf5e.jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/oddnz5s55oin5izd%20(1).jpg",
            "https://raw.githubusercontent.com/Domusgpt/Viperstuff/main/ou5cfo3mei1uf1m.jpg"
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
