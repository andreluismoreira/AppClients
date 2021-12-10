package com.andre.Vendas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.andre.Vendas.model.entities.ProvidedService;

public interface ServicesRepository extends JpaRepository<ProvidedService, Integer>{
	
	@Query(" select s from ProvidedService s join s.client c " +
		   " where upper(c.nome) like upper(:nome ) and MONTH(s.data) =:mes  ")
	List<ProvidedService> findByNomeClienteMes(
			@Param("nome") String nome, @Param("mes") Integer mes);

}
