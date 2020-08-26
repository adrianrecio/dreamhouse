@isTest
private class ContactControllerTest {
    @isTest
    static void validate_ContactController() {
        SampleDataController.importSampleData();
        ContactController.getContacts('');
        ContactController.getContactAcrs('');
    }
}