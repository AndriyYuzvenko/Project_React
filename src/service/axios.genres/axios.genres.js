import {axiosService} from "../axios.servie/axios.service";
import urls, {api} from "../../urls/urls";

export const axiosGenres = {
    getAll: () => axiosService.get(api.genresAPI).then(item => item.data)
}