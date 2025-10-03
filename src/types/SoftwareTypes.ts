import * as Enums from './enums';

export interface SoftwareTypes {
    softwareType: Enums.SoftwareType,
    industryDomain: Enums.IndustryDomain,
    numUsers: number,
    targetMarket: Enums.TargetMarket,
    adminDashboard: Enums.AdminDashboard,
    contentManagement: Enums.ContentManagement,
    extraFeatures: Enums.ExtraFeatures,
    thirdPartyService: Enums.ThirdPartyService,
    authentication: Enums.Authentication,
    dataMigration: Enums.DataMigration,
    uiuxDesign: Enums.UIUXDesign,
    performance: Enums.Performance,
    security: Enums.Security,
    availability: Enums.Availability
    timeline_months: number,
}