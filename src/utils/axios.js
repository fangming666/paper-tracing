/**
 * axios的封装
 * **/
import * as config from "./configAsiox";
import instance from "./instance"


export const _askAxios = async (obj, joggleName) => {
    config.configAsiox(obj, joggleName);
    return await instance({
        method: obj.method,
        url: obj.url,
        data: obj.data,
        timeout: 5000,
        responseType: 'json'
    })
};