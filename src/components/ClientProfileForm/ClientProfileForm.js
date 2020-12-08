import { AuthContext } from '../../store/AuthContext'
import { useContext } from 'react'
import Desktopstructure from '../styled/DesktopStructure'
import SanitaryRegister from '../../pages/SanitaryRegister'
import { 
  BodyLeft,
  BodyRight,
  H3,
  TextSanitaryRegister,
  LinkToSanitaryRegister,
  PhotoClient,
  Form,
  FormItem,
  Input,
  Select,
  ContentButtons,
  ButtonUpdate,
  ButtonCancel,
} from './ClientProfileFormStyles'

export function ClientProfileForm({
  name,
  lastName,
  email,
  address,
  phone,
  identification,
  birthday,
  payType,
  handleChange,
  handleSubmit,
  handleDeleteClient,
})
{
  const register = useContext(AuthContext)

  return(
    <Desktopstructure>
      <BodyLeft>
        <H3>Configura tu Perfil</H3>
        <TextSanitaryRegister> 
          <LinkToSanitaryRegister 
            type='button'
            onClick={register.onOpenModal}
          >Registro Sanitario</LinkToSanitaryRegister>
          <SanitaryRegister
          />
        </TextSanitaryRegister>
        <PhotoClient 
          src="data:image/jpeg;base64,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"
          alt="Foto Del Cliente"
        />
      </BodyLeft>
      <BodyRight>
        <Form onSubmit={handleSubmit}>
          <FormItem>
            <label>Nombre</label>
            <Input
              className="Form__clientname-input"
              id="name"
              type="text"
              name="name"
              value={name}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Nombre*"
              required
            />
          </FormItem>
          <FormItem>
            <label>Apellido</label>
            <Input
              className="Form__lastname-input"
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Apellido"
            />
          </FormItem>
          <FormItem>
            <label>Correo electrónico</label>
            <Input
              className="Form__email-input"
              id="email"
              type="email"
              name="clientEmail"
              value={email}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
            />
          </FormItem>
          <FormItem>
            <label>Dirección</label>
            <Input
              className="Form__address-input"
              id="address"
              type="text"
              name="address"
              value={address}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Dirección"
            />
          </FormItem>
          <FormItem>
            <label>Número de telefono</label>
            <Input
              className="Form__phone-input"
              id="phone"
              type="text"
              name="phone"
              value={phone}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Número de telefono"
            />
          </FormItem>
          <FormItem>
            <label>Número de identificación</label>
            <Input
              className="Form__identification-input"
              id="identification"
              type="text"
              name="identification"
              value={identification}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Número de identificación"
            />
          </FormItem>
          <FormItem>
            <label>Fecha de Nacimiento:</label>
            <Input
              className="Form__birthday-input"
              id="birthday"
              type="date"
              name="birthday"
              value={birthday}
              autoComplete="on"
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <label>Metodo de pago</label>
            <Select
              id="payType"
              name="payType"
              value={payType}
              onChange={handleChange}
              required
            >   
              <option value="cash">
                Efectivo
              </option>
              <option value="payU">
                PayU
              </option>
            </Select>
          </FormItem>
          <ContentButtons>
            <ButtonUpdate
              className="ButtonUpdate"
              id="ButtonUpdate"
              type="submit"
              value="Actualizar"              
            >
            </ButtonUpdate>
            <ButtonCancel
              className="ButtonCancel"
              id="ButtonCancel"
              type="button"
              value="Eliminar Cuenta"
              onClick={handleDeleteClient}
            >
            </ButtonCancel>
          </ContentButtons>
        </Form>
      </BodyRight>
    </Desktopstructure>
  )
}

