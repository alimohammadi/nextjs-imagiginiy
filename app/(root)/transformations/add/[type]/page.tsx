import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";

const AddTransformationType = ({ params: { type } }: SearchParamProps) => {
  const transforamtion = transformationTypes[type];

  return (
    <Header title={transforamtion.title} subtitle={transforamtion.subTitle} />
  );
};

export default AddTransformationType;
