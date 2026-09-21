const getAppointmentIds = (appointments) => {
appointments.map(apt => { apt.id });
};
const getAppointmentCards = (appointments) => appointments.map(apt => { id: apt.id, fee: apt.fee });