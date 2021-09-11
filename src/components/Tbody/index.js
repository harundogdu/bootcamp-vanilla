import React from "react";

function Tbody({ data, title }) {
  const handleClick = (e) => {
    alert(e.target.textContent);
  };
  return (
    <tbody>
      {data.currencies &&
        data.currencies.map((item, index) => (
          <tr onClick={handleClick} key={index}>
            {Object.keys(title).map((i, index) => (
              <td key={index}> {item[title[i]]} </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
}

export default Tbody;
