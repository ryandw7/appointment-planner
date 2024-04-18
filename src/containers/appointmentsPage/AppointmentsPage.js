import React, { useEffect, useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts, appointments, setAppointment}) => {
  //Define state variables for appointment info
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    //Add contact info and clear data
    setContact(()=>{
      contacts.filter((item) => {
        if(item.name === name){
          return {phone : item.phone, email : item.email}
        }
      })
    })
    setAppointment(name, contact, date, time)
  };
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm name={name} setName={setName} time={time} setTime={setTime} date={date} setDate={setDate} contact={contact} setContact={setContact} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};