import { predictPrice } from "../utils/callapi";
import { RequestData, ResponseType } from "../utils/Preprocessor/types";

export const data: RequestData = {
	name: 'test',
	softwarename: 'test',
	data: [3, 4, 750.0, 2, 1, 1.0, 3, 1, 3, 0, 3.0, 2, 2, 1.0, 9],
	currency: 'USD',
};

async function testApiEndpoint() {
    const response: ResponseType = await predictPrice(data);
    return response;
}

test('Test the API Endpoint', async () => {
    const response = await testApiEndpoint();
    expect(typeof response.prediction).toBe('number');
    expect(typeof response.curency_price).toBe('number');
    expect(response.currency).toBe('USD');
});