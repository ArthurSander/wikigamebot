import { GeneralConfigurations } from "../../Configurations/GeneralConfigurations";

export interface IGeneralConfigurationFactory {
    create(): GeneralConfigurations;
}