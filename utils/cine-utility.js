function getImgUrl(name) {
    return new URL(`../src/assets/movie-covers/${name}`, import.meta.url).href
 }

 export {getImgUrl};