const apiURL =
    'https://wox-react-default-rtdb.europe-west1.firebasedatabase.app/';

export async function sendToServer(json, type) {
    try {
        const response = await fetch(apiURL + type, {
            method: 'post',
            body: JSON.stringify(json),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
