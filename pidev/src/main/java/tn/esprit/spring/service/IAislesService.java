package tn.esprit.spring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Aisles;

public interface IAislesService {
	List<Aisles> retrieveAllUsers();

	Aisles addAisle(Aisles a);

	Aisles updateAisle(Aisles a);

	void deleteAisle(int id);

	Aisles retrieveAisle(int id);

}
