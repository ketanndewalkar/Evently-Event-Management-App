export const getproduct = async (id) =>{
    try {
        const product = await fetch(`http://localhost:3000/get-product?id=${id}`);
        const Array = await product.json();
        console.log(Array.product)
        return Array.product;
    } catch (error) {
        console.log(error);
    }
}