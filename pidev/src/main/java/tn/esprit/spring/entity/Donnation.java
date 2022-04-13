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
@Table(name="T_DONNATIONS")
public class Donnation implements Serializable{

	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="donnation_id")
	private int id;
	private Product donnatedProduct;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="id")
	Set<Client> client;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Product getDonnatedProduct() {
		return donnatedProduct;
	}
	public void setDonnatedProduct(Product donnatedProduct) {
		this.donnatedProduct = donnatedProduct;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	private int quantity ;
	
}
