/**
 * require参数的配置
 * **/
export const configAsiox = (config, joggleName) => {
    let token = "abcd";
    config.data = config.data?config.data:{};
    config.url = joggleName;
    config.data["access-token"] = token;
    config.method = "POST";
    return config;
};