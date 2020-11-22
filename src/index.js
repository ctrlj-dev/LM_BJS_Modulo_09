import "./style.css";
import * as Databusiness from "./data-business.js";
import * as Utils from "./utils.js";


Databusiness.apiGetCharacters().then(data => {
   
    const charactersArray = [];

    for (let element of data) {
        let node = Utils.createCharacterRow(element);

        node.onclick = function () {
            Utils.showCharacter(element);
        }

        charactersArray.push(node);
    }

    for (let element of charactersArray) {
        document.getElementById("root").append(element);
    }

});