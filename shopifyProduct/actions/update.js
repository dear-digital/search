import { applyParams, preventCrossShopDataAccess, save, ActionOptions, UpdateShopifyProductActionContext } from "gadget-server";

/**
 * @param { UpdateShopifyProductActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { UpdateShopifyProductActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  await createProductEmbedding({ record, api, logger, connections });
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};
