import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  //Define state variables for contacts and appointments 

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  //Implement functions to add data to contacts and appointments

  const setContact = (name, phone, email) => {
    setContacts((prev) => {
      return [...prev, {
        name: name,
        phone: phone,
        email: email
      }]
    }
    )
  }

  const setAppointment = (name, contact, date, time) => {
    setAppointments((prev) => {
      return [...prev, {
        name: name,
        contact: contact,
        date: date,
        time: time
      }]
    })
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} setContact={setContact} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts} setAppointment={setAppointment} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));
  return (
    <RouterProvider router={router} />
  );
}

export default App;
