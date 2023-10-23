import { IDefaultAction } from '../interfaces/default';

/**
 * Pedir documentación a chatGPT
 * @param key key del objeto que mapea las distintas acciones a elegir
 * @param obj objeto que mapea las distintas acciones disponibles
 * @returns retorna la acción a realizar dependiendo de la key ingresada
 * @throws {Error} 'not implemented yet'
 */
const getAction = (
  key: string = '',
  obj: IDefaultAction = {
    default: () => {
      throw new Error('not implemented yet');
    },
  }
) => (Object.keys(obj).includes(key) ? obj[key]() : obj.default());

export default getAction;
