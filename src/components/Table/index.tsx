import React from "react";
import EditIcon from "../../components/vectors/EditIcon";
import DeleteIcon from "../../components/vectors/DeleteIcon";
import CopyIcon from "../../components/vectors/CopyIcon";

import "./TableWidget.scss";

interface PropTypes {
  id?: string;
  gridTemplateColumns?: string;
  headings?: Array<{ name: string; key: string }>;
  tableData?: Array<Object>;
}

const TableWidget = ({
  id = "",
  gridTemplateColumns = "1fr 4fr 3fr 3fr 2fr 3fr 3fr",
  headings = [
    { name: "#", key: "#" },
    { name: "Title", key: "title" },
    { name: "Owner", key: "owner" },
    { name: "No. of Provider", key: "noofprovider" },
    { name: "City", key: "city" },
    { name: "Orders", key: "orders" },
    { name: "Actions", key: "actions" },
  ],
  tableData = Array(10).fill({
    "#": "1",
    title: "Scopa diving in the redsea",
    owner: "Hayak",
    noofprovider: "12",
    city: "Jeddah",
    orders: "12",
    actions: (
      <span className="flex items-center">
        <EditIcon /> <CopyIcon />
        <DeleteIcon />
      </span>
    ),
  }),
}: PropTypes) => {
  const tableId = id ? `${id}-table` : "table";

  const gridStyles = {
    gridTemplateColumns: gridTemplateColumns,
  };

  return (
    <div className="TableWidget">
      <div className="TableArea">
        <div className="table-head" style={gridStyles}>
          {headings.map((heading, headingIndex) => (
            <div
              key={`${tableId}-heading_tableIndex-${headingIndex}`}
              className="cell"
            >
              {heading.name}
            </div>
          ))}
        </div>
        <div className="table-body">
          {tableData.map((row, rowIndex) => (
            <div
              className="row"
              key={`${tableId}-row_${rowIndex}`}
              style={gridStyles}
            >
              {headings.map((col, colIndex) => (
                <div
                  key={`${tableId}-row_${rowIndex}-col_${colIndex}`}
                  className="cell"
                >
                  {row[col.key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableWidget;
