type Character = {
    name: string;
    gender: 'male' | 'female';
    height: string;
    mass: number;
}

export interface SWAPIResponse {
    count?: number;
    results?: Character[]
}

// birth_year: "92BBY"
// created: "2014-12-19T16:54:53.618000Z"
// edited: "2014-12-20T21:17:50.375000Z"
// eye_color: "blue"
// films: ["https://swapi.dev/api/films/4/"]
// gender: "male"
// hair_color: "brown"
// height: "193"
// homeworld: "https://swapi.dev/api/planets/28/"
// mass: "89"
// name: "Qui-Gon Jinn"
// skin_color: "fair"
// species: []
// starships: []
// url: "https://swapi.dev/api/people/32/"
// vehicles: ["https://swapi.dev/api/vehicles/38/"]
