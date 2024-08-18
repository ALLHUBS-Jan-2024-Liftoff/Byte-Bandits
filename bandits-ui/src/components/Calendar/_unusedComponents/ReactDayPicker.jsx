import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
export default function ReactDayPicker() {
  const [selected, setSelected] = React.useState();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
}