import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";

const AddTransformationType = ({ params: { type } }: SearchParamProps) => {
  const transforamtion = transformationTypes[type];

  return (
    <>
      <Header title={transforamtion.title} subtitle={transforamtion.subTitle} />
      <TransformationForm />
    </>
  );
};

export default AddTransformationType;
