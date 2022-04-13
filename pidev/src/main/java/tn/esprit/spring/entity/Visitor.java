package tn.esprit.spring.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="T_VISITORS")
public class Visitor implements Serializable{

	
	private static final long serialVersionUID = 1L;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="visitor_id")
	private int id;
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="id")
	Set<Product> product;
	
}
