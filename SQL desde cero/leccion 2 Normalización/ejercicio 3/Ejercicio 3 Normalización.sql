CREATE TABLE `users` (
  `user_id` int PRIMARY KEY,
  `nombre` varchar(255)
);

CREATE TABLE `photo_profile` (
  `user_id` int,
  `photo_id` int,
  `file` file,
  PRIMARY KEY (`user_id`, `photo_id`)
);

CREATE TABLE `lectores` (
  `lector_id` int PRIMARY KEY,
  `name` varchar(255),
  `score` int
);

CREATE TABLE `writing` (
  `write_id` int PRIMARY KEY,
  `name` varchar(255)
);

ALTER TABLE `photo_profile` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

CREATE TABLE `lectores_writing` (
  `lectores_lector_id` int NOT NULL,
  `writing_write_id` int NOT NULL,
  PRIMARY KEY (`lectores_lector_id`, `writing_write_id`)
);

ALTER TABLE `lectores_writing` ADD FOREIGN KEY (`lectores_lector_id`) REFERENCES `lectores` (`lector_id`);

ALTER TABLE `lectores_writing` ADD FOREIGN KEY (`writing_write_id`) REFERENCES `writing` (`write_id`);

