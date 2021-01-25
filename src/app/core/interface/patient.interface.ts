export interface IPatient {
    name: string;
    email?: string;
    address: string;
    phone?: string;
}

export const initialPatient: IPatient = {
    name: '',
    email: '',
    address: '',
    phone: ''
};