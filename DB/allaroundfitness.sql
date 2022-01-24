-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema allroundfitness
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `allroundfitness` ;

-- -----------------------------------------------------
-- Schema allroundfitness
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `allroundfitness` DEFAULT CHARACTER SET utf8 ;
USE `allroundfitness` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(55) NOT NULL,
  `last_name` VARCHAR(55) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `role` VARCHAR(6) NULL,
  `enabled` TINYINT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `daily_log_entries`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `daily_log_entries` ;

CREATE TABLE IF NOT EXISTS `daily_log_entries` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `time_recorded` DATETIME NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_log_entries_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_log_entries_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workout`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workout` ;

CREATE TABLE IF NOT EXISTS `workout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `start_time` DATETIME NULL,
  `end_time` DATETIME NULL,
  `daily_log_entries_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_workout_daily_log_entries1_idx` (`daily_log_entries_id` ASC),
  CONSTRAINT `fk_workout_daily_log_entries1`
    FOREIGN KEY (`daily_log_entries_id`)
    REFERENCES `daily_log_entries` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `weight_excercise`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `weight_excercise` ;

CREATE TABLE IF NOT EXISTS `weight_excercise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cardio_excercise`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cardio_excercise` ;

CREATE TABLE IF NOT EXISTS `cardio_excercise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `images`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `images` ;

CREATE TABLE IF NOT EXISTS `images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NULL,
  `url` TEXT NULL,
  `title` VARCHAR(45) NULL,
  `weight_excercise_id` INT NULL,
  `cardio_excercise_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_images_weight_excercise1_idx` (`weight_excercise_id` ASC),
  INDEX `fk_images_cardio_excercise1_idx` (`cardio_excercise_id` ASC),
  CONSTRAINT `fk_images_weight_excercise1`
    FOREIGN KEY (`weight_excercise_id`)
    REFERENCES `weight_excercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_images_cardio_excercise1`
    FOREIGN KEY (`cardio_excercise_id`)
    REFERENCES `cardio_excercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `video`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `video` ;

CREATE TABLE IF NOT EXISTS `video` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NULL,
  `url` TEXT NULL,
  `title` VARCHAR(45) NULL,
  `cardio_excercise_id` INT NULL,
  `weight_excercise_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_video_cardio_excercise1_idx` (`cardio_excercise_id` ASC),
  INDEX `fk_video_weight_excercise1_idx` (`weight_excercise_id` ASC),
  CONSTRAINT `fk_video_cardio_excercise1`
    FOREIGN KEY (`cardio_excercise_id`)
    REFERENCES `cardio_excercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_video_weight_excercise1`
    FOREIGN KEY (`weight_excercise_id`)
    REFERENCES `weight_excercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `weight_training`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `weight_training` ;

CREATE TABLE IF NOT EXISTS `weight_training` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(55) NULL,
  `repetitions` INT NULL,
  `sets` INT NULL,
  `weight` DECIMAL(6,2) NULL,
  `scale` VARCHAR(3) NULL,
  `weight_excercise_id` INT NOT NULL,
  `workout_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_weight_training_weight_excercise1_idx` (`weight_excercise_id` ASC),
  INDEX `fk_weight_training_workout1_idx` (`workout_id` ASC),
  CONSTRAINT `fk_weight_training_weight_excercise1`
    FOREIGN KEY (`weight_excercise_id`)
    REFERENCES `weight_excercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_weight_training_workout1`
    FOREIGN KEY (`workout_id`)
    REFERENCES `workout` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cardio_training`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cardio_training` ;

CREATE TABLE IF NOT EXISTS `cardio_training` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `distance` DECIMAL(6,2) NULL,
  `scale` VARCHAR(3) NULL,
  `cardio_excercise_id` INT NOT NULL,
  `workout_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cadrio_training_cardio_excercise1_idx` (`cardio_excercise_id` ASC),
  INDEX `fk_cadrio_training_workout1_idx` (`workout_id` ASC),
  CONSTRAINT `fk_cadrio_training_cardio_excercise1`
    FOREIGN KEY (`cardio_excercise_id`)
    REFERENCES `cardio_excercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cadrio_training_workout1`
    FOREIGN KEY (`workout_id`)
    REFERENCES `workout` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS fitnesspal@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'fitnesspal'@'localhost' IDENTIFIED BY 'fitnesspal';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'fitnesspal'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `allroundfitness`;
INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `password`, `email`, `role`, `enabled`) VALUES (1, 'Jordon', 'Paynter', 'panther', 'panther', 'jordonpaynter22@gmail.com', 'admin', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `password`, `email`, `role`, `enabled`) VALUES (2, 'joe', 'vem', 'vemno', 'vemno', 'vemno@hotmail.com', 'basic', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `daily_log_entries`
-- -----------------------------------------------------
START TRANSACTION;
USE `allroundfitness`;
INSERT INTO `daily_log_entries` (`id`, `time_recorded`, `user_id`) VALUES (1, '2022-01-09 23:59:00', 1);
INSERT INTO `daily_log_entries` (`id`, `time_recorded`, `user_id`) VALUES (2, '2022-01-10 23:59:00', 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `workout`
-- -----------------------------------------------------
START TRANSACTION;
USE `allroundfitness`;
INSERT INTO `workout` (`id`, `start_time`, `end_time`, `daily_log_entries_id`) VALUES (1, '2022-01-09 13:59:00', '2022-01-09 14:59:00', 1);
INSERT INTO `workout` (`id`, `start_time`, `end_time`, `daily_log_entries_id`) VALUES (2, '2022-01-10 10:59:00', '2022-01-10 11:59:00', 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `weight_excercise`
-- -----------------------------------------------------
START TRANSACTION;
USE `allroundfitness`;
INSERT INTO `weight_excercise` (`id`, `name`) VALUES (1, 'bench');
INSERT INTO `weight_excercise` (`id`, `name`) VALUES (2, 'deadlift');
INSERT INTO `weight_excercise` (`id`, `name`) VALUES (3, 'squat');

COMMIT;


-- -----------------------------------------------------
-- Data for table `cardio_excercise`
-- -----------------------------------------------------
START TRANSACTION;
USE `allroundfitness`;
INSERT INTO `cardio_excercise` (`id`, `name`) VALUES (1, 'Long distance');
INSERT INTO `cardio_excercise` (`id`, `name`) VALUES (2, 'sprints');
INSERT INTO `cardio_excercise` (`id`, `name`) VALUES (3, 'swim');
INSERT INTO `cardio_excercise` (`id`, `name`) VALUES (4, 'bike');

COMMIT;


-- -----------------------------------------------------
-- Data for table `images`
-- -----------------------------------------------------
START TRANSACTION;
USE `allroundfitness`;
INSERT INTO `images` (`id`, `description`, `url`, `title`, `weight_excercise_id`, `cardio_excercise_id`) VALUES (1, 'Test Image Description', NULL, 'Test image', 1, NULL);
INSERT INTO `images` (`id`, `description`, `url`, `title`, `weight_excercise_id`, `cardio_excercise_id`) VALUES (2, 'test cardio decs', NULL, 'test cardio', NULL, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `video`
-- -----------------------------------------------------
START TRANSACTION;
USE `allroundfitness`;
INSERT INTO `video` (`id`, `description`, `url`, `title`, `cardio_excercise_id`, `weight_excercise_id`) VALUES (1, 'video testing description', NULL, 'video test', 1, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `weight_training`
-- -----------------------------------------------------
START TRANSACTION;
USE `allroundfitness`;
INSERT INTO `weight_training` (`id`, `name`, `repetitions`, `sets`, `weight`, `scale`, `weight_excercise_id`, `workout_id`) VALUES (1, 'Morning Lift', 6, 4, 165, 'lbs', 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `cardio_training`
-- -----------------------------------------------------
START TRANSACTION;
USE `allroundfitness`;
INSERT INTO `cardio_training` (`id`, `name`, `distance`, `scale`, `cardio_excercise_id`, `workout_id`) VALUES (1, 'morning run', 5.0, 'km', 1, 2);

COMMIT;

