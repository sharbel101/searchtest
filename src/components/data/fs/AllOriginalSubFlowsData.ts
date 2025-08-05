import { FlowSection } from '@/components/data/MainFlow/flow';

//Department Flows Imports
import { D_Private_Equity_Flow } from '@/components/data/fs/Departement/D_PrivateEquity';
import { D_Ideation_Phase_FLow } from '@/components/data/fs/Departement/D_IdeationPhase';
import { D_Early_VC_Flow } from '@/components/data/fs/Departement/D_EarlyVC';
import { D_Angel_Phase_Flow } from '@/components/data/fs/Departement/D_AngelPhase';
import { D_Advanced_VC_Flow } from '@/components/data/fs/Departement/D_AdvancedVC';

//Marketing Flows Imports
import { M_Advanced_VC_Flow } from './Marketing/M_AdvancedVC';
import { M_Angel_Phase_Flow } from './Marketing/M_AngelPhase';
import { M_Early_VC_Flow } from './Marketing/M_EarlyVC';
import { M_Ideation_Phase_FLow } from './Marketing/M_IdeationPhase';
import { M_Private_Equity_Flow } from './Marketing/M_PrivateEquity';

//Financials Flows Imports
import { F_Advanced_VC_Flow } from './Financials/F_AdvancedVC';
import { F_Private_Equity_Flow } from './Financials/F_PrivateEquity';
import { F_Angel_Phase_Flow } from './Financials/F_AngelPhase';
import { F_Early_VC_Flow } from './Financials/F_EarlyVC';
import { F_Ideation_Phase_FLow } from './Financials/F_IdeationPhase';

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
    AdvancedVC: D_Advanced_VC_Flow,
    AngelPhase: D_Angel_Phase_Flow,
    EarlyVC: D_Early_VC_Flow,
    IdeationPhase: D_Ideation_Phase_FLow,
    PrivateEquity: D_Private_Equity_Flow,
  },

  fs_financials: {
    AdvancedVC: F_Advanced_VC_Flow,
    PrivateEquity: F_Private_Equity_Flow,
    AngelPhase: F_Angel_Phase_Flow,
    EarlyVC: F_Early_VC_Flow,
    IdeationPhase: F_Ideation_Phase_FLow,
  },

  fs_marketing: {
    AdvancedVC: M_Advanced_VC_Flow,
    PrivateEquity: M_Private_Equity_Flow,
    AngelPhase: M_Angel_Phase_Flow,
    EarlyVC: M_Early_VC_Flow,
    IdeationPhase: M_Ideation_Phase_FLow,
  },
};
