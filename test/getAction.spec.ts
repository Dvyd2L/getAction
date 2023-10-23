import getAction from '../src/getAction';

//Prueba unitarias para la función `getAction` utilizando Jest:
describe('getAction', () => {
  // Este código de prueba verifica tres casos:
  // 1. Cuando la clave no existe en el objeto, se debe llamar a la acción predeterminada.
  // 2. Cuando la clave existe en el objeto, se debe llamar a la acción asociada con esa clave.
  // 3. Cuando no se proporciona ninguna acción predeterminada, se debe lanzar un error.

  it('should return the default action when the key is not in the object', () => {
    const defaultAction = jest.fn();
    const actions = {
      default: defaultAction,
    };

    getAction('nonExistentKey', actions);
    expect(defaultAction).toHaveBeenCalled();
  });

  it('should return the action associated with the key when it exists in the object', () => {
    const action1 = jest.fn();
    const action2 = jest.fn();
    const actions = {
      action1,
      action2,
      default: jest.fn(),
    };

    getAction('action1', actions);
    expect(action1).toHaveBeenCalled();
    expect(action2).not.toHaveBeenCalled();
    // Por favor, asegúrate de tener instalado y configurado Jest en tu proyecto antes de ejecutar estas pruebas.
  });

  it('should throw an error when no default action is provided', () => {
    const actions = {
      default: () => {
        throw new Error('not implemented yet');
      },
    };

    expect(() => getAction('nonExistentKey', actions)).toThrow(
      'not implemented yet'
    );
  });
});
