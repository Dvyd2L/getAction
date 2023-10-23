# Documentación de la función getAction

## Descripción
La función getAction es una función de TypeScript que selecciona y ejecuta una acción basada en una clave proporcionada. Esta función es útil cuando necesitas mapear diferentes acciones a diferentes claves.

## Uso

```TypeScript
import { IDefaultAction } from '../interfaces/default';
import getAction from './getAction';

const actions: IDefaultAction = {
  action1: () => console.log('Acción 1 ejecutada'),
  action2: () => console.log('Acción 2 ejecutada'),
  default: () => console.log('Acción predeterminada ejecutada'),
};

getAction('action1', actions); // Imprime: 'Acción 1 ejecutada'
getAction('nonExistentKey', actions); // Imprime: 'Acción predeterminada ejecutada'
```

## Parámetros

key (string): La clave de la acción que quieres ejecutar. Si la clave no existe en el objeto de acciones, se ejecutará la acción predeterminada.
obj (IDefaultAction): Un objeto que mapea las claves a sus respectivas acciones. Debe incluir una acción predeterminada bajo la clave ‘default’.
Retorno
La función getAction no tiene un valor de retorno explícito. En su lugar, ejecuta la acción correspondiente basada en la clave proporcionada.

## Excepciones

Si no se proporciona una acción predeterminada en el objeto de acciones, la función getAction lanzará un error con el mensaje ‘not implemented yet’.
