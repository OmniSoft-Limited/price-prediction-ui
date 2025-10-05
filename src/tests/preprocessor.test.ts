import { RequestDataForm } from '../types/FormData';
import Preprocessor from '../utils/Preprocessor';
import { RequestData } from '../utils/Preprocessor/types';

test('Test the Preprocessor', () => {
	const data: RequestDataForm = {
		name: 'test',
		softwarename: 'test',
		data: {
			softwareType: 'Web',
			industryDomain: 'Fintech',
			numUsers: '01-10',
			targetMarket: 'Local',
			adminDashboard: 'Basic',
			contentManagement: ['Pages', 'Media'],
			extraFeatures: ['Search', 'Filter'],
			thirdPartyService: ['Mail'],
			authentication: 'Multi_Factor',
			dataMigration: 'Null',
			uiuxDesign: 'Basic',
			performance: 'Basic',
			security: 'Null',
			availability: 'Normal',
			timeline_months: '9',
		},
		currency: 'USD',
	};

	const expectedData: RequestData = {
		name: 'test',
		softwarename: 'test',
		data: [1, 9, 5.5, 1, 1, 2, 1, 4, 3, 0, 1, 1, 0, 1.0, 9],
		currency: 'USD',
	};

	const preprocessor = new Preprocessor(data);
	expect(preprocessor.transform()).toEqual(expectedData);
});
