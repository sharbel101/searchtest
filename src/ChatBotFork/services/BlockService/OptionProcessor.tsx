// import UserOptions from '../../components/ChatBotBody/UserOptions/UserOptions';
// import { Block } from '../../types/Block';
// import { Params } from '../../types/Params';

// /**
//  * Handles processing of options in current block.
//  *
//  * @param block current block being processed
//  * @param params contains parameters that can be used/passed into attributes
//  */
// export const processOptions = async (block: Block, params: Params) => {
//   const options = block.options;
//   if (!options) {
//     return;
//   }

//   let parsedOptions;
//   if (typeof options === 'function') {
//     parsedOptions = options(params);
//     if (parsedOptions instanceof Promise) {
//       parsedOptions = await parsedOptions;
//     }
//   } else {
//     parsedOptions = options;
//   }

//   // if array provided, transform to object with default values
//   if (Array.isArray(parsedOptions)) {
//     parsedOptions = { items: parsedOptions };
//   }

//   // nothing to render if no items present
//   if (!('items' in parsedOptions)) {
//     return;
//   }
//   if (parsedOptions.items.length == 0) {
//     return;
//   }

//   // defaults to not reusable if not provided
//   if (parsedOptions.reusable == null) {
//     parsedOptions.reusable = false;
//   }

//   // note that sendOutput has no default here, as it fallback to the global
//   // settings.chatInput.sendOptionOutput inside user options component if not specified
//   const path = params.currPath as string;
//   const content = <UserOptions options={parsedOptions} path={path} />;
//   await params.injectMessage(content);
// };

import UserOptions from '../../components/ChatBotBody/UserOptions/UserOptions';
import { Block } from '../../types/Block';
import { Params } from '../../types/Params';

/**
 * Handles processing of options in current block.
 *
 * @param block current block being processed
 * @param params contains parameters that can be used/passed into attributes
 */
export const processOptions = async (block: Block, params: Params) => {
  const options = block.options;
  if (!options) return;

  let resolvedOptions: any;

  if (typeof options === 'function') {
    resolvedOptions = options(params);
    if (resolvedOptions instanceof Promise) {
      resolvedOptions = await resolvedOptions;
    }
  } else {
    resolvedOptions = options;
  }

  // normalize array to object with items
  let parsedOptions: {
    items: string[] | { id: string; value: string }[];
    sendOutput?: boolean;
    reusable?: boolean;
  };

  if (Array.isArray(resolvedOptions)) {
    parsedOptions = { items: resolvedOptions };
  } else if ('items' in resolvedOptions) {
    parsedOptions = resolvedOptions;
  } else {
    // fallback in case of unexpected shape
    return;
  }

  // nothing to render if no items present
  if (!parsedOptions.items || parsedOptions.items.length === 0) return;

  // default values
  if (parsedOptions.reusable == null) parsedOptions.reusable = false;

  const path = params.currPath as string;
  const content = <UserOptions options={parsedOptions} path={path} />;
  await params.injectMessage(content);
};
