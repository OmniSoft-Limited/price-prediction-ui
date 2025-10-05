import { ContentManagementMapping, ExtraFeaturesMapping, mapEnumArray, ThirdPartyServiceMapping } from '../utils/Preprocessor/mapping';

test('Content Management Mapping', () => {
	const contentManagement_1 = ['Null'];
	const contentManagement_2 = ['Workflow', 'Pages_and_Media'];
	const contentManagement_3 = ['Blog', 'Pages', 'Media'];
	const contentManagement_4 = ['Pages', 'Media'];

	expect(ContentManagementMapping(contentManagement_1)).toBe(0);
	expect(ContentManagementMapping(contentManagement_2)).toBe(1.5);
	expect(ContentManagementMapping(contentManagement_3)).toBeCloseTo(2.333333333333333);
	expect(ContentManagementMapping(contentManagement_4)).toBe(2);  

});

test('Extra Features Mapping', () => {
	const extraFeatures_1 = ['Null'];
	const extraFeatures_2 = ['Search_and_Filter', 'AI_ML_Module', 'Reporting_and_Analysis', 'File_Handling', 'Offile_Mode', 'Data_Backup', 'Notification', 'Search', 'Filter'];
	const extraFeatures_3 = ['AI_ML_Module', 'Reporting_and_Analysis', 'File_Handling', 'Offile_Mode', 'Data_Backup', 'Notification'];
	const extraFeatures_4 = ['Search', 'Filter'];

	expect(ExtraFeaturesMapping(extraFeatures_1)).toBe(0);
    expect(ExtraFeaturesMapping(extraFeatures_2)).toBeCloseTo(3.333333333333333);
	expect(ExtraFeaturesMapping(extraFeatures_3)).toBe(4.5);
    expect(ExtraFeaturesMapping(extraFeatures_4)).toBe(1);
});

test('Third Party Service Mapping', () => {
	const thirdPartyService_1 = ['Null'];
	const thirdPartyService_2 = ['Analytics', 'Payment_Gateway', 'Map', 'Mail'];
	const thirdPartyService_3 = ['Payment_Gateway', 'Map', 'Mail'];
	const thirdPartyService_4 = ['Map', 'Mail'];

	expect(ThirdPartyServiceMapping(thirdPartyService_1)).toBe(0);
	expect(ThirdPartyServiceMapping(thirdPartyService_2)).toBe(2.5);
	expect(ThirdPartyServiceMapping(thirdPartyService_3)).toBe(3);
	expect(ThirdPartyServiceMapping(thirdPartyService_4)).toBe(3.5);
});