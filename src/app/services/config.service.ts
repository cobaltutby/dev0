import { Injectable }               from '@angular/core';

@Injectable()
export class ConfigService
{
    controlPanelProtocol                = 'LabAutomation/LaundryLiquids/Design/ControlPanel';
    experimentCreationProtocol          = 'LabAutomation/LaundryLiquids/Design/CreateExperiment';
    experimentTypesProtocol             = 'LabAutomation/LaundryLiquids/Design/ExperimentTypes';
    //parentFormulationProtocol         = 'LabAutomation/LaundryLiquids/Design/ParentFormulation';
    parentFormulationProtocol           = 'LabAutomation/LaundryLiquids/Design/ParentFormulationFromExcel';
    calculateAllFormulationsProtocol    = 'LabAutomation/LaundryLiquids/Design/CalculateAllFormulations';
    processParametersProtocol           = 'LabAutomation/LaundryLiquids/Design/ProcessParameters';
    testScheduleProtocol                = 'LabAutomation/LaundryLiquids/Design/TestSchedule';
    availableTestsProtocol              = 'LabAutomation/LaundryLiquids/Design/GetAvailableTests';
    formulationDataProtocol             = 'LabAutomation/LaundryLiquids/Formulation/FormulationData';
    stabilitySetupProtocol              = 'LabAutomation/LaundryLiquids/Stability/StabilityInputGridData';
    saveToExperimentProtocol            = 'LabAutomation/LaundryLiquids/Design/UploadExperimentDesign';
    experiment2JSON                     = 'LabAutomation/LaundryLiquids/Design/Experiment2JSON';
    findFlowMaterial                    = 'LabAutomation/LaundryLiquids/Design/FindFlowMaterial';
    saveFormulationData                 = 'LabAutomation/LaundryLiquids/Formulation/SaveFormulation';
    createStabilitySteps                = 'LabAutomation/LaundryLiquids/Design/SaveAnalyticalSubsteps';
    saveStabilityToExperimentProtocol   = 'LabAutomation/LaundryLiquids/Stability/StabOutput';
    getEnteredStabilityDaya             = 'LabAutomation/LaundryLiquids/Stability/StabOutputToJSON';
    pdfBatchSheet                       = 'LabAutomation/LaundryLiquids/Formulation/GeneratePDFBatchSheet';
    designProtocol                      = 'LabAutomation/LaundryLiquids/Design/FormulationDesign';
    //Not built yet
    formulationProtocol                 = 'LabAutomation/FormulationResults';
    stabilityProtocol                   = 'LabAutomation/StabilityData';
    appTitle                            = 'Structured Data Capture';  
    newTestWeek                         = 'LabAutomation/LaundryLiquids/Stability/AddNewTestWeek';
}