package tn.esprit.spring.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import tn.esprit.spring.entity.Client;
import tn.esprit.spring.entity.Order;
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {


	@Query(value = "SELECT * FROM t_orders WHERE client_client_id=? and status='En cours' ", nativeQuery = true)
	public Order CommandeencoursparClient(long  idClient);

	@Query(value = "SELECT * FROM  t_orders  WHERE status=?1", nativeQuery = true)
	public List<Order> CommandeparStatus(String string);

 

	/*@Query(value = "UPDATE t_orders o set o.status='payee',o.typede_payment='En cours' where o.order_id=?1", nativeQuery = true)
	@Modifying
	@Transactional
	public void PayerEnLigne(@Param("id") int idCommande);*/
	@Query(value = "UPDATE t_orders o set o.typede_payment='Enligne' ,o.status='payee' where o.order_id=?1", nativeQuery = true)
	@Modifying
	@Transactional
	public void PayerEnLigne(@Param("id") int idCommande);
	
	
	
	@Query(value = "SELECT * FROM t_orders WHERE client_client_id=?1", nativeQuery = true)
	public List<Order> CommandeparClient(long id);
	
	@Query(value = "SELECT COUNT(*),MONTHNAME(o.date) FROM t_orders o WHERE o.status='payee' GROUP BY MONTH(o.date) ", nativeQuery = true)
	public List<Object[]> NumCommadeParMOIS();
		//public Map<Order,Integer> NumCommadeParMOIS();


@Query(value="select p.product_name ,l.quantity from t_products p JOIN lignedecommande l JOIN t_orders o WHERE p.product_id=l.product_product_id AND o.status='payee' and o.order_id=l.order_order_id ORDER BY l.quantity DESC LIMIT 3", nativeQuery = true)
public List<Object[]> Top3Product();

}
