const investmentStageFlow = {
  'fe2edcdc-d8f2-4be3-bf06-c444a163b4a5': {
    id: 'fe2edcdc-d8f2-4be3-bf06-c444a163b4a5',
    question: 'Have you ever closed an investment round?',
    answers: {
      No: {
        next: '4485c5d6-922c-4365-8323-4ac41389c024',
      },
      Yes: {
        next: 'fab3e030-d0c2-4b7e-b8cd-84ebc8ca6a93',
      },
    },
  },
  '4485c5d6-922c-4365-8323-4ac41389c024': {
    id: '4485c5d6-922c-4365-8323-4ac41389c024',
    question: 'Do you have sales going for more than a year?',
    answers: {
      No: {
        setStage: 'IdeationPhase',
      },
      Yes: {
        setStage: 'AngelPhase',
      },
    },
  },
  'fab3e030-d0c2-4b7e-b8cd-84ebc8ca6a93': {
    id: 'fab3e030-d0c2-4b7e-b8cd-84ebc8ca6a93',
    question: 'How many investment rounds did you close?',
    answers: {
      '1': {
        setStage: 'AngelPhase',
      },
      'More than 1': {
        next: 'e731beaa-e24b-4dcc-accc-322cf21f264e',
      },
    },
  },
  'e731beaa-e24b-4dcc-accc-322cf21f264e': {
    id: 'e731beaa-e24b-4dcc-accc-322cf21f264e',
    question: 'Involve any VC investment series?',
    answers: {
      No: {
        setStage: 'AngelPhase',
      },
      Yes: {
        next: '6eb553e6-2023-4310-83d5-b1c1553d70d8',
      },
    },
  },
  '6eb553e6-2023-4310-83d5-b1c1553d70d8': {
    id: '6eb553e6-2023-4310-83d5-b1c1553d70d8',
    question: 'Which series have you completed?',
    answers: {
      'Series A Only': {
        setStage: 'EarlyVC',
      },
      'Series A & B': {
        setStage: 'AdvancedVC',
      },
      'Series A B C': {
        setStage: 'AdvancedVC',
      },
      'More than 4 series': {
        setStage: 'PE Stages',
      },
    },
  },
};
