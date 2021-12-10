package com.andre.Vendas.exceptions;

import java.util.Arrays;
import java.util.List;

public class ApiErrors {
	
	private List<String> errors;
	
	public ApiErrors() {}

	public ApiErrors(List<String> errors) {
		this.errors = errors;
	}
	
	public ApiErrors(String msg) {
		this.errors = Arrays.asList(msg);
	}

	public List<String> getErrors() {
		return errors;
	}

}
