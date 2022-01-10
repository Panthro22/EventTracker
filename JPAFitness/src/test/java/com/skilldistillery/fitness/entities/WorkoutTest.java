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

class WorkoutTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Workout work;

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
	    work = em.find(Workout.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		work = null;
	    em.close();
	}
	
	@Test
	@DisplayName("Testing user mapping")
	void test() {
		assertNotNull(work);
		assertEquals(13, work.getStartTime().getHour());
		assertEquals(59, work.getEndTime().getMinute());
		assertEquals(1, work.getId());
		assertEquals("Morning Lift", work.getWeightTraining().get(0).getName());
		assertEquals(2022, work.getLogEntry().getDate().getYear());
		assertEquals(1, work.getLogEntry().getDate().getMonthValue());
		assertEquals(9, work.getLogEntry().getDate().getDayOfMonth());
	
	}

}
