class CreateGalleryPage {

    get titleInput() {
        return cy.get('#title')
    }

    get descriptionInput() {
        return cy.get('#description')
    }

    get imageInput() {
        return cy.get('input').last()
    }

    get addImageButton() {
        return cy.get('button').contains('Add image')
    }

    get submitButton() {
        return cy.get('button').eq(-2);
    }

    createGallery(title, description, image) {
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imageInput.type(Image)
        this.submitButton.click();
    }
}

export const CreateGalleryPage = new CreateGalleryPage();