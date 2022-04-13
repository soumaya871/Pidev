package tn.esprit.spring.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Aisles;
import tn.esprit.spring.repository.AislesRepository;
@Service
public class AislesServiceImpl implements IAislesService {
	
	@Autowired
	AislesRepository aisles;
	
	

	@Override
	public List<Aisles> retrieveAllUsers() {
		
		return(List<Aisles>) aisles.findAll();
	}

	@Override
	public Aisles addAisle (Aisles a) {
		
		return aisles.save(a);
		
	}

	@Override
	public Aisles updateAisle(Aisles a) {
		return aisles.save(a);
	}

	@Override
	public void deleteAisle(int id) {
		aisles.deleteById(id);
		
	}

	@Override
	public Aisles retrieveAisle(int id) {
		return aisles.findById(id).get();
	}

}
