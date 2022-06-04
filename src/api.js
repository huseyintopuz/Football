import axios from 'axios';

const baseUrl = 'http://challenge.vole.io';

async function getPlayers() {
    const response = await axios.get(`${baseUrl}/cards/market`);
    return response.data;
}

async function getMycards() {
    const response = await axios.get(`${baseUrl}/cards/mycards`);
    return response.data;
}

async function getCard(id) {
    const response = await axios.get(`${baseUrl}/cards/${id}`);
    return response.data;
}

async function getBudget() {
    const response = await axios.get(`${baseUrl}/budget`);
    return response.data;
}

export {getPlayers, getMycards, getCard, getBudget};