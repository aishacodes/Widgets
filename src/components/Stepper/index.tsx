import React from "react";
import styles from ".//../../../styles/AddChair.module.css";
import LineIndicator from "./vectors/LineIndicator";

import "./Stepper.css";
import GradientLineIndicator from "./vectors/GradientLineIndicator";

const Stepper = ({
  noOfSteps,
  currentStep,
  stepperLabel,
}: {
  noOfSteps: Number;
  currentStep: Number;
  stepperLabel?: string[];
}) => {
  return (
    <div className="flex items-center">
      {Array(noOfSteps)
        .fill(" ")
        .map((s, sIndex) => (
          <div className={styles.step}>
            {sIndex > 0 ? (
              <div className="flex-grow w-60 flex h-6 items-center">
                {currentStep >= sIndex + 1 ? (
                  <GradientLineIndicator />
                ) : (
                  <LineIndicator />
                )}
              </div>
            ) : (
              ""
            )}
            <div
              className={`circle ${
                currentStep >= sIndex + 1 ? "active" : "border border-[#dddddd]"
              }`}
            >
              <span>{sIndex + 1}</span>
              {stepperLabel && (
                <span
                  className="absolute text-[#464A53] text-sm"
                  style={{ top: "5.6rem" }}
                >
                  {stepperLabel[sIndex]}
                </span>
              )}
            </div>
          </div>
        ))}
      <span></span>
    </div>
  );
};

export default Stepper;
