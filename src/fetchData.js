import axios from "axios";

export const fetchData = async (query) => {
    const { data } = await axios.get("https://mashape-community-urban-dictionary.p.rapidapi.com/define", {
        params: {term: query},
        headers: {
            'x-rapidapi-key': '6155235cd7msh8c186a87b398074p1ca682jsn068daba35739',
            'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    });

    return data;
}
