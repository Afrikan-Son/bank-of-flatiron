import React, { useState } from "react";
import { validateForm } from "./SortTransactions";

function NewTransaction({ newData }) {
	const [formData, setFormData] = useState({
		date: "",
		description: "",
		category: "",
		amount: "",
	});
	function handleSubmit(e) {
		e.preventDefault();
		const formInput = validateForm(formData);

		if (formInput.containsEmptyInput) {
			alert("Please fill in all inputs");
		} else if (formInput.hasInvalidDate) {
			alert(
				"Please choose a Year between 2000 and today"
			);
		} else if (!formInput.isInvalid) {
			fetch("https://api.npoint.io/1a81959eb42f2050e8cc/transactions/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})
				.then((r) => r.json())
				.then((data) => newData(data));
			alert("Added ✔️");
		}
		setFormData("");
	}

	
export default NewTransaction;