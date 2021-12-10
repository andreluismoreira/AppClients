package com.andre.Vendas.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@Configuration
public class WebConfig {

	@Bean
	public FilterRegistrationBean<CorsFilter> corsFilterRegistration(){
		List<String> all = Arrays.asList("*");
		
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOriginPatterns(all);
		configuration.setAllowedHeaders(all);
		configuration.setAllowedMethods(all);
		configuration.setAllowCredentials(true);
		
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		
		CorsFilter corsFilter = new CorsFilter(source);
		FilterRegistrationBean<CorsFilter> filter = new FilterRegistrationBean<CorsFilter>(corsFilter);
		
		filter.setOrder(Ordered.HIGHEST_PRECEDENCE);
		
		return filter;
	}
}
