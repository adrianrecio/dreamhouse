import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class BookInspectionTile extends LightningElement {
    @api recordId;

    timeSlot;

    objectApiName = 'Inspection__c';

    canAdd = false;

    addInspection(event){
        this.canAdd = true;
    }

    handleSuccess(event){
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'New Inspection Booked',
                variant: 'success'
            })
        );

        this.canAdd = false;
    }

    handleCancel(){
        this.canAdd = false;
    }

    handleSubmit(event){
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        if(this.timeSlot){
            fields.Time_Slot__c = this.timeSlot; 
        }
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleTimeChange(event){
        this.timeSlot = event.detail.value;
    }
}