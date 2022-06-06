import React from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import { Routes, Route } from "react-router-dom";
import UserForm from "../form/UserForm/UserForm";
import RealEstateForm from "../form/RealEstateForm/RealEstateForm";
import SubmitForm from "../form/SubmitForm/SubmitForm";
import Navigation from "../nav/Navigation";

const FormPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <ProgressBar />
      <Routes>
        <Route path="/first-step" element={<UserForm />} />
        <Route path="/second-step" element={<RealEstateForm />} />
        <Route path="/check-data" element={<SubmitForm />} />
      </Routes>
    </>
  );
};

export default FormPage;
