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
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
@Entity

public class Panier implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="basket_id")
	private int id;
	private int product_quantity ;
	private double prix ;
	private String status ;
	private int Quantite;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="id")
	Set<Product> products;


	public int getQuantite() {
		return Quantite;
	}


	public void setQuantite(int quantite) {
		Quantite = quantite;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getProduct_quantity() {
		return product_quantity;
	}


	public void setProduct_quantity(int product_quantity) {
		this.product_quantity = product_quantity;
	}


	public double getPrix() {
		return prix;
	}


	public void setPrix(double prix) {
		this.prix = prix;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public Set<Product> getProducts() {
		return products;
	}


	public void setProducts(Set<Product> products) {
		this.products = products;
	}
	
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

