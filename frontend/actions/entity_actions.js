import * as EntityUtil from '../util/entity_api_util';

export const RECEIVE_ALL_ENTITIES = "RECEIVE_ALL_ENTITIES";

export const receiveAllEntities = (entitiesRes) => {
  return {
    type: RECEIVE_ALL_ENTITIES,
    notebooks: entitiesRes.notebooks,
    notes: entitiesRes.notes,
    tags: entitiesRes.tags,
    flags: entitiesRes.flags,
  };
};

export const fetchAll = () => {
  return (dispatch) => {
    return EntityUtil.fetchAll().then((entitiesRes) => dispatch(receiveAllEntities(entitiesRes)))
  };
};
