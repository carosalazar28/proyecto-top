import { useHistory } from 'react-router-dom'
import ButtonPrimary from '../styled/ButtonPrimary'
import {
  ContainerReserve,
  ContainerPaymentZone,
  ContainerTotal,
  SectionTitle,
  SectionMenuDetails,
  SectionRestaurantDetails,
  Th,
  TdItem,
  TdRestaurantDetails,
  TdItemTotal,
  TdPrice,
  TdTotalPrice,
  Span,
  LinkSanitaryUpdate,
  ButtonSecundary
} from './ReservationStyles'
import { AuthContext } from '../../store/AuthContext'
import { useContext } from 'react'
import SanitaryRegister from '../../pages/SanitaryRegister'
import SanitaryRegisterCompanion from '../../pages/SanitaryRegisterCompanion'
import { removeReservation } from '../../store/actions/Reservation.actions'
import { useDispatch } from 'react-redux'

export function ReservationConfirmPayment({
  name,
  deposit,
  date,
  time,
  handlePayment
})

{
  
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(removeReservation())
    history.push('/client-profile')
  }

  const register = useContext(AuthContext)

  return (
    <>
      <ContainerReserve>
        <SectionTitle>
        <h2>TU PEDIDO</h2>
        </SectionTitle>
        <SectionMenuDetails>
          <tr> 
            <Th></Th>
            <th></th>
          </tr>
          <tr>
            <TdItem>
              pago minimo
            </TdItem>
            <TdPrice>
              { deposit }
            </TdPrice>
          </tr>
          <tr>
            <TdItemTotal>
              Total a pagar
            </TdItemTotal>
            <TdTotalPrice>
              { deposit }
            </TdTotalPrice>
          </tr>
        </SectionMenuDetails>
        <SectionRestaurantDetails>
          <tr> 
            <Th></Th>
            <th></th>
          </tr>
          <tr>
            <TdRestaurantDetails>
              Tu Restaurante
            </TdRestaurantDetails>
            <TdPrice>
              { name }
            </TdPrice>
          </tr>
          <tr>
            <TdRestaurantDetails>
              Fecha
            </TdRestaurantDetails>
            <TdPrice>
              { date }
            </TdPrice>
          </tr>
          <tr>
            <TdRestaurantDetails>
              hora
            </TdRestaurantDetails>
            <TdPrice>
              { time }
            </TdPrice>
          </tr>
        </SectionRestaurantDetails>
        <Span>
          <LinkSanitaryUpdate 
            type='button'
            onClick={register.onOpenModal}
          >
            Actualizar registro sanitario
          </LinkSanitaryUpdate>
          <SanitaryRegister/>
        </Span>
        <Span>
          <LinkSanitaryUpdate 
            type="button"
            onClick={register.onOpenModalCompanion}
          >
            Agregar registro sanitario de mis compañeros
          </LinkSanitaryUpdate>
          <SanitaryRegisterCompanion/>
        </Span>
      </ContainerReserve>
      <ContainerPaymentZone>
        <ContainerTotal>
          <span>
            Total a pagar
          </span>
          <span>
            { deposit }
          </span>
        </ContainerTotal>
        <ButtonPrimary
          type='button'
          value='Confirmar y Pagar'
          onClick={handlePayment}
        />
        <ButtonSecundary
          type='button'
          value='Cancelar'
          onClick={handleClick}
        />
    </ContainerPaymentZone>
    </>
  )
}
