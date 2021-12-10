package com.andre.Vendas.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.andre.Vendas.controller.DTO.ProvidedServiceDTO;
import com.andre.Vendas.model.entities.Client;
import com.andre.Vendas.model.entities.ProvidedService;
import com.andre.Vendas.repository.ClientRepository;
import com.andre.Vendas.repository.ServicesRepository;
import com.andre.Vendas.util.BigDecimalConverter;

@RestController
@RequestMapping("/api/servicos-prestados")
public class ProvidedServiceController {

	@Autowired
	ServicesRepository repository;

	@Autowired
	ClientRepository clientRepository;

	@Autowired
	BigDecimalConverter converter;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ProvidedService save(@RequestBody @Valid ProvidedServiceDTO dto) {
		LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

		Integer idClient = dto.getIdCliente();
		Client client = clientRepository.findById(idClient)
				.orElseThrow(() -> 
					new ResponseStatusException(
							HttpStatus.BAD_REQUEST, "cliente inexistente"));

		ProvidedService providedService = new ProvidedService();
		providedService.setDescricao(dto.getDescricao());
		providedService.setData(data);
		providedService.setClient(client);
		providedService.setValor(converter.converter(dto.getPreco()));

		return repository.save(providedService);
	}
	
	@GetMapping
	public List<ProvidedService> pesquisa(
			@RequestParam(value ="nome", required=false, defaultValue = "") String nome,
			@RequestParam(value ="mes", required=false) Integer mes
			){
		return repository.findByNomeClienteMes("%" + nome + "%", mes);
	}
	
}
