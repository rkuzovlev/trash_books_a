import { FormGroup, FormControl, Validators } from '@angular/forms';

interface FilterValidatorResult {
    costIntersection: boolean,
    ratingIntersection: boolean,
    dateIntersection: boolean,
}

export let filterValidator = function() {
	return (group: FormGroup): FilterValidatorResult => {
        let costFrom = group.controls['costFrom'];
        let costTo = group.controls['costTo'];
        let ratingFrom = group.controls['ratingFrom'];
        let ratingTo = group.controls['ratingTo'];
        let dateFrom = group.controls['dateFrom'];
        let dateTo = group.controls['dateTo'];
                
        let f = false;
        let result: FilterValidatorResult = {
            costIntersection: false,
            ratingIntersection: false,
            dateIntersection: false
        };
        
		if (costFrom.value > costTo.value) {
            f = true;
			result.costIntersection = true;
        }
        
        if (ratingFrom.value > ratingTo.value) {
            f = true;
			result.ratingIntersection = true;
        }

        if (dateFrom.value > dateTo.value) {
            f = true;
			result.dateIntersection = true;
        }
        
        if (f){
            return result;
        }

        return null;
	}
}
