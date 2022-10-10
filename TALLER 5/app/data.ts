import {Attributes} from "./components/characters/characters.js"


export const Data = async (): Promise<Array<Attributes>> => {
      const response = await fetch("https://www.breakingbadapi.com/api/characters");
      const data = await response.json();
      console.log(data);
      return data;
};