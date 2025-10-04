import {
	AdminDashboard,
	Authentication,
	ContentManagement,
	DataMigration,
	ExtraFeatures,
	IndustryDomain,
	SoftwareType,
	TargetMarket,
	ThirdPartyService,
	UIUXDesign,
	Performance,
	Security,
	Availability,
} from '../../types/enums';

// --- Helper functions ---

// Map a string to an enum value safely
function mapEnumValue<T extends object>(enumObj: T, key: string, defaultValue: number): number {
	return (enumObj as any)[key] ?? defaultValue;
}

// Average numeric arrays
function average(values: number[]): number {
	if (!values.length) return 0;
	return values.reduce((a, b) => a + b, 0) / values.length;
}

// Map an array of strings to enum values and return average
function mapEnumArray(enumObj: object, items: string[], defaultValue: number): number {
	if (!Array.isArray(items) || !items.length) return defaultValue;
	const mapped = items.map((item) => mapEnumValue(enumObj, item, defaultValue));
	return average(mapped);
}

// --- Single-value mappings ---

export function SoftwareTypeMapping(softwareType: string): number {
	switch (softwareType) {
		case 'Web':
			return SoftwareType.Web;
		case 'Desktop':
			return SoftwareType.Desktop;
		case 'Mobile':
			return SoftwareType.Mobile;
		case 'Hybrid':
			return SoftwareType.Hybrid;
		default:
			return SoftwareType.Web;
	}
}

export function IndustryDomainMapping(industryDomain: string): number {
	switch (industryDomain) {
		case 'Ecommerce':
			return IndustryDomain.Ecommerce;
		case 'Travel':
			return IndustryDomain.Travel;
		case 'Hotel_Management':
			return IndustryDomain.Hotel_Management;
		case 'Restaurant_Management':
			return IndustryDomain.Restaurant_Management;
		case 'Content_Management':
			return IndustryDomain.Content_Management;
		case 'Social_Networking':
			return IndustryDomain.Social_Networking;
		case 'Edtech':
			return IndustryDomain.Edtech;
		case 'Healthcare':
			return IndustryDomain.Healthcare;
		case 'Fintech':
			return IndustryDomain.Fintech;
		case 'Portfolio':
			return IndustryDomain.Portfolio;
		case 'Others':
			return IndustryDomain.Others;
		default:
			return IndustryDomain.Ecommerce;
	}
}

export function TargetMarketMapping(targetMarket: string): number {
	switch (targetMarket) {
		case 'Local':
			return TargetMarket.Local;
		case 'Global':
			return TargetMarket.Global;
		case 'Both':
			return TargetMarket.Both;
		default:
			return TargetMarket.Local;
	}
}

export function AdminDashboardMapping(adminDashboard: string): number {
	switch (adminDashboard) {
		case 'Null':
			return AdminDashboard.Null;
		case 'Basic':
			return AdminDashboard.Basic;
		case 'Advanced':
			return AdminDashboard.Advanced;
		case 'Professional':
			return AdminDashboard.Professional;
		default:
			return AdminDashboard.Null;
	}
}

export function AuthenticationMapping(authentication: string): number {
	switch (authentication) {
		case 'Null':
			return Authentication.Null;
		case 'Basic':
			return Authentication.Basic;
		case 'Social':
			return Authentication.Social;
		case 'Multi_Factor':
			return Authentication.Multi_Factor;
		case 'Biometric':
			return Authentication.Biometric;
		default:
			return Authentication.Null;
	}
}

export function DataMigrationMapping(dataMigration: string): number {
	switch (dataMigration) {
		case 'Null':
			return DataMigration.Null;
		case 'No':
			return DataMigration.No;
		case 'Yes':
			return DataMigration.Yes;
		default:
			return DataMigration.Null;
	}
}

export function UIUXDesignMapping(uiuxDesign: string): number {
	switch (uiuxDesign) {
		case 'Basic':
			return UIUXDesign.Basic;
		case 'Advanced':
			return UIUXDesign.Advanced;
		case 'Custom':
			return UIUXDesign.Custom;
		default:
			return UIUXDesign.Basic;
	}
}

export function PerformanceMapping(performance: string): number {
	switch (performance) {
		case 'Basic':
			return Performance.Basic;
		case 'Medium':
			return Performance.Medium;
		case 'High':
			return Performance.High;
		default:
			return Performance.Basic;
	}
}

export function SecurityMapping(security: string): number {
	switch (security) {
		case 'Null':
			return Security.Null;
		case 'Standard':
			return Security.Standard;
		case 'High':
			return Security.High;
		default:
			return Security.Null;
	}
}

export function AvailabilityMapping(availability: string): number {
	switch (availability) {
		case 'Normal':
			return Availability.Normal;
		case 'Always':
			return Availability.Always;
		default:
			return Availability.Normal;
	}
}

// --- Array mappings (averaged) ---

export function ContentManagementMapping(contentManagement: string[]): number {
	return mapEnumArray(ContentManagement, contentManagement, ContentManagement.Null);
}

export function ExtraFeaturesMapping(extraFeatures: string[]): number {
	return mapEnumArray(ExtraFeatures, extraFeatures, ExtraFeatures.Null);
}

export function ThirdPartyServiceMapping(thirdPartyService: string[]): number {
	return mapEnumArray(ThirdPartyService, thirdPartyService, ThirdPartyService.Null);
}
