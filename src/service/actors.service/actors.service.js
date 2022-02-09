import {axiosService} from '../axios.servie/axios.service';
import {api} from '../../urls/urls';

export const actorsService = {
    getAll: (id) => axiosService.get('/movie/' + id + api.actors).then(item => item.data)
}