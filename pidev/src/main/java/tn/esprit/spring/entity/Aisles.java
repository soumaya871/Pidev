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
@Table(name="T_AISLES")
public class Aisles implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="aisle_id")
	private int id;
	private String aisle_category ;
	
	@ManyToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="id" )
	Set<Product> products;
	
	
	
	public String getAisle_category() {
		return aisle_category;
	}
	public void setAisle_category(String aisle_category) {
		this.aisle_category = aisle_category;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
}
