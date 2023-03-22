const key = 'AIzaSyAQrcw62zlWuvJo3l6KqepGkD0osFJbYqc';

export const fetchToApi = async (value, categorySelect, sortSelect) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=`;
    const orderBy = `orderBy=${sortSelect}`;
    const category = categorySelect !== 'all' ? `%2Bsubject:${categorySelect}` : '%2Bterms';
    const searchValue = `${value}%2Bintitle:${value}`;

    try {
        const request = await fetch(`${url}${searchValue}${category}&${orderBy}&maxResults=30&key=${key}`)
        return await request.json()
    } catch (e) {
        console.error(e)
    }
}