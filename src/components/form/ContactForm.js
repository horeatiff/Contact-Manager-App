import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineRollback } from "react-icons/ai";
import Button from "components/button";

const ContactForm = ({ data, setData, setIsAddingContact, selectedContact }) => {
  const [values, setValues] = useState({});

  const initialValue = {
    id: data.length,
    firstName: "",
    lastName: "",
    address: "",
    profileImage: "",
  };

  useEffect(() => {
    if (selectedContact?.id) {
      setValues(selectedContact);
    } else {
      setValues(initialValue);
    }
    // eslint-disable-next-line
  }, []);

  const handleInputUpdate = (e) => {
    const fieldValue = e.target.value;
    const key = e.target.name;
    setValues({
      ...values,
      [key]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedContact?.id) {
      setData(
        data.map((contact) => {
          if (contact.id !== selectedContact.id) {
            return contact;
          }

          return values;
        })
      );
    } else {
      setData([...data, values]);
    }

    setIsAddingContact(false);
    e.target.reset();
  };

  const handleCancel = () => {
    setIsAddingContact(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="First name..."
        name="firstName"
        onChange={(e) => handleInputUpdate(e)}
        value={values["firstName"]}
      />
      <input
        type="text"
        placeholder="Last name..."
        name="lastName"
        onChange={(e) => handleInputUpdate(e)}
        value={values["lastName"]}
      />
      <input
        type="text"
        placeholder="Contact address..."
        name="address"
        onChange={(e) => handleInputUpdate(e)}
        value={values["address"]}
      />
      <input
        type="url"
        placeholder="Profile image url..."
        name="profileImage"
        onChange={(e) => handleInputUpdate(e)}
        value={values["profileImage"]}
      />
      <div className="form__buttons">
        <Button className="app__add-contacts" onClick={handleCancel}>
          <AiOutlineRollback />
        </Button>
        <Button className="app__add-contacts" type="submit">
          <AiOutlinePlus />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
