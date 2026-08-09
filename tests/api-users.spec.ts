import { test, expect } from '@playwright/test';

// Interface en TypeScript para tipar la respuesta de la API REST
interface User {
  id: number;
  name: string;
  email: string;
}

test.describe('Pruebas de API REST - Módulo Usuarios', () => {

  test('GET - Consultar usuario por ID y validar respuesta', async ({ request }) => {
    // Petición HTTP GET a endpoint REST público
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    // Validar status code 200 OK
    expect(response.status()).toBe(200);

    // Tipar y extraer el cuerpo JSON
    const body: User = await response.json();

    // Validaciones de datos en el JSON
    expect(body.id).toBe(1);
    expect(body.email).toContain('@');
    expect(body.name).toBeTruthy();
  });

  test('POST - Crear nuevo usuario vía API REST', async ({ request }) => {
    // Petición HTTP POST enviando datos en el body
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: {
        name: 'Esmeralda Lopez',
        username: 'esmeraldalo',
        email: 'esmeralda@example.com'
      }
    });

    // Validar status code 201 Created
    expect(response.status()).toBe(201);

    const responseData = await response.json();
    expect(responseData.name).toBe('Esmeralda Lopez');
    expect(responseData.username).toBe('esmeraldalo');
  });

});