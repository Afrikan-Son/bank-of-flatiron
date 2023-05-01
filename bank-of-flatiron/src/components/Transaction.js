import React from "react";

function Transaction({id, date, description, category, amount}) {
  function handleDelete(event){
    fetch(`https://api.npoint.io/2bb63b95c77fa8aa4d3e/transactions/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((result) => result.json())
			.then(alert("Deleted ❌"));
    

  }

  return (
    <tr className="table">
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>{<button onClick={handleDelete}>Delete</button>}</td>
    </tr>
  );
}

export default Transaction;