const urlBase = "http://localhost:8080/products/";

export const fetchProducts = () => {
    const token = localStorage.getItem('token');
    const fetchProductsReq = async () => {
        const response = await fetch(urlBase, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        return data;
    }

    return fetchProductsReq();
};

export const fetchProductById = (idProduct) => {
    const token = localStorage.getItem('token');
    const fetchProductByIdReq = async () => {
        const response = await fetch(urlBase + idProduct, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        return data;
    }

    return fetchProductByIdReq();
};

export const addProduct = (product) => {
    const token = localStorage.getItem('token');
    const addProductReq = async () => {
        const response = await fetch(urlBase + "new", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return addProductReq();
};

