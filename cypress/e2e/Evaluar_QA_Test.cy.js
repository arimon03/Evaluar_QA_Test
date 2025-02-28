describe('Debe agregar una nueva tarea a la lista', () => {
    it('Agregar una tarea y verificar que se muestra en la lista', () => {
        // Visitar la página web
        cy.visit('https://wc-react-todo-app.netlify.app/');

        // Clic en el botón "Add Task"
        cy.contains('Add Task').click();

        // Obtener el campo de entrada del título de la tarea y verificar que sea visible
        cy.get('#title').should('be.visible');

        // Escribir "Comprar pan y queso" en el campo de entrada
        cy.get('#title').type('Comprar pan y queso');

        // Verificar que el campo no esté vacío
        cy.get('#title').invoke('val').should('not.be.empty');

        // Seleccionar una opción en el campo de estado de tarea
        cy.get('#type').should('be.visible');
        cy.get('#type').select('complete', { force: true }); //cambiar select por estado que se requiere (complete o incomplete)

        // Verificar que la selección (complete o incomplete)
        cy.get('#type').should('have.value', 'complete'); //Si se cambia linea 20 should por estado que se requiere (complete o incomplete)

        // Obtener el botón de "Submit" y verificar que no esté deshabilitado
        cy.get('button[type="submit"]').should('not.be.disabled');

        // Hacer clic en el botón "Submit" para agregar la tarea
        cy.get('button[type="submit"]').click();

        // Esperar 1 segundos para asegurar que la tarea se agregue
        cy.wait(1000);

        // Verificar que el texto "Comprar leche" aparece en la lista de tareas
        cy.contains('p', 'Comprar pan y queso').should('be.visible');
    });
});
