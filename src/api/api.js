const key = 'AIzaSyAQrcw62zlWuvJo3l6KqepGkD0osFJbYqc';
const url = `https://www.googleapis.com/books/v1/volumes`;
export const fetchToApi = async (value, categorySelect, sortSelect, startIndex = 0) => {
    const orderBy = `orderBy=${sortSelect}`;
    const category = categorySelect !== 'all' ? `subject:${categorySelect}` : 'terms';
    const searchValue = `${value}%2Bintitle:${value}`;
    const start = `&startIndex=${startIndex}`;
    try {
        const request = await fetch(`${url}?q=${searchValue}%2B${category}&${orderBy}&maxResults=30${start}&key=${key}`);
        return await request.json();
    } catch (e) {
        console.error(e);
    }
};
export const fetchToApiById = async (id) => {
    try {
        const request = await fetch(`${url}/${id}?key=${key}`)
        return await request.json()
    } catch (e) {
        console.error(e)
    }
}