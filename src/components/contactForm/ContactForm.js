import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} placeholder="Name" />
        <input type="number" value={phone} name="phone" onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number"/>
        <input type="text" value={email} name="name" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">SUBMIT</button>
    </form>
    </>
  );
};

