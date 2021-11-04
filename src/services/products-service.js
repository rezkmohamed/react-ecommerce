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

export const fetchProductsProfileLogged = () => {
    const token = localStorage.getItem('token');
    const fetchProductsProfileLoggedReq = async () => {
        const response = await fetch(urlBase + "myproducts", {
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

    return fetchProductsProfileLoggedReq();
}

export const fetchProductsByNameLike = (nameLike) => {
    const token = localStorage.getItem('token');
    const fetchProductsByNameLikeReq = async () => {
        const response = await fetch(urlBase + "namelike/" + nameLike, {
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

    return fetchProductsByNameLikeReq();
}

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

export const shopProducts = (products) => {
    const token = localStorage.getItem('token');
    const shopProductsReq = async () => {
        const response = await fetch(urlBase + "shop", {
            method: 'PUT',
            body: JSON.stringify(products),
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

    return shopProductsReq();
};