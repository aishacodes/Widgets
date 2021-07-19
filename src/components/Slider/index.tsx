import React from "react";
import { Handles, Rail, Slider, Tracks } from "react-compound-slider";

import "./Slider.css";

const sliderStyle = {
  position: "relative",
  width: "100%",
  touchAction: "none",
};

export function RangeSlider({ value, onChange, min = 0, max = 100 }) {
  const domain = [min, max];
  const onUpdate = (update) => {
    onChange(update[0]);
  };
  return (
    <div>
      <Slider
        mode={1}
        step={1}
        domain={domain}
        rootStyle={sliderStyle}
        onUpdate={onUpdate}
        values={[value]}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    </div>
  );
}

const railOuterStyle = {
  position: "absolute",
  width: "100%",
  height: 42,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  cursor: "pointer",
};

const railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: 5,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  pointerEvents: "none",
  backgroundColor: "#EDFOF6",
};

export const SliderRail = ({ getRailProps }) => {
  return (
    <>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railInnerStyle} />
    </>
  );
};

export const Handle = ({
  domain: [min, max],
  handle: { id, value, percent },
  disabled = false,
  getHandleProps,
}) => {
  return (
    <>
      <div
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          zIndex: 5,
          width: 81,
          height: 25,
          cursor: "pointer",
          backgroundColor: "none",
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        className="flex justify-between px-1 items-center text-white font-bold text-xs"
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: 81,
          height: 25,
          borderRadius: "27.5px",
          backgroundColor: "blue",
        }}
      >
        <span style={{ position: "absolute", top: "2rem" }}>{value}%</span>
      </div>
    </>
  );
};

export const Track = ({ source, target, getTrackProps, disabled = false }) => {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(0%, -50%)",
        height: 5,
        zIndex: 1,
        backgroundColor: disabled ? "#999" : "#61697A",
        borderRadius: 7,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  );
};
