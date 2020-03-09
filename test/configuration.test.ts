import * as assert from "power-assert";
import { Configuration } from "..";
import { AxiosHttpClientFactory } from "../lib/spi/http/axiosHttpClient";
import { HttpClient, HttpClientFactory } from "../lib/spi/http/httpClient";

/*
 * Copyright © 2018 Atomist, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

describe("configuration", () => {

    it("be a default", () => {
        const c: HttpClientFactory  = Configuration.http.client.factory;

        assert.ok((c instanceof AxiosHttpClientFactory));
    });
    it("override default", () => {
        class MockFactory implements HttpClientFactory {

            public create(url?: string): HttpClient {
                return undefined;
            }
        }
        Configuration.http.client.factory = new MockFactory();

        assert.ok((Configuration.http.client.factory instanceof MockFactory));
    });
});
