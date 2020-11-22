/*==== Api connect ====*/

import axios from "axios";

const apiGetCharacters = () => {
    return axios
        .get("https://www.breakingbadapi.com/api/characters")
        .then(response => {
            return response.data

        });
}

const apiGetCharactersById = (id) => {
    return axios
        .get("https://www.breakingbadapi.com/api/characters/" + id)
        .then(response => {
            return response.data
        });
}

/*==== End of Api connect ====*/

export {
    apiGetCharacters,
    apiGetCharactersById
}