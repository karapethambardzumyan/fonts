import { FONTS } from './constants/fonts';

const exceptions = [];

for(let i in FONTS) {
    const font = FONTS[i].split('.');
    const fontFace = {
        family: font[0],
        extension: font[1],
        url: `https://turbologo.com/fonts/app/${ FONTS[i] }`
    };

    const newFont = new FontFace(fontFace.family, `url('${ fontFace.url }')`);
    newFont
        .load()
        .then(() => {})
        .catch(() => exceptions.push(fontFace));
};

document.onclick = () => console.log(exceptions);