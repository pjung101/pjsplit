import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private _http: HttpClient) { }

    getPrimaries() {
        return this._http.get('/objects');
    }
    getPrimary(id) {
        return this._http.get('/object/' + id);
    }
    addNew(newPrimary) {
        return this._http.post('/newObject', newPrimary)
    }
    addSecondary(id, editedSecondary) {
        return this._http.put('/newReview/' + id, editedSecondary)
    }
    editPrimary(id, editedPrimary) {
        return this._http.put('/editObject/' + id, editedPrimary)
    }
    deletePrimary(id) {
        return this._http.delete('/remove/' + id)
    }
    deleteSecondary(id, updatedPrimary) {
        return this._http.put('/removeSecondary/' + id, updatedPrimary);
    }
    dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}
