import { createClient } from '@/utils/supabase/client';
import {
  DBFlowSection,
  DBFlowField,
  DBCurrentStates,
  Dbdependencies,
  Dependency,
  DBresponse,
} from '@/components/database/DBtypes';

import { useMainDBFlowStore } from './zustand_containers/MainFlowStore';
import { FieldType } from '../Zustand store data/MainFlow/flow';
import { SidebarFlowStore } from './zustand_containers/SideBarFlowStore';
import { useUserInfo } from '@/components/database/zustand_containers/UsersInfo';
const { user_id } = useUserInfo.getState();

const supabase = createClient();

// ---------- Queries ----------

// Fetch all sections
export async function getAllMainSections(): Promise<DBFlowSection[]> {
  const { data, error } = await supabase.from('main_flow_sections').select('*');

  if (error) {
    console.error('Error fetching main sections:', error.message);
    return [];
  }

  const { setSections } = useMainDBFlowStore.getState();

  //for zustand store
  setSections(data);

  return data ?? [];
}

export async function getAllOrderedMainSections(): Promise<DBFlowSection[]> {
  const { data, error } = await supabase
    .from('main_flow_sections')
    .select('*')
    .order('order_index', { ascending: true }); // fetch in ascending order

  if (error) {
    console.error('Error fetching main sections:', error.message);
    return [];
  }

  const { setSections } = useMainDBFlowStore.getState();

  // Store in zustand
  setSections(data);

  return data ?? [];
}

// Fetch all fields
export async function getAllMainFields(
  section_id: string,
): Promise<DBFlowField[]> {
  const { data, error } = await supabase
    .from('main_flow_fields')
    .select('*')
    .eq('sectionid', section_id);

  if (error) {
    console.error('Error fetching main fields:', error.message);
    return [];
  }

  //in case we want to use the zustand store.
  const {} = useMainDBFlowStore.getState();

  return data ?? [];
}

// Fetch a specific field
export async function getSpecificMainField(
  sectionId: string,
  fieldId: string,
): Promise<DBFlowField | null> {
  const { data, error } = await supabase
    .from('main_flow_fields')
    .select('*')
    .eq('sectionid', sectionId)
    .eq('id', fieldId)
    .maybeSingle();

  if (error) {
    console.error('Error fetching main field:', error.message);
    return null;
  }

  return data;
}

// Fetch a specific section
export async function getSpecificMainSection(
  sectionId: string,
): Promise<DBFlowSection | null> {
  const { data, error } = await supabase
    .from('main_flow_sections')
    .select('*')
    .eq('id', sectionId)
    .single();

  console.log('this is the specific main section: ', data);
  if (error) {
    console.error('Error fetching main section:', error.message);
    return null;
  }

  return data;
}

// Fetch current state
export async function getCurrentState(
  user_id: string,
): Promise<DBCurrentStates | null> {
  const { data, error } = await supabase
    .from('current_states')
    .select('*')
    .eq('user_id', user_id)
    .single();

  if (error) {
    console.error('Error fetching current state:', error.message);
    return null;
  }

  const DBdata: DBCurrentStates = data;

  const { setCurrentInjectionType, setIsInFlowFunc, setStage } =
    useMainDBFlowStore.getState();
  setCurrentInjectionType(data?.flow_type);
  setIsInFlowFunc(data?.is_flow_func);
  setStage(data?.stage);

  return data;
}

// Upsert current state
export async function setCurrentState(state: DBCurrentStates, user_id: string) {
  try {
    const { data, error } = await supabase
      .from('current_states')
      .upsert({
        user_id,
        ...state,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;

    const { setCurrentInjectionType, setIsInFlowFunc } =
      useMainDBFlowStore.getState();
    setCurrentInjectionType(data?.flow_type);
    setIsInFlowFunc(data?.is_flow_func);

    return data;
  } catch (error) {
    console.error('Error setting current state:', error);
    throw error;
  }
}

// export async function getCurrentMainFieldOriginal (
//   user_id: string,
// ): Promise<DBFlowField | null> {
//   const current_state = await getCurrentState(user_id);
//   if (!current_state || current_state.current_main_flow_field_id === null ) {
//     console.warn("can't access a current state!");
//     const starting_node = await getMainFieldStartingNodes();

//     console.log("this is the starting node field: ", starting_node);

//     if (!starting_node){
//       console.warn("can't fetch starting nodes from get current main field");
//       return null;
//     }

//     // zustand store
//     const { setCurrentField  } = useMainDBFlowStore.getState()
//     setCurrentField(starting_node)

//     await setCurrentState({user_id:user_id,
//       current_main_flow_field_id: starting_node?.id,
//     })

//     return starting_node;
//   }

//   if (!current_state.current_main_flow_section_id || !current_state.current_main_flow_field_id) {
//     console.warn("Missing section_id or field_id in current state");
//     return null;
//   }

//   const current_field = await getSpecificMainField(
//     current_state.current_main_flow_section_id,
//     current_state.current_main_flow_field_id,
//   );
//   if (!current_field) {
//     console.warn("can't access a current field (from get current main field)");
//     return null;
//   }

//   // zustand store
//   const { setCurrentField  } = useMainDBFlowStore.getState()
//   setCurrentField(current_field)

//   return current_field;
// }

export async function getCurrentMainField(
  user_id: string,
): Promise<DBFlowField | null> {
  let current_state = await getCurrentState(user_id);

  // If no state exists or field is null, initialize starting node
  if (!current_state || !current_state.current_main_flow_field_id) {
    const starting_node = await getMainFieldStartingNodes();

    if (!starting_node) {
      console.warn("can't fetch starting nodes from get current main field");
      return null;
    }

    await setCurrentState(
      {
        current_main_flow_field_id: starting_node.id,
      },
      user_id,
    );

    // Fetch latest state after upsert
    current_state = await getCurrentState(user_id);

    const latest_field =
      current_state?.current_main_flow_section_id &&
      current_state.current_main_flow_field_id
        ? await getSpecificMainField(
            current_state.current_main_flow_section_id,
            current_state.current_main_flow_field_id,
          )
        : starting_node;

    // Update zustand store
    const { setCurrentField } = useMainDBFlowStore.getState();
    setCurrentField(latest_field);

    return latest_field;
  }

  // Normal path: fetch current field
  if (
    !current_state.current_main_flow_section_id ||
    !current_state.current_main_flow_field_id
  ) {
    console.warn('Missing section_id or field_id in current state');
    return null;
  }

  const current_field = await getSpecificMainField(
    current_state.current_main_flow_section_id,
    current_state.current_main_flow_field_id,
  );

  if (!current_field) {
    console.warn("can't access a current field (from get current main field)");
    return null;
  }

  // Update zustand store
  const { setCurrentField } = useMainDBFlowStore.getState();
  setCurrentField(current_field);

  return current_field;
}

// export async function getCurrentMainSectionOriginal(
//   user_id: string,
// ): Promise<DBFlowSection | null> {
//   const current_state = await getCurrentState(user_id);
//   if (!current_state || current_state.current_main_flow_section_id === null) {
//      const starting_nodes = await getMainSectionStartingNodes();

//     if (!starting_nodes){
//       console.warn("can't fetch starting nodes from get current main section");
//       return null;
//     }

//     await setCurrentState({user_id:user_id,
//       current_main_flow_section_id: starting_nodes?.id,
//       // current_main_flow_field_id: starting_nodes?.firstfield
//     })

//     //zustand store
//     const { setCurrentSection, setCurrentField  } = useMainDBFlowStore.getState()
//     setCurrentSection(starting_nodes);

//     return starting_nodes

//   }

//   if (!current_state.current_main_flow_section_id) {
//     console.warn("Missing section_id or field_id in current state");
//     return null;
//   }

//   const current_section = await getSpecificMainSection(
//     current_state.current_main_flow_section_id,
//   );
//   if (!current_section) {
//     console.warn("can't access a current state!", current_state);
//     return null;
//   }

//   //zustand store
//   const { setCurrentSection  } = useMainDBFlowStore.getState()
//   setCurrentSection(current_section)

//   return current_section;
// }

export async function getCurrentMainSection(
  user_id: string,
): Promise<DBFlowSection | null> {
  let current_state = await getCurrentState(user_id);

  // If no state exists or section is null, initialize starting node
  if (!current_state || !current_state.current_main_flow_section_id) {
    const starting_section = await getMainSectionStartingNodes();

    if (!starting_section) {
      console.warn("can't fetch starting nodes from get current main section");
      return null;
    }

    await setCurrentState(
      {
        current_main_flow_section_id: starting_section.id,
      },
      user_id,
    );

    // Fetch latest state after upsert
    current_state = await getCurrentState(user_id);

    const latest_section = current_state?.current_main_flow_section_id
      ? await getSpecificMainSection(current_state.current_main_flow_section_id)
      : starting_section;

    if (!latest_section) {
      console.warn(
        "can't get the latest section from the get current main section",
      );
      return null;
    }

    //this is for the sidebar to display all the section's fields
    const allSectionFields = await getAllMainFields(latest_section?.id);

    // Update zustand store
    const { setCurrentSection, setSectionFieldsBulk } =
      useMainDBFlowStore.getState();
    setCurrentSection(latest_section);
    // this is for the side bar that displays each section's fields when we click on a certain one
    setSectionFieldsBulk(latest_section.id, allSectionFields);

    return latest_section;
  }

  // Normal path: fetch current section
  if (!current_state.current_main_flow_section_id) {
    console.warn('Missing section_id in current state');
    return null;
  }

  const current_section = await getSpecificMainSection(
    current_state.current_main_flow_section_id,
  );
  if (!current_section) {
    console.warn("can't access a current section!", current_state);
    return null;
  }

  if (!current_state.sidebar_index) {
    console.warn(
      "can't get a sidebar index from the current state in the getCurrentMainSection",
    );
    return null;
  }

  // Update zustand store
  const { setCurrentSection } = useMainDBFlowStore.getState();
  const { setCurrentSideBarSectionIndex } = SidebarFlowStore.getState();
  setCurrentSection(current_section);
  setCurrentSideBarSectionIndex(current_state?.sidebar_index);

  return current_section;
}

export async function getMainSectionStartingNodes(): Promise<DBFlowSection | null> {
  try {
    const { data, error } = await supabase
      .from('main_flow_sections')
      .select('*')
      .not('starting_node', 'is', null)
      .maybeSingle();

    if (error) throw error;

    //zustand store
    const { setCurrentSection } = useMainDBFlowStore.getState();
    setCurrentSection(data);

    return data;
  } catch (error) {
    console.error(
      'Error fetching main starting nodes (in section function):',
      error,
    );
    throw error;
  }
}

export async function getMainFieldStartingNodes(): Promise<DBFlowField | null> {
  const starting_section = await getMainSectionStartingNodes();
  if (!starting_section) {
    console.warn('no starting section from the get main field starting nodes');
    return null;
  }

  const first_field_id = starting_section.firstfield;
  console.log(
    'this is the first field id from get main field starting nodes',
    first_field_id,
  );
  const first_field = await getSpecificMainField(
    starting_section.id,
    first_field_id,
  );

  if (!first_field) {
    console.warn('No first field from the get main field starting nodes');
    return null;
  }

  // zustand store
  const { setCurrentField } = useMainDBFlowStore.getState();
  setCurrentField(first_field);

  return first_field;
}

// ---------- Flow Navigation ----------

export async function goToNextMainField(user_id: string) {
  const current_state = await getCurrentState(user_id);

  if (!current_state) return null;
  console.log('this is the current state', current_state);

  if (
    !current_state.current_main_flow_section_id ||
    !current_state.current_main_flow_field_id
  ) {
    console.warn('Missing section_id or field_id in current state');
    return null;
  }

  const currentField = await getSpecificMainField(
    current_state.current_main_flow_section_id,
    current_state.current_main_flow_field_id,
  );
  console.log('this is the current field', currentField);
  if (
    !currentField ||
    currentField.nextfield === null ||
    currentField.nextfield === undefined
  ) {
    console.warn('No next field found. in go to next main section');
    return null;
  }

  const nextField = await getSpecificMainField(
    current_state.current_main_flow_section_id,
    currentField.nextfield,
  );

  if (nextField) {
    await setCurrentState(
      {
        current_main_flow_field_id: nextField.id,
      },
      user_id,
    );
  }

  //this peace of code will jumps to the next section if we reached the last field in a section
  if (!nextField || nextField === null || nextField === undefined) {
    // const nextSection = await goToNextMainSection(user_id);

    // if(!nextSection){
    //   console.warn("There are no more fields, trying to move to the next section but failed!");
    //   return null;
    // }

    // const firstfield = await getSpecificMainField(nextSection.id, nextSection.firstfield);
    // return firstfield;
    return null;
  }

  // zustand store
  const { setCurrentField } = useMainDBFlowStore.getState();
  setCurrentField(nextField);

  return nextField;
}

export async function goToNextMainSection(user_id: string) {
  const current_state = await getCurrentState(user_id);
  if (!current_state) return null;

  if (!current_state.current_main_flow_section_id) {
    console.warn('Missing section_id or field_id in current state');
    return null;
  }

  const currentSection = await getSpecificMainSection(
    current_state.current_main_flow_section_id,
  );

  if (!currentSection) {
    console.warn('No current section found.');
    return null;
  }

  const nextSectionId = currentSection.nextnode;

  const nextSection = await getSpecificMainSection(nextSectionId);
  console.log(
    'this is the next section: (from go to next main section)',
    nextSection,
  );
  if (nextSection) {
    await setCurrentState(
      {
        current_main_flow_section_id: nextSection.id,
        current_main_flow_field_id: nextSection.firstfield,
        sidebar_index: nextSection.order_index,
      },
      user_id,
    );
  }

  //zustand store
  const { setCurrentSection } = useMainDBFlowStore.getState();
  setCurrentSection(nextSection);

  return nextSection;
}

export async function getQuestionBody(user_id: string) {
  const current_field = await getCurrentMainField(user_id);
  if (!current_field) {
    console.warn("Can't get the field to extract the question body!");
    return 'Unknown Field.';
  }
  return current_field.label;
}

// export async function getCurrentDependencies(
//   user_id: string,
//   field: DBFlowField
// ): Promise<Dbdependencies | null> {

//   console.log("this is the field in the get current Dependencies :", field);

//   const flowinjection_dependencies = field.flowinjection?.dependencies;

//   console.log("this is the flow injection dependencies:", flowinjection_dependencies);

//   if (!flowinjection_dependencies) return null;

//   const entries = Object.entries(flowinjection_dependencies);

//   // Map each dependency to a promise
//   const results = await Promise.all(
//     entries.map(async ([key, dep]) => {
//       if (!dep.internal) return [key, null];

//       try {
//         const code = dep.internal.replace(/\?/g, `"${user_id}"`);
//         const fn = new Function(
//           "supabase",
//           `return (async () => { return ${code}; })();`
//         );

//         const result = await fn(supabase);
//         return [key, result];
//       } catch (err) {
//         console.error(`Error running dependency for ${key}:`, err);
//         return [key, null];
//       }
//     })
//   );

//   // Convert back to an object
//   const collected_dependencies = Object.fromEntries(results);
//   console.log("THIS IS THE COLLECTED DEPENDENCIES:", collected_dependencies);

//   return collected_dependencies;
// }

export async function getCurrentDependencies(
  user_id: string,
  field: DBFlowField,
): Promise<Dbdependencies | null> {
  console.log('📌 Field in getCurrentDependencies:', field);

  const flowinjection_dependencies = field.flowinjection?.dependencies;
  console.log('📌 Flow injection dependencies:', flowinjection_dependencies);

  if (!flowinjection_dependencies) return null;

  const results = await Promise.all(
    Object.entries(flowinjection_dependencies).map(async ([key, dep]) => {
      try {
        if (dep.internal) {
          const { table, column, conditions } = dep.internal;

          // Tell supabase what a row looks like, relationships are unknown
          let query = supabase.from(table).select(column);

          for (const condition of conditions) {
            const value =
              condition.value === '$user_id' ? user_id : condition.value;

            switch (condition.operator) {
              case '=':
                query = query.eq(condition.field, value);
                break;
              case '!=':
                query = query.neq(condition.field, value);
                break;
              case 'is':
                query = query.is(condition.field, value);
                break;
              case 'not':
                query = query.not(condition.field, 'is', value);
                break;
              default:
                throw new Error(`Unsupported operator: ${condition.operator}`);
            }
          }

          const { data, error } = await query.single();

          if (error) {
            console.error(`❌ Error fetching dependency "${key}":`, error);
            return [key, null];
          }

          // Type-safe property access using bracket notation with proper typing
          const columnValue =
            data && typeof data === 'object' && column in data
              ? (data as Record<string, unknown>)[column]
              : null;

          return [key, columnValue];
        }

        if (dep.external) {
          return [`${key}_external`, null];
        }

        return [key, null];
      } catch (err) {
        console.error(`🔥 Exception in dependency "${key}":`, err);
        return [key, null];
      }
    }),
  );

  const collected_dependencies = Object.fromEntries(results);
  console.log('✅ Collected dependencies:', collected_dependencies);

  return collected_dependencies;
}
