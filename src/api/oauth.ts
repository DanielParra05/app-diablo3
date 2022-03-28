import Axios from "axios";

const clientId: string = "c286c0d8c5f847968d57269de338a9ee";
const clientSecret: string = "1rvrTc259EuZrL3yUbBUeLHEly9TBndk";

// API URL para hacer oauth
const region: string = 'eu';
const API_URL: string = `https://${region}.battle.net/oauth/token`;

function getToken() {
    const body: FormData = new FormData();
    body.append('grant_type', 'client_credentials');
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        // Nuestros datos de cliente para OAuth: id y secret
        auth: { username: clientId, password: clientSecret }
    }

    return Axios.post(API_URL, body, config);
}

// Exportamos la función para poder usarla más tarde
export default {
    getToken
}