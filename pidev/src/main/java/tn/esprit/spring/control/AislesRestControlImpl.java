package tn.esprit.spring.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import tn.esprit.spring.entity.Aisles;
import tn.esprit.spring.service.IAislesService;
import tn.esprit.spring.service.AislesServiceImpl;

@RestController
@RequestMapping(method = { RequestMethod.GET, RequestMethod.POST })
public class AislesRestControlImpl {
	@Autowired
	IAislesService AisleSer;

	// http://localhost:8084/SpringMVC/servlet/retrieve-all-aisles
	@GetMapping("/retrieve-all-aisles")
	@ResponseBody
	public List<Aisles> getAisles() {
		List<Aisles> list = AisleSer.retrieveAllUsers();
		return list;
	}

	// http://localhost:8084/SpringMVC/servlet/retrieve-Aisle/{Aisles-id}
	@GetMapping("/retrieve-Aisle/{Aisles-id}")
	@ResponseBody
	public Aisles retrieveAisles(@PathVariable("Aisles-id") int AislesId) {
		return AisleSer.retrieveAisle(AislesId);
	}

	// Ajouter Aisle : http://localhost:8084/SpringMVC/servlet/add-aisles
	@PostMapping("/add-aisles")
	@ResponseBody
	public Aisles addAisle(@RequestBody Aisles a) {
		Aisles Aisles = AisleSer.addAisle(a);
		return Aisles;
	}

	// http://localhost:8084/SpringMVC/servlet/remove-aisle/{Aisle-id}

	@DeleteMapping("/remove-aisle/{Aisle-id}")
	@ResponseBody
	public void removeAisle(@PathVariable("Aisle-id") int AisleId) {
		AisleSer.deleteAisle(AisleId);
	}

	// http://localhost:8084/SpringMVC/servlet/modify-Aisle
	@PutMapping("/modify-Aisle")
	@ResponseBody
	public Aisles modifyAisle(@RequestBody Aisles aisle) {
		return AisleSer.updateAisle(aisle);
	}

}
