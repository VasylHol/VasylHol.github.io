export * from 'src/utils/colorSchema'
export const imageDatabasePath = 'https://image.tmdb.org/t/p/w500'


export const appLanguage = localStorage.getItem('app_language') || 'uk';

export const imagePath = (path) => {
    return `${imageDatabasePath}${path}`
}