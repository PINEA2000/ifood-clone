import { useCallback } from 'react';
import {
  connect,
  MapStateToProps,
  useDispatch,
  // useSelector,
} from 'react-redux';
import { formatPrice } from '../utils/format';
import { IState } from '../store';
import { removeFoodFromCartSuccess } from '../store/ducks/cart';
import { ICartItem } from '../store/ducks/cart/types';

import { Container } from '../styles/components/FloatingBox';
import Empty from './Empty';

interface IFloatingBoxProps {
  open?: boolean;
  items?: ICartItem[];
  total?: number;
}

function FloatingBox({ open, items, total }: IFloatingBoxProps) {
  const dispatch = useDispatch();
  // const state = useSelector(state => state);

  const handleRemoveFoodFromCart = useCallback(
    (foodId: string) => {
      dispatch(removeFoodFromCartSuccess(foodId));
    },
    [dispatch],
  );

  return (
    <Container open={open}>
      {items.length === 0 ? (
        <>
          <Empty />
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </>
      ) : (
        <>
          <table>
            {items.map(item => (
              <>
                <header>
                  <span>Seu pedido em</span>
                  <h1>{item.restaurant_slug}</h1>
                  <h2>Ver Cardápio</h2>
                </header>
                <main key={item.food.id}>
                  <div className="flex-items">
                    <span>
                      {item.quantity}x {item.food.title}
                    </span>
                    <strong>{item.subtotal}</strong>
                  </div>
                  <footer className="actions">
                    <button type="button" className="edit-action">
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveFoodFromCart(item.food.id)}
                    >
                      Remover
                    </button>
                  </footer>
                </main>
              </>
            ))}

            <div>
              <span>Subtotal</span>
              <span>{total}</span>
            </div>

            <div>
              <span>Taxa de entrega</span>
              <span>R$ 0,00</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>{total}</strong>
            </div>

            <button type="button" className="submit-button">
              Escolher forma de pagamento
            </button>
          </table>
        </>
      )}
    </Container>
  );
}

const mapStateToProps: MapStateToProps<any, any> = (state: IState) => ({
  items: state.cart.items.map(item => ({
    ...item,
    subtotal: formatPrice(item.quantity * item.food.price),
    subtotal_number: item.quantity * item.food.price,
  })),
  total: formatPrice(
    state.cart.items.reduce((total, item) => {
      return total + item.food.price * item.quantity;
    }, 0),
  ),
});

export default connect(mapStateToProps)(FloatingBox);
