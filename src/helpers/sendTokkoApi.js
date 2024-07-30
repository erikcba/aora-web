
const sendTokkoApi = async (data) => {

    const apiKey = import.meta.env.VITE_TOKKO_API_KEY
    const url = `https://tokkobroker.com/api/v1/webcontact/?key=${apiKey}`

    const payload = {

        api_key: apiKey,
        name: data.name,
        mail: data.mail,
        phone: data.phone,
        tags: data.tags

    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const text = await response.text()
            if (text) {
                const jsonResponse = JSON.parse(text)
                return jsonResponse;
            } else {
                console.warn('La respuesta no contiene un cuerpo JSON.')
                return {}; 
            }

        } else {
            console.error('Error al enviar los datos a la API de Tokko')
        }
    } catch (error) {
        console.error('Error:', error);
    }
}



export default sendTokkoApi