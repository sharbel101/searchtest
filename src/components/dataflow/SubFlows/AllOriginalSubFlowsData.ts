import { FlowSection } from '../MainFlow/flow';
import { Advanced_VC_Flow } from './Departement/AdvancedVC';
import { Angel_Phase_Flow } from './Departement/AngelPhase';
import { Early_VC_Flow } from './Departement/EarlyVC';
import { Ideation_Phase_FLow } from './Departement/IdeationPhase';
import { Private_Equity_Flow } from './Departement/PrivateEquity';

export const STAGES = {
  ADVANCED_VC: 'Advanced VC',
  ANGEL_FACE: 'Angel Face',
  EARLY_VC: 'Early VC',
  IDEATION_PHASE: 'Ideation Phase',
  PRIVATE_EQUITY: 'Private Equity',
} as const;

export type StageSubFlow = {
  [nodeId: string]: FlowSection;
};

export type StageCollection = {
  [stageName: string]: StageSubFlow;
};

export type TypeOriginalSubFlowsContainer = {
  [department: string]: StageCollection;
};

export const AllOriginalSubFlowsData: TypeOriginalSubFlowsContainer = {
  fs_department: {
    AdvancedVC: Advanced_VC_Flow,
    AngelPhase: Angel_Phase_Flow,
    EarlyVC: Early_VC_Flow,
    IdeationPhase: Ideation_Phase_FLow,
    PrivateEquity: Private_Equity_Flow,
  },
};
