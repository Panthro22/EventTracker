package com.skilldistillery.fitness.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class WeightTrainingTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private WeightTraining weightTrain;

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
	    weightTrain = em.find(WeightTraining.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		weightTrain = null;
	    em.close();
	}
	
	@Test
	@DisplayName("Testing user mapping")
	void test() {
		assertNotNull(weightTrain);
		assertEquals("Morning Lift", weightTrain.getName());
		assertEquals(6, weightTrain.getRepetitions());
		assertEquals(4, weightTrain.getSets());
		assertEquals("lbs", weightTrain.getScale());
		
	}

}
