import { all, takeLatest, select } from 'redux-saga/effects';
import { IState } from '../..';
import { addFoodToCart } from './actions';

type CheckProductStockRequest = ReturnType<typeof addFoodToCart>;

function* checkFoodStock({ payload }: CheckProductStockRequest) {
  const { food } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find(item => item.food.id === food.id)?.quantity ?? 0
    );
  });

  console.log(currentQuantity);
}

export default all([takeLatest('ADD_FOOD_TO_CART', checkFoodStock)]);
