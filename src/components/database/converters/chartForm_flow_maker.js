// investmentStageFlowUUID.js
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

// Original flow
const investmentStageFlow = {
  q1: {
    id: 'q1',
    question: 'Have you ever closed an investment round?',
    answers: {
      No: { next: 'q2' },
      Yes: { next: 'q3' },
    },
  },
  q2: {
    id: 'q2',
    question: 'Do you have sales going for more than a year?',
    answers: {
      No: { setStage: 'IdeationPhase' },
      Yes: { setStage: 'AngelPhase' },
    },
  },
  q3: {
    id: 'q3',
    question: 'How many investment rounds did you close?',
    answers: {
      1: { setStage: 'AngelPhase' },
      'More than 1': { next: 'q4' },
    },
  },
  q4: {
    id: 'q4',
    question: 'Involve any VC investment series?',
    answers: {
      No: { setStage: 'AngelPhase' },
      Yes: { next: 'q5' },
    },
  },
  q5: {
    id: 'q5',
    question: 'Which series have you completed?',
    answers: {
      'Series A Only': { setStage: 'EarlyVC' },
      'Series A & B': { setStage: 'AdvancedVC' },
      'Series A B C': { setStage: 'AdvancedVC' },
      'More than 4 series': { setStage: 'PE Stages' },
    },
  },
};

// Step 1: generate UUIDs
const idMap = {};
for (const node of Object.values(investmentStageFlow)) {
  idMap[node.id] = uuidv4();
}

// Step 2: rebuild flow with new IDs
const newFlow = {};
for (const node of Object.values(investmentStageFlow)) {
  const newId = idMap[node.id];
  const newAnswers = {};

  for (const [answerKey, outcome] of Object.entries(node.answers)) {
    if (outcome.next) {
      newAnswers[answerKey] = { next: idMap[outcome.next] };
    } else {
      newAnswers[answerKey] = { ...outcome };
    }
  }

  newFlow[newId] = {
    ...node,
    id: newId,
    answers: newAnswers,
  };
}

// --- Custom serializer ---
function objToTS(obj, indent = 2) {
  const spacing = ' '.repeat(indent);

  if (Array.isArray(obj)) {
    return `[\n${spacing}${obj.map((i) => objToTS(i, indent + 2)).join(`,\n${spacing}`)}\n${' '.repeat(indent - 2)}]`;
  } else if (obj && typeof obj === 'object') {
    const entries = Object.entries(obj).map(([k, v]) => {
      const key = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(k) ? k : `"${k}"`;
      return `${key}: ${objToTS(v, indent + 2)}`;
    });
    return `{\n${spacing}${entries.join(`,\n${spacing}`)}\n${' '.repeat(indent - 2)}}`;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else {
    return String(obj);
  }
}

// --- Write file ---
const fileContent = `const investmentStageFlow = ${objToTS(newFlow, 2)};\n`;
fs.writeFileSync(path.resolve('ChartForm_flow.ts'), fileContent, 'utf8');

console.log('✅ investmentStageFlowUUID.ts generated');
