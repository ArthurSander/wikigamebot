import { GeneralConfigurations } from "../../../Infrastructure/Bootstrap/Configurations/GeneralConfigurations";

export interface IGeneratePageHandler {
    configure(generalConfigurations: GeneralConfigurations): void;
}