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
    Availability
} from '../../types/enums';

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

export function ContentManagementMapping(contentManagement: string): number {
	switch (contentManagement) {
		case 'Null':
			return ContentManagement.Null;
		case 'Workflow':
			return ContentManagement.Workflow;
		case 'Pages_and_Media':
			return ContentManagement.Pages_and_Media;
		case 'Blog':
			return ContentManagement.Blog;
		default:
			return ContentManagement.Null;
	}
}

export function ExtraFeaturesMapping(extraFeatures: string): number {
	switch (extraFeatures) {
		case 'Null':
			return ExtraFeatures.Null;
		case 'Search_and_Filter':
			return ExtraFeatures.Search_and_Filter;
		case 'AI_ML_Module':
			return ExtraFeatures.AI_ML_Module;
		case 'Reporting_and_Analysis':
			return ExtraFeatures.Reporting_and_Analysis;
		case 'File_Handling':
			return ExtraFeatures.File_Handling;
		case 'Offile_Mode':
			return ExtraFeatures.Offile_Mode;
		case 'Data_Backup':
			return ExtraFeatures.Data_Backup;
		case 'Notification':
			return ExtraFeatures.Notification;
		default:
			return ExtraFeatures.Null;
	}
}

export function ThirdPartyServiceMapping(thirdPartyService: string): number {
	switch (thirdPartyService) {
		case 'Null':
			return ThirdPartyService.Null;
		case 'Analytics':
			return ThirdPartyService.Analytics;
		case 'Payment_Gateway':
			return ThirdPartyService.Payment_Gateway;
		case 'Map':
			return ThirdPartyService.Map;
		case 'Mail':
			return ThirdPartyService.Mail;
		default:
			return ThirdPartyService.Null;
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