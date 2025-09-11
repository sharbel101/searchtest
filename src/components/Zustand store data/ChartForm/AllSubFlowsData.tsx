//THIS NEEDS TO BE REMOVED (UNCOMMENT) BECAUSE I WANT TO COMMIT WITHOUT ANY ERROR
// 'use client';

// import { QuestionNode } from '@/components/dataflow/Main/flowEngine';

// export const allSubFlows: Record<string, Record<string, QuestionNode>> = {
//   investmentStageFlow: {
//     q1: {
//       id: 'q1',
//       question: 'Have you ever closed an investment round?',
//       answers: {
//         No: { next: 'q2' },
//         Yes: { next: 'q3' },
//       },
//     },
//     q2: {
//       id: 'q2',
//       question: 'Do you have sales going for more than a year?',
//       answers: {
//         No: { setStage: 'IdeationPhase' },
//         Yes: { setStage: 'AngelPhase' },
//       },
//     },
//     q3: {
//       id: 'q3',
//       question: 'How many investment rounds did you close?',
//       answers: {
//         '1': { setStage: 'AngelPhase' },
//         'More than 1': { next: 'q4' },
//       },
//     },
//     q4: {
//       id: 'q4',
//       question: 'Involve any VC investment series?',
//       answers: {
//         No: { setStage: 'AngelPhase' },
//         Yes: { next: 'q5' },
//       },
//     },
//     q5: {
//       id: 'q5',
//       question: 'Which series have you completed?',
//       answers: {
//         'Series A Only': { setStage: 'EarlyVC' },
//         'Series A & B': { setStage: 'AdvancedVC' },
//         'Series A B C': { setStage: 'AdvancedVC' },
//         'More than 4 series': { setStage: 'PE Stages' },
//       },
//     },
//   },
// };
