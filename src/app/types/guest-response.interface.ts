export interface Guest {
    id: number;
    name: string;
    document: string;
    phone: string;
    reservations: Reservation[];
}

interface Reservation {
    id: number;
    start_date: string;
    end_date: string;
    check_in: string;
    check_out: string | null;
    vehicle: boolean;
    price: number | null;
    guest_document: string;
}

  export interface GuestWithNoReservations {
    id: number;
    name: string;
    document: string;
    phone: string;

}