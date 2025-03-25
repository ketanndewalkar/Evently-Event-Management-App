export const getResult = async  (query) => {
    try {
        const data = await fetch(`http://localhost:3000/search?keyword=${query}`);
        return await data.json();
    } catch (error) {
        console.log(error);   
    }
}