import { RequestDataForm } from "../../types/FormData";
import { numUsersAverage, timelineMonthsAverage } from "./average";
import { AdminDashboardMapping, AuthenticationMapping, AvailabilityMapping, ContentManagementMapping, DataMigrationMapping, ExtraFeaturesMapping, IndustryDomainMapping, PerformanceMapping, SecurityMapping, SoftwareTypeMapping, TargetMarketMapping, ThirdPartyServiceMapping, UIUXDesignMapping } from "./mapping";
import { RequestData  } from "./types";

class Preprocessor {
    private data: RequestDataForm;
    private transformedData: RequestData;
    constructor(data: RequestDataForm) {
        this.data = data;
    }

    public transform(): RequestData {
        this.transformedData.name = this.data.name;
        this.transformedData.softwarename = this.data.softwarename;
        this.transformedData.currency = this.data.currency;

        this.transformedData.data = [
            SoftwareTypeMapping(this.data.data.softwareType),
            IndustryDomainMapping(this.data.data.industryDomain),
            numUsersAverage(this.data.data.numUsers),
            TargetMarketMapping(this.data.data.targetMarket),
            AdminDashboardMapping(this.data.data.adminDashboard),
            ContentManagementMapping(this.data.data.contentManagement),
            ExtraFeaturesMapping(this.data.data.extraFeatures),
            ThirdPartyServiceMapping(this.data.data.thirdPartyService),
            AuthenticationMapping(this.data.data.authentication),
            DataMigrationMapping(this.data.data.dataMigration),
            UIUXDesignMapping(this.data.data.uiuxDesign),
            PerformanceMapping(this.data.data.performance),
            SecurityMapping(this.data.data.security),
            AvailabilityMapping(this.data.data.availability),
            timelineMonthsAverage(this.data.data.timeline_months)
        ];

        return this.transformedData;
    }
}

export default Preprocessor;