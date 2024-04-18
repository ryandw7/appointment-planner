import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  setName,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} placeholder="Name" />
    <input type="text" value={date} name="date" onChange={(e)=>setDate(e.target.value)} placeholder="Date" />
    <input type="text" value={time} name="time" onChange={(e)=>setTime(e.target.value)} placeholder="Time" />
    <button type="submit">SUBMIT</button>
    </form>
    </>
  );
};
