export const API_KEY = "313c4033e11a7f2bdc47708a78d91bbc"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionAndAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
    fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    fetchDramaSeries: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchFamilySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
    fetchKidsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
    fetchMysterySeries: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
    fetchNewsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
    fetchRealitySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
    fetchScifiSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchSoapSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
    fetchTalkSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
    fetchWarAndPoliticsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
    fetchWesternSeries: `/discover/tv?api_key=${API_KEY}&with_genres=37`,

    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchScifiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchTvMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

}

export default requests