package tn.esprit.spring.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name="T_SELLERS")
public class Seller extends Client {

	
	private static final long serialVersionUID = 1L;
	
	//@GeneratedValue (strategy= GenerationType.IDENTITY)
	//@Column(name="seller_id")
	//private Long id;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="seller")
	private Set<Ad> ad;
	
/*	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}*/
}
