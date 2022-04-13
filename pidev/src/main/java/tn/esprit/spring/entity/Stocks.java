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
@Table(name="T_STOCKS")
public class Stocks implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="stock_id")
	private int id;
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="id")
	Set<Product> products;
	
	private int product_remaining_quantity;
	
	public int getProduct_remaining_quantity() {
		return product_remaining_quantity;
	}
	public void setProduct_remaining_quantity(int product_remaining_quantity) {
		this.product_remaining_quantity = product_remaining_quantity;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
}
	