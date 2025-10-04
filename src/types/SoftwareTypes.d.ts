import * as Enums from './enums';

export interface SoftwareTypes {
    softwareType: string,
    industryDomain: string,
    numUsers: string,
    targetMarket: string,
    adminDashboard: string,
    contentManagement: string[],
    extraFeatures: string[],
    thirdPartyService: string[],
    authentication: string,
    dataMigration: string,
    uiuxDesign: string,
    performance: string,
    security: string,
    availability: string,
    timeline_months: string
}