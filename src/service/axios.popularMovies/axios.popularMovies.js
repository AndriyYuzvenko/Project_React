import {axiosService} from "../axios.servie/axios.service";
import {api} from "../../urls/urls";

export const axiosPopularMovies = {
    getALl: () => axiosService.get(api.popularMovies).then(item => item.data)
}