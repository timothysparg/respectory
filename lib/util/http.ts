import * as _ from "lodash";
import {
    DefaultHttpClientFactory,
    HttpClient,
} from "../spi/http/httpClient";
import { Configuration } from "../..";

/**
 * Return a HttpClient for given url
 *
 * This implementation falls back to the DefaultHttpClientFactory if no
 * configuration is provided and no running client instance can be found.
 */
export function httpClient(url: string): HttpClient {
    return Configuration.http.client.factory.create(url);
}
