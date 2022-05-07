-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workouttrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `workouttrackerdb` ;

-- -----------------------------------------------------
-- Schema workouttrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workouttrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `workouttrackerdb` ;

-- -----------------------------------------------------
-- Table `workout`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workout` ;

CREATE TABLE IF NOT EXISTS `workout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `workouts` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS workoutuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'workoutuser'@'localhost' IDENTIFIED BY 'workoutuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'workoutuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `workout`
-- -----------------------------------------------------
START TRANSACTION;
USE `workouttrackerdb`;
INSERT INTO `workout` (`id`, `workouts`) VALUES (1, 'Upper Push');
INSERT INTO `workout` (`id`, `workouts`) VALUES (2, 'Upper Pull');
INSERT INTO `workout` (`id`, `workouts`) VALUES (3, 'Lower Push');
INSERT INTO `workout` (`id`, `workouts`) VALUES (4, 'Lower Pull');
INSERT INTO `workout` (`id`, `workouts`) VALUES (5, 'Endurance Work');
INSERT INTO `workout` (`id`, `workouts`) VALUES (6, 'Recovery Work');

COMMIT;

