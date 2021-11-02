const urlBase = "http://localhost:8080/";


export const registerProfile = (email, password, isVendor) => {
    const registerProfileReq = async () => {
        const response = await fetch(urlBase + "register", {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                isVendor: isVendor
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return registerProfileReq();
}