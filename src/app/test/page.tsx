'use client';

import React, { useState } from 'react';
import { z, ZodSchema } from 'zod';

export default function ZodParserTest() {
  // Simulating a value from DB
  const validationString = `
    z.string({ required_error: "this needs to be a str" })
     .url({ message: "you need to add a signature with a valid url" })
     .max(5, { message: "File size exceeds 5 char" })
  `;

  // ---- Parsing Engine ----
  function parseValidation(schemaString: string): ZodSchema {
    const fn = new Function('z', `return (${schemaString});`);
    return fn(z);
  }

  const validationSchema = parseValidation(validationString);

  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleValidate() {
    const result = validationSchema.safeParse(value);
    if (!result.success) {
      setError(result.error.issues[0]?.message || 'Invalid');
    } else {
      setError(null);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Test Zod Validation Parsing v2</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
        style={{ border: '1px solid black', padding: 5 }}
      />
      <button
        className="p-1 bg-black text-white"
        onClick={handleValidate}
        style={{ marginLeft: 10 }}
      >
        Validate
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>(Click on Valid to make sure)</p>
    </div>
  );
}
