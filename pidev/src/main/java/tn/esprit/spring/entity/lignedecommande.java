package tn.esprit.spring.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class lignedecommande implements Serializable {

	public lignedecommande() {
		
	}
	private static final long serialVersionUID = 1L;
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	private int quantity;
	
	
	private double price ;
	
	
	@ManyToOne
	private Product product;
	 @JsonIgnore
	@ManyToOne(cascade = CascadeType.PERSIST)
    private Order order;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public lignedecommande(Long id, int quantity, double price, String status, Product product, Order order) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.price=price;
		this.product = product;
		this.order = order;
	}



	
	}


	

