import { Compatibility } from '../interface';
import { supportedCars } from './supported';

export const compatibleCars = supportedCars.map(car => {       
    return { ...car, Compatibility: Compatibility.Supported }
});