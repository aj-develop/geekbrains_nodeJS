export async function getTranslation(lang1, lang2, q) {
    const response = await fetch(`http://localhost:3000/api?lang1=${lang1}&lang2=${lang2}&q=${q}`, {
        method: 'GET',
        accept: 'application/json',
        //mode: 'no-cors',
    })
    return await response.json();
}