import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  currentDataStored = []
  constructor() {}

  appendToArray(key: string, newItem: any): void {
    const existingData = JSON.parse(localStorage.getItem(key) || '[]');
    existingData.push(newItem);
    localStorage.setItem(key, JSON.stringify(existingData));
  }

  // Add or update data in localStorage for object values
  addToObject(key: string, newKey: string, newValue: any): void {
    const existingData = JSON.parse(localStorage.getItem(key) || '{}');
    existingData[newKey] = newValue;
    localStorage.setItem(key, JSON.stringify(existingData));
  }

  // Retrieve data from localStorage
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    const parsedData = item ? JSON.parse(item) : null;
    if (parsedData) {
      parsedData.forEach(function(_currentValue: any, _index: any, array: any) {
        console.log(_index);
        array[_index] = typeof _currentValue === "object" ? _currentValue : JSON.parse(_currentValue) 
      });
    }
    this.currentDataStored = parsedData ? parsedData : null
    return this.currentDataStored;
  }

  updateStorage(key:string, array:any){
    localStorage.setItem(key, JSON.stringify(array));
  }
}
