import axios from 'axios';
import { useEffect, useState } from 'react';
const BASE_URL = `https://api.themoviedb.org/3`

const TMDB_TOKEN = process.env.REACT_APP_TMDB_API_KEY;

const headers = {
    Authorization:`bearer ${TMDB_TOKEN}`
}

export const fetchDataFromApi = async (url, params) =>{
    console.log(TMDB_TOKEN,"eTHIS IS THE TOKEN");
    try{
        const {data} = await axios.get(BASE_URL+ url,{
            headers,
            params
        })
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
}

