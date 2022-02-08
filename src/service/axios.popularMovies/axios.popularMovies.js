import {axiosService} from "../axios.servie/axios.service";
import {api} from "../../urls/urls";

export const axiosPopularMovies = {
    getAll: (pageID) => axiosService.get(api.popularMovies+pageID).then(item => item.data)
}