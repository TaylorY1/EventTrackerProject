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
  `primary_lift` VARCHAR(45) NULL,
  `sets` INT NULL,
  `repetitions` INT NULL,
  `implements_used` VARCHAR(100) NULL,
  `accessory_work` VARCHAR(250) NULL,
  `length_of_session` INT NULL,
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
INSERT INTO `workout` (`id`, `workouts`, `primary_lift`, `sets`, `repetitions`, `implements_used`, `accessory_work`, `length_of_session`) VALUES (1, 'Upper Push', 'Bench Press', 4, 8, 'Barbell', 'Dips', 60);
INSERT INTO `workout` (`id`, `workouts`, `primary_lift`, `sets`, `repetitions`, `implements_used`, `accessory_work`, `length_of_session`) VALUES (2, 'Upper Pull', 'Pendlay Rows', 3, 12, 'Dumbbells', 'Pullups', 52);
INSERT INTO `workout` (`id`, `workouts`, `primary_lift`, `sets`, `repetitions`, `implements_used`, `accessory_work`, `length_of_session`) VALUES (3, 'Lower Push', 'Front Squats', 5, 5, 'Axle Bar', 'RDLs', 45);
INSERT INTO `workout` (`id`, `workouts`, `primary_lift`, `sets`, `repetitions`, `implements_used`, `accessory_work`, `length_of_session`) VALUES (4, 'Lower Pull', 'Deadlifts', 3, 10, 'Trap Bar', 'Sissy Squats', 33);
INSERT INTO `workout` (`id`, `workouts`, `primary_lift`, `sets`, `repetitions`, `implements_used`, `accessory_work`, `length_of_session`) VALUES (5, 'Endurance Work', 'none', 4, 12, 'Rowing Machine', 'Planks', 65);
INSERT INTO `workout` (`id`, `workouts`, `primary_lift`, `sets`, `repetitions`, `implements_used`, `accessory_work`, `length_of_session`) VALUES (6, 'Recovery Work', 'none', 3, 30, 'Lacrosse Ball', 'Bretzel Stretch', 35);

COMMIT;

