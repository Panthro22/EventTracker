package com.skilldistillery.fitness.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class CardioTrainingTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private CardioTraining cardioTrain;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	    emf = Persistence.createEntityManagerFactory("JPAFitness");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	    emf.close();
	}


	@BeforeEach
	void setUp() throws Exception {
	    em = emf.createEntityManager();
	    cardioTrain = em.find(CardioTraining.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		cardioTrain = null;
	    em.close();
	}
	
	@Test
	@DisplayName("Testing user mapping")
	void test() {
		assertNotNull(cardioTrain);
		assertEquals("morning run", cardioTrain.getName());
		assertEquals(5.0, cardioTrain.getDistance());
		assertEquals("km", cardioTrain.getScale());
		
	}

}
