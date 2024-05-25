export async function fetchData(id: string) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        return res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}