

import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';


const COLLECTION_ID_MAP ={
    appetizers: 1,
    friedrice: 2,
    soup: 3,
    noodles: 4,
    seafood: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
  );

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections.find(
        collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam])
  );

  /*
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);*/