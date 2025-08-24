// app/api/populate-db/route.ts
import { chatFlow } from '@/components/data/MainFlow/flow';
import type { ChatFlow } from '@/components/data/MainFlow/flow';
import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

async function storeChatFlowOnce(chatFlow: ChatFlow) {
  const supabase = await createClient();

  try {
    for (const sectionKey in chatFlow) {
      const section = chatFlow[sectionKey];

      console.log(
        ' Before the insert - this is the route.ts for the upload data ',
      );
      const { error: sectionError } = await supabase
        .from('flow_sections')
        .insert([
          {
            sectionId: section.sectionId,
            sectionTitle: section.sectionTitle,
            firstField: section.firstField ?? null,
            nextNode: section.nextNode ?? null,
          },
        ]);

      if (sectionError) {
        console.error(
          `Error inserting section ${section.sectionId}:`,
          sectionError,
        );
        throw sectionError;
      }

      for (const fieldKey in section.fields) {
        const field = section.fields[fieldKey];

        const { error: fieldError } = await supabase
          .from('flow_fields')
          .insert([
            {
              sectionId: section.sectionId,
              fieldId: field.id,
              type: field.type,
              label: field.label,
              placeholder: field.placeholder ?? null,
              description: field.description ?? null,
              required: field.required ?? false,
              validation: field.validation ?? null,
              options: field.options ? JSON.stringify(field.options) : null,
              flowInjection: field.flowInjection ?? null,
              extractionType: field.extractionType ?? null,
            },
          ]);

        if (fieldError) {
          console.error(`Error inserting field ${field.id}:`, fieldError);
          throw fieldError;
        }
      }
    }

    return { result: 'success' };
  } catch (err) {
    console.error('Insertion failed with error:', err);
    return { result: 'failed', error: err };
  }
}

export async function POST() {
  const response = await storeChatFlowOnce(chatFlow);
  return NextResponse.json(response);
}
