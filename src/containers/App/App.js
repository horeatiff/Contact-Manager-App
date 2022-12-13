import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineExport } from "react-icons/ai";
import CsvDownloadButton from "react-json-to-csv";

import Card from "components/card";
import Search from "components/search";
import Button from "components/button";
import ContactForm from "components/form";
import { convertList, fetchData } from "shared/js";

const App = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState(false);

  const filterData = () => {
    if (!searchInput.length) {
      return data;
    }

    const cleanInput = String(searchInput).toLowerCase().replaceAll(" ", "");
    const filterData = data.filter((item) =>
      Object.values(item).toString().replaceAll(",", "").replaceAll(" ", "").toLowerCase().includes(cleanInput)
    );

    return filterData;
  };

  const handleAddContact = () => {
    setIsAddingContact(true);
    setSelectedContact({});
  };

  const handleEditContact = (id) => {
    setIsAddingContact(true);
    setSelectedContact(data.find((contact) => contact.id === id));
  };

  const handleDeleteContact = (id) => {
    setData(data.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    fetchData({ endpoint: "json/contacts.json" }).then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    if (data.length < 10) {
      fetchData({ baseURL: "https://randomuser.me/api/", params: { nat: "US", results: 10 } }).then((res) => {
        setData([...convertList(res.results), ...data]);
      });
    }
  }, [data]);

  return !isAddingContact ? (
    <div className="app">
      <span className="app__title">Contact Manager App</span>
      <img className="app__logo" src="/images/logo.svg" alt="logo" title="LOGO" />

      <Search name="search" placeholder="Search..." setSearchInput={setSearchInput} />

      {/* Using the state and the data from the fake api call to */}
      {/* populate a contact list card */}
      <div className="app__contacts">
        {data &&
          filterData(data).map((contact, index) => (
            <Card
              contact={contact}
              data={data}
              key={index}
              handleEditContact={handleEditContact}
              handleDeleteContact={handleDeleteContact}
            />
          ))}
      </div>

      <div className="app__buttons">
        <Button className="app__add-contacts" onClick={handleAddContact}>
          <AiOutlinePlus />
        </Button>
        <CsvDownloadButton className="btn app__add-contacts" data={data}>
          <AiOutlineExport />
        </CsvDownloadButton>
      </div>
    </div>
  ) : (
    <div className="app">
      <img className="app__logo" src="/images/logo.svg" alt="logo" title="LOGO" />
      <ContactForm
        data={data}
        setData={setData}
        setIsAddingContact={setIsAddingContact}
        selectedContact={selectedContact}
      />
    </div>
  );
};

export default App;
