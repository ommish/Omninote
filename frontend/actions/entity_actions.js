import * as EntityUtil from '../util/entity_api_util';

export const RECEIVE_ALL_ENTITIES = "RECEIVE_ALL_ENTITIES";

export const receiveAllEntities = (entities) => {
  return {
    type: RECEIVE_ALL_ENTITIES,
    notebooks: entities.notebooks,
    notes: entities.notes,
    tags: entities.tags,
  };
};

export const fetchAll = () => {
  return (dispatch) => {
    EntityUtil.fetchAll().then((entities) => dispatch(receiveAllEntities(entities)))
  };
};
