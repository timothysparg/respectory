import {
    HttpClientFactory,
} from "./spi/http/httpClient";

export interface ConfigurationOptions {
    http?: {
        client?: {
            factory?: HttpClientFactory,
        },
    };
}
