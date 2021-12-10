package com.andre.Vendas.controller;

import org.springframework.data.jpa.repository.JpaRepository;

import com.andre.Vendas.model.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

}
