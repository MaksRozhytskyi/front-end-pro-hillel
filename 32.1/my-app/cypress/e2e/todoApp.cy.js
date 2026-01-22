describe('TODO App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });

    it('should display TODO heading', () => {
        cy.get('h1').should('contain', 'TODO');
    });

    it('should allow entering numbers and letters in input field', () => {
        cy.get('.todo-input')
            .type('Task 123')
            .should('have.value', 'Task 123');

        cy.get('.todo-input').clear();

        cy.get('.todo-input')
            .type('Only letters')
            .should('have.value', 'Only letters');

        cy.get('.todo-input').clear();
    });

    it('should show error when trying to add empty task', () => {
        cy.get('.btn-add').click();
        cy.get('.empty-state').should('exist');
    });

    it('should add new task to the list', () => {
        const taskTitle = 'New task';

        cy.get('.todo-input').type(taskTitle);
        cy.get('.btn-add').click();

        cy.get('.todo-item').should('contain', taskTitle);
        cy.get('.todo-item').first().find('.btn-delete').click();
    });

    it('should mark task as completed', () => {
        const taskTitle = 'Test task';

        cy.get('.todo-input').type(taskTitle);
        cy.get('.btn-add').click();

        cy.get('.todo-checkbox').first().click();
        cy.get('.todo-item').should('have.class', 'completed');
        cy.get('.todo-item').first().find('.btn-delete').click();
    });

    it('should delete task from the list', () => {
        const taskTitle = 'Task to delete';

        cy.get('.todo-input').type(taskTitle);
        cy.get('.btn-add').click();

        cy.get('.todo-item').should('contain', taskTitle);

        cy.get('.todo-item').first().find('.btn-delete').click();

        cy.contains(taskTitle).should('not.exist');
    });
});
