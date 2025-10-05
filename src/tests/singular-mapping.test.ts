import {
	SoftwareTypeMapping,
	IndustryDomainMapping,
	TargetMarketMapping,
	AdminDashboardMapping,
	AuthenticationMapping,
	DataMigrationMapping,
    UIUXDesignMapping,
    PerformanceMapping,
    SecurityMapping,
    AvailabilityMapping,
} from '../utils/Preprocessor/mapping';

test('Testing Software Type Mapping', () => {
	const softwareType_1 = 'Web';
	const softwareType_2 = 'Desktop';
	const softwareType_3 = 'Mobile';
	const softwareType_4 = 'Hybrid';

	expect(SoftwareTypeMapping(softwareType_1)).toBe(1);
	expect(SoftwareTypeMapping(softwareType_2)).toBe(2);
	expect(SoftwareTypeMapping(softwareType_3)).toBe(3);
	expect(SoftwareTypeMapping(softwareType_4)).toBe(4);
});

test('Industry Domain Mapping', () => {
	const industryDomain_1 = 'Ecommerce';
	const industryDomain_2 = 'Travel';
	const industryDomain_3 = 'Hotel_Management';
	const industryDomain_4 = 'Restaurant_Management';
	const industryDomain_5 = 'Content_Management';
	const industryDomain_6 = 'Social_Networking';
	const industryDomain_7 = 'Edtech';
	const industryDomain_8 = 'Healthcare';
	const industryDomain_9 = 'Fintech';
	const industryDomain_10 = 'Portfolio';
	const industryDomain_11 = 'Others';

	expect(IndustryDomainMapping(industryDomain_1)).toBe(1);
	expect(IndustryDomainMapping(industryDomain_2)).toBe(2);
	expect(IndustryDomainMapping(industryDomain_3)).toBe(3);
	expect(IndustryDomainMapping(industryDomain_4)).toBe(4);
	expect(IndustryDomainMapping(industryDomain_5)).toBe(5);
	expect(IndustryDomainMapping(industryDomain_6)).toBe(6);
	expect(IndustryDomainMapping(industryDomain_7)).toBe(7);
	expect(IndustryDomainMapping(industryDomain_8)).toBe(8);
	expect(IndustryDomainMapping(industryDomain_9)).toBe(9);
	expect(IndustryDomainMapping(industryDomain_10)).toBe(10);
	expect(IndustryDomainMapping(industryDomain_11)).toBe(11);
});

test('Target Market Mapping', () => {
	const targetMarket_1 = 'Local';
	const targetMarket_2 = 'Global';
	const targetMarket_3 = 'Both';

	expect(TargetMarketMapping(targetMarket_1)).toBe(1);
	expect(TargetMarketMapping(targetMarket_2)).toBe(2);
	expect(TargetMarketMapping(targetMarket_3)).toBe(3);
});

test('Admin Dashboard Mapping', () => {
	const adminDashboard_1 = 'Null';
	const adminDashboard_2 = 'Basic';
	const adminDashboard_3 = 'Advanced';
	const adminDashboard_4 = 'Professional';

	expect(AdminDashboardMapping(adminDashboard_1)).toBe(0);
	expect(AdminDashboardMapping(adminDashboard_2)).toBe(1);
	expect(AdminDashboardMapping(adminDashboard_3)).toBe(2);
	expect(AdminDashboardMapping(adminDashboard_4)).toBe(3);
});

test('Authentication Mapping', () => {
	const authentication_1 = 'Null';
	const authentication_2 = 'Basic';
	const authentication_3 = 'Social';
	const authentication_4 = 'Multi_Factor';
	const authentication_5 = 'Biometric';

	expect(AuthenticationMapping(authentication_1)).toBe(0);
	expect(AuthenticationMapping(authentication_2)).toBe(1);
	expect(AuthenticationMapping(authentication_3)).toBe(2);
	expect(AuthenticationMapping(authentication_4)).toBe(3);
	expect(AuthenticationMapping(authentication_5)).toBe(4);
});

test('Data Migration Mapping', () => {
	const dataMigration_1 = 'Null';
	const dataMigration_2 = 'No';
	const dataMigration_3 = 'Yes';

	expect(DataMigrationMapping(dataMigration_1)).toBe(0);
	expect(DataMigrationMapping(dataMigration_2)).toBe(1);
	expect(DataMigrationMapping(dataMigration_3)).toBe(2);
});

test('UI/UX Design Mapping', () => {
	const uiuxDesign_1 = 'Basic';
	const uiuxDesign_2 = 'Advanced';
	const uiuxDesign_3 = 'Custom';

	expect(UIUXDesignMapping(uiuxDesign_1)).toBe(1);
	expect(UIUXDesignMapping(uiuxDesign_2)).toBe(2);
	expect(UIUXDesignMapping(uiuxDesign_3)).toBe(3);
});

test('Performance Mapping', () => {
	const performance_1 = 'Basic';
	const performance_2 = 'Medium';
	const performance_3 = 'High';

	expect(PerformanceMapping(performance_1)).toBe(1);
	expect(PerformanceMapping(performance_2)).toBe(2);
	expect(PerformanceMapping(performance_3)).toBe(3);
});

test('Security Mapping', () => {
	const security_1 = 'Null';
	const security_2 = 'Standard';
	const security_3 = 'High';

	expect(SecurityMapping(security_1)).toBe(0);
	expect(SecurityMapping(security_2)).toBe(1);
	expect(SecurityMapping(security_3)).toBe(2);
});

test('Availability Mapping', () => {
	const availability_1 = 'Normal';
	const availability_2 = 'Always';

	expect(AvailabilityMapping(availability_1)).toBe(1);
	expect(AvailabilityMapping(availability_2)).toBe(2);
});