package com.andre.Vendas.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.andre.Vendas.model.entities.Client;
import com.andre.Vendas.repository.ClientRepository;

@RestController
@RequestMapping("/api/clientes")
public class ClientController {
	
	@Autowired
	public ClientRepository repository;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Client save(@RequestBody @Valid Client client) {
		return repository.save(client);
	}
	
	@GetMapping("{id}")
	public Client findById(@PathVariable Integer id) {
		return repository
				.findById(id)
				.orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));
	}
	
	@GetMapping
	public List<Client> findAll() {
	 List<Client> list = repository.findAll();
	 return list;
	}
	
	@DeleteMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Integer id) {
		repository
		    .findById(id)
		    .map(client -> {
		    	repository.delete(client);
		    	return Void.TYPE;
		    })
			.orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));
	}
	
	@PutMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void update(@PathVariable Integer id, @RequestBody @Valid Client newClient) {
		repository
		    .findById(id)
		    .map(client -> {
		    	client.setNome(newClient.getNome());
		    	client.setCpf(newClient.getCpf());
		    	return repository.save(client);
		    })
			.orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));
	}
}
