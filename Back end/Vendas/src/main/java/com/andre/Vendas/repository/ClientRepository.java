package com.andre.Vendas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.andre.Vendas.model.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Integer>{

}
