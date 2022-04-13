package tn.esprit.spring.repository;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



import tn.esprit.spring.entity.Bill;

public interface BillsRepository  extends JpaRepository<Bill, Long>{
	@Query("SELECT b FROM Bill  b  WHERE b.type =:type")
	List<Bill> retrieveBillsByTypeJPQL(@Param("type") String type);
	
@Query(value = "UPDATE Bill c set c.commande_id_commande=?1  where c.id_facture=?2", nativeQuery = true)
	@Modifying
	@Transactional
 public void affecterCommande_A_Facture(int id_commande,int id_facture) ;


}
