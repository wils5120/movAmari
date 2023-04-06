import Config from 'react-native-config'

const base_url = 'https://api.themoviedb.org/3/movie'

export const getPopular  = async () => {
    try{
        const res = await fetch(`${base_url}/popular?api_key=${Config.API_KEY}&language=en-ES&page=1`)
        const response = await res.json()
        return response
    }catch(err){
        return err
    }
}

export const getRecommendations  = async () => {
    try{
        const res = await fetch(`${base_url}/top_rated?api_key=${Config.API_KEY}&language=en-ES&page=1`)
        const response = await res.json()
        return response
    }catch(err){
        return err
    }
}