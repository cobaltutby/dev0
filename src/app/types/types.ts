export class ExperimentJSON
{
    calculatedFormulations: CalculatedFormulation;
    parentFormulation: ParentFormulation;
    processData: ExperimentProcess [];
    testSchedule: TestSchedule;
    experimentType: ExperimentType;
    experimentInfo: ExperimentInfo;
    ReadOnly: ReadOnly;

}
export class ExperimentInfo
{
    totalQuantity: TotalQuantity;
    constructor()
    {
        this.totalQuantity = new TotalQuantity();
    }
}


export class ReadOnly
{
    readOnly: boolean;
}

export class ExperimentProcess
{
    type: string;
    name: string;
    name_key: string;
}

export class TestSchedule
{
    schedule: Test [];
    allWeeks: Week [];
    temperatures: Temperature [];
}

export class Weeks
{
    week: Week [];
}

export class Week
{
    week: number;
    doTest: boolean;
    constructor()
    {
        this.doTest = false;
    }
}

export class Test
{
    name: string;
    weeks: Weeks;

}
export class Temperature
{
    temperature: string;
}

export class ParentFormulation
{
    data: ParentFormulationData;
    gotData: boolean;
    constructor()
    {
        this.gotData = false;
        this.data = new ParentFormulationData();
    }

}

export class ParentFormulationData
{
    formulation: Formulation[] = [];
    gotData: boolean;
    constructor()
    {
        this.gotData = false;
    }
}

export class Formulation
{

    name: string;
    name_key?: string;
    percent_weight?: number;
    type?:string ;
    Active?:number; //%Active:number;
    Material_Code?: number; //Material Code: number;
    percent_weight_as_100?: number;
    gotData?: boolean;
    caption?: string;
    parameter?: string;
}


export class ExperimentType
{
    data: ExperimentTypeData;
    selected: SelectedExperiment;
    gotData: boolean;
    constructor()
    {
        this.selected = new SelectedExperiment();
    }

}

export class ExperimentTypeData
{
    experimentTypes: Experiment [];
}

export class Experiment
{
    Type:    string [];
    ing?:    string [];
    number?: string [];
    list?:   string [];
}

export class SelectedExperiment
{
    Type:       string [];
    ing?:       string [];
    number?:    string [];
    list?:      string [];
    gotData?:   boolean;
}

export class Selected
{
    Type: string;

}


export class DesignStep
{
    name: string = '';
    id: number = 0;
    finished: boolean = false;
    prevStepFinished: boolean = false;
    constructor()
    {

    }
}




export class CPanelData 
{
    public trial_name: string;
    public experiment_id: number;
    public subproject_name: string;
    public project_name: string;
    public task_id: number[];
    public method_name: string [];
    public planned_step_id:number[];
    constructor()
    {
 
    }
}

export class CalculatedFormulationsType
{
    data:           CalculatedFormulation [];
    gotData:        boolean;
    totalQuantity:  TotalQuantity;
}
export class TotalQuantity
{
    quantity:   string;
    unit:       string;
}

export class CalculatedFormulation
{
    formulation_name:   string;
    formulation:        Formulation [];
}

export class AvailableTests
{
    tests: Test [];
}


export class ProcessData
{
    parameters: Process [];
    gotData: boolean;
}

export class Process
{   
    type: string;
    name: string;
    caption: string;
}
export class DataService
{
    data: {}; 
    gotData = false;
    calculatedFormulations: CalculatedFormulationsType; 
    testSchedule:           TestSchedule;
    processData:            Formulation[];
    availableUnits:         string [];
    parentFormulation:      ParentFormulation;
    processes:              Process [];
    availableTests:         Test [];
    experimentTypes:        ExperimentType;
    experimentInfo:         ExperimentInfo;

    constructor()
    {
        this.parentFormulation      = new ParentFormulation();
        this.experimentTypes        = new ExperimentType();
        this.calculatedFormulations = new CalculatedFormulationsType();
        this.experimentInfo         = new ExperimentInfo();
    }
}

export class Selection
{
    project_name: string;
    subproject_name: string;  
    trial_name: string;
    process: Process;  
    constructor()
    {
        this.process = new Process();
    }
}

export class UserData
{
    userName: string;
}

export class CurrentFrame
{
    name: string;
}

export class LocalStorage
{
    selection: string;
}
export class FlowMaterial
{
    name: string;
    id: number;
}
export class Column
{
    data: string;
    type = 'numeric';
    editor = 'numeric';
    format = "0.0[0000000000]";
    readOnly = true;
    width = 65;
}
export class ParentFormulationHOTSettings
{
    data: any;
    colHeaders: any;
    contextMenu: true;
    width: 100;
    columns: any;
    headerTooltips:
                    {
                        rows: true,
                        columns: true
                    };
    manualColumnResize: true
};
export class FormulationData
{
    gotData : boolean;
    data: FormulationDataType;
    isDoseResponse: boolean;
    mainBatchFormulation: BatchFormulation;
    holeFillFormulation: FillFormulation;
    constructor()
    {
        this.mainBatchFormulation = new BatchFormulation();
        this.holeFillFormulation = new FillFormulation();
    }
}

export class BatchFormulation
{
    data: any [] = [];
}
export class FillFormulation
{
    data: any [] = [];
}

export class FormulationDataType
{
    processData : ProcessArray [];
    columnHeaders: ColumnHeaders [];
    experimentInfo: FormulationInfo []

}
export class ProcessArray
{
    name: string [];
    value: string [];
}
export class ColumnHeaders
{
    columns: string [];
}

export class FormulationInfo
{
    name: string;
    value: string;
}

export class FormulationResult
{
    protocolParameters: any [];
    parameterNames: any [];
    processData: any [];
}
export class StabilitySelection
{
    testWeek: string;
    plotStyle: string;
    tests?: string [];
    temperatures?: string [];

}

export class StabilityOptions
{
    testWeeks: string [];
    plotStyles: string [];

}
export class StabilityParams
{
    TrialName: string;
    newTestWeek: string;

}
export class CellProperties
{
    type: string;
    source: string [];
    renderer: string;    

}
export class StabilityThisData
{
    x: string;
    y: string;
}

export class ThisWeekPlotData
{
    x: string [];
    y: string [];
}
export class Layout
{
    title: string;
    height?: number;
    width?: number;
    yaxis?: Title;
    xaxis?: Title;
}
export class Title
{
    title: string;
}

export class Stability
{
    data: StabilityData;
    gotData: boolean;
    enteredData: any [];
}
export class StabilityData
{
    setup: any;
    samples: any [];
}
export class SampleWeek
{
    temperature: Temperature;
    test: Test [];
}