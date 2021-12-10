package com.andre.Vendas.controller.DTO;

import java.util.Objects;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;


public class ProvidedServiceDTO {
	
	@NotEmpty(message="{campo.descricao.obrigatorio}")
	private String descricao;
	
	@NotEmpty(message="{campo.preco.obrigatorio}")
	private String preco;
	
	@NotEmpty(message="{campo.data.obrigatorio}")
	private String data;
	
	@NotNull(message="{campo.idCliente.obrigatorio}")
	private Integer idCliente;
	
	public ProvidedServiceDTO() {}

	public ProvidedServiceDTO(String descricao, String preco, String data, Integer idCliente) {
		super();
		this.descricao = descricao;
		this.preco = preco;
		this.data = data;
		this.idCliente = idCliente;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getPreco() {
		return preco;
	}

	public void setPreco(String preco) {
		this.preco = preco;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public Integer getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(Integer idCliente) {
		this.idCliente = idCliente;
	}

	@Override
	public int hashCode() {
		return Objects.hash(data);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProvidedServiceDTO other = (ProvidedServiceDTO) obj;
		return Objects.equals(data, other.data);
	}
	
}
