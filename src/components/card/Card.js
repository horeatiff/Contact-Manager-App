import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineExport } from "react-icons/ai";
import CsvDownloadButton from "react-json-to-csv";

import Button from "components/button";

const Card = ({ className = "", contact, data, handleEditContact, handleDeleteContact }) => {
  const [showControls, setShowControls] = useState(false);

  const handleClick = () => {
    setShowControls(!showControls);
  };

  return (
    <div className={`card ${className} ${showControls ? "active" : ""}`} onClick={handleClick}>
      <div className="card__info">
        <img src={contact?.profileImage || "/images/default_avatar.jpg"} alt="default profile" />
        <span className="card__info--name">{`${contact?.firstName || ""} ${contact?.lastName || ""}`}</span>
        <span className="card__info--address">{contact?.address}</span>
      </div>
      <div className="card__controls">
        <Button onClick={() => handleEditContact(contact.id)}>
          <AiOutlineEdit /> Edit
        </Button>
        <Button onClick={() => handleDeleteContact(contact.id)}>
          <AiOutlineDelete /> Delete
        </Button>
        <CsvDownloadButton className="btn" data={[contact]}>
          <AiOutlineExport /> Export
        </CsvDownloadButton>
      </div>
    </div>
  );
};

export default Card;
