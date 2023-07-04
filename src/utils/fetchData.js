// Connect with RapidAPI - ExerciseDB
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2c84f76a8emsh7d67c32b97c8e00p13d87djsn30f178c5b05c',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2c84f76a8emsh7d67c32b97c8e00p13d87djsn30f178c5b05c',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
} 