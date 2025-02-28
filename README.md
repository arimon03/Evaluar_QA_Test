Para ejecutar la prueba, clonar el repositorio.

  Luego abrri la carpeta "cypress"
  Abrir la carpeta e2e
  ahi se encuentra el archivo "Evaluar_QA_Test.cy.js", que es el test automatizado.

Para correr, se debe activar Cypress en tu editor de codigo en el caso utilice IntelliJ, con el codigo; "npx cypress open"
Nota: se debe tener instalado Node.JS

En este mismo repositorio de deja el resto de la prueba en archivo .pdf

Nota: si se tiene antivirus como Karspesky desactivarlos para hacer la prueba por que este bloquea el acceso al sitio porque detecta que el certificado SSL no es válido o está incompleto. Esto significa que Cypress no puede acceder a la página, 
lo que causa que la prueba falle

//Explicación Detallada de codigo.
  describe('Debe agregar una nueva tarea a la lista', () => { ... })

  Define el conjunto de pruebas con un título general.
  it('Agregar una tarea y verificar que se muestra en la lista', () => { ... })

  Define una prueba específica con una descripción de lo que debe hacer.
  cy.visit('https://wc-react-todo-app.netlify.app/');

  Abre la URL de la aplicación para comenzar la prueba.
  cy.contains('Add Task').click();

  Busca el botón que contiene el texto "Add Task" y hace clic en él.
  cy.get('#title').should('be.visible');

  Verifica que el campo de entrada del título está visible en la página.
  cy.get('#title').type('Comprar leche');

  Escribe "Comprar leche" en el campo de entrada.
  cy.get('#title').invoke('val').should('not.be.empty');

  Verifica que el campo de entrada no esté vacío después de escribir en él.
  cy.get('#type').should('be.visible');

  Verifica que el selector de tipo de tarea sea visible.
  cy.get('#type').select('incomplete', { force: true });

  Selecciona la opción "incomplete" en el selector de tipo.
  cy.get('#type').should('have.value', 'incomplete');

  Confirma que la selección se ha realizado correctamente.
  cy.get('button[type="submit"]').should('not.be.disabled');

  Asegura que el botón de envío no está deshabilitado.
  cy.get('button[type="submit"]').click();

  Hace clic en el botón para agregar la tarea.
  cy.wait(2000);

  Muchas Gracias Aristides Archila

Espera 2 segundos para asegurarse de que la tarea aparece en la lista.
cy.contains('p', 'Comprar leche').should('be.visible');

Verifica que la tarea agregada está visible en la lista de tareas.
