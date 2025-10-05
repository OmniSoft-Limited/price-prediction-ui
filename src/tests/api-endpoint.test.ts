import { predictPrice } from '../utils/callapi';
import { RequestData, ResponseType } from '../utils/Preprocessor/types';


test('Test the API Endpoint', async () => {
    const data: RequestData = {
        name: 'test',
		softwarename: 'test',
		data: [1, 7, 50.5, 3, 2, 0, 0, 0, 3, 1, 3, 3, 2, 2, 5],
		currency: 'BDT',
	};
     const testApiEndpoint = async (data: RequestData) => {
        const response: ResponseType = await predictPrice(data);
        return response;
    }
	const response = await testApiEndpoint(data);
    
	expect(typeof response.prediction).toBe('number');
	expect(typeof response.curency_price).toBe('number');
	expect(response.currency).toBe('BDT');
});
